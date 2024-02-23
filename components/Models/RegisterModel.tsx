import useLoginModel from "@/hooks/useLoginModel"
import { set } from "lodash";
import { useCallback, useState } from "react"
import Model from "../Model"
import useRegisterModel from "@/hooks/useRegisterModel";
import Input from "../Input";
import LoginModel from "./LoginModel";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { sign } from "crypto";

const RegisterModel = () => {

    const loginModel = useLoginModel();
    const registerModel = useRegisterModel();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if(isLoading){
            return;
        }

        registerModel.onClose();
        loginModel.onOpen();
    }, [isLoading, registerModel, loginModel]);

    const onSubmit = useCallback(async() => {
        try{
            setIsLoading(true);

            //add login logic here
            await axios.post("/api/register", {
                email,
                password,
                username,
                name,
        });

        toast.success("Account created successfully");
         
        signIn("credentials", {
            email,
            password,
        });

            registerModel.onClose();
        } catch (error) {
            console.error(error);
            toast.error("Failed to create account");
        } finally {
            setIsLoading(false);
        }
    },[registerModel, email, password, username, name]);


    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input 
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isLoading}
            />
            <Input 
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                disabled={isLoading}
            />
            <Input 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
            />
        </div>
    )


    const footerContent = (
        <div className="text-neutral-500 text-center mt-4">
            <p>Already have an account?
              <span
                onClick={onToggle}
               className="
                text-white
                cursor-pointer
                hover:underline
              "> Sign in</span>
            </p>

        </div>
    )
  return (
    <div>
        <Model 
            disabled={isLoading}
            isOpen={registerModel.isOpen}
            title="Create an account"
            actionLabel="Register"
            onClose={registerModel.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}

        />
    </div>
  )
}

export default RegisterModel