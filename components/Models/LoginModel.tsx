
import useLoginModel from "@/hooks/useLoginModel"
import { set } from "lodash";
import { useCallback, useState } from "react"
import Model from "../Model"
import Input from "../Input";
import useRegisterModel from "@/hooks/useRegisterModel";
import { signIn } from "next-auth/react";

const LoginModel = () => {

    const loginModel = useLoginModel();
    const registerModel = useRegisterModel();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if(isLoading){
            return;
        }

        loginModel.onClose();
        registerModel.onOpen();
    }, [isLoading, registerModel, loginModel]);


    const onSubmit = useCallback(async() => {
        try{
            setIsLoading(true);

            //add login logic here
            await signIn("credentials", {
                email,
                password,
            });


            loginModel.onClose();
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    },[loginModel,email, password]);


    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
            <p>First time here?
              <span
                onClick={onToggle}
               className="
                text-white
                cursor-pointer
                hover:underline
              "> Create an Account</span>
            </p>

        </div>
    )



  return (
    <div>
        <Model 
            disabled={isLoading}
            isOpen={loginModel.isOpen}
            title="Login"
            actionLabel="Sign in"
            onClose={loginModel.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}

        />
    </div>
  )
}

export default LoginModel