
import useLoginModel from "@/hooks/useLoginModel"
import { set } from "lodash";
import { useCallback, useState } from "react"
import Model from "../Model"

const LoginModel = () => {

    const LoginModel = useLoginModel();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(async() => {
        try{
            setIsLoading(true);

            //add login logic here

            LoginModel.onClose();
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    },[LoginModel]);


    const bodyContent = (
        <div className="flex flex-col gap-4">
            <input 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <input 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
            />
        </div>
    )



  return (
    <div>
        <Model 
            disabled={isLoading}
            isOpen={LoginModel.isOpen}
            title="Login"
            actionLabel="Sign in"
            onClose={LoginModel.onClose}
            onSubmit={onSubmit}
            body={bodyContent}

        />
    </div>
  )
}

export default LoginModel