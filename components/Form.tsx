import React from "react";
import useCurrentUser from "@/hooks/useCurrentUser";
import useRegisterModel from "@/hooks/useRegisterModel";
import useLoginModel from "@/hooks/useLoginModel";
import usePosts from "@/hooks/usePosts";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import { useCallback } from "react";
import Button from "./Button";

interface FormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
}

const Form: React.FC<FormProps> = ({ placeholder, isComment, postId }) => {
  const registerModel = useRegisterModel();
  const loginModel = useLoginModel();

  const { data: currentUser } = useCurrentUser();
  const { mutate: mutatePosts } = usePosts();

  const [body, setBody] = React.useState("");

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      const url = isComment ? `/api/comments?postId=${postId}` : "/api/posts";

      await axios.post(url, { body });

      toast.success("Tweet created");
      setBody("");
      mutatePosts();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [body, mutatePosts]);

  return (
    <div className="border-b-[1px] border-neutral-700 px-5 py-2">
      {currentUser ? (
        <div className="flex flex-row gap-4">
          <div></div>
        </div>
      ) : (
        <div className="py-8">
          <h1 className="text-white text-2xl text-center mb-4 font-bold">
            Welcome to Social Media
          </h1>
          <div className="flex flex-row items-center justify-center gap-4">
            <Button label="Login" onClick={loginModel.onOpen} />
            <Button label="Register" onClick={registerModel.onOpen} secondary />
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
