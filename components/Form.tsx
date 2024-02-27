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
import Avatar from "./Avatar";
import { TypewriterEffect } from "./ui/typewriter-effect";
import usePost from "@/hooks/usePost";

interface FormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
}

const Form: React.FC<FormProps> = ({ placeholder, isComment, postId }) => {
  const words = [
    {
      text: "Welcome",
    },
    {
      text: "to",
    },
    {
      text: "the",
    },
    {
      text: "next",
    },
    {
      text: "Social",
    },
    {
      text: "media.",
      className: "text-slate-500 dark:text-slate-500",
    },
  ];

  const registerModel = useRegisterModel();
  const loginModel = useLoginModel();

  const { data: currentUser } = useCurrentUser();
  const { mutate: mutatePosts } = usePosts();
  const { mutate: mutatePost } = usePost(postId as string);

  const [body, setBody] = React.useState("");

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      const url = isComment ? `/api/comments?postId=${postId}` : "/api/posts";

      await axios.post(url, { body });

      toast.success("Post created");
      setBody("");
      mutatePosts();
      mutatePost();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [body, mutatePosts, postId, isComment, mutatePost]);

  return (
    <div className="border-b-[1px] border-neutral-700 px-5 py-2">
      {currentUser ? (
        <div className="flex flex-row gap-4">
          <div>
            <Avatar userId={currentUser.id} />
          </div>
          <div className="w-full">
            <textarea
              disabled={isLoading}
              onChange={(e) => setBody(e.target.value)}
              value={body}
              className="
            disabled:opacity-80
            peer
            resize-none
            mt-3
            w-full
            bg-black
            ring-0
            outline-none
            text-[20px]
            placeholder-neutral-500
            text-white
            "
              placeholder={placeholder}
            ></textarea>
            <hr
              className="
                opacity-0
                peer:focus:opacity-100
                h-[1px]
                w-full
                border-neutral-500
                transition
            "
            />
            <div className="flex flex-row mt-4 justify-end">
              <Button
                label="Post"
                onClick={onSubmit}
                disabled={isLoading || !body}
                secondary
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="py-8">
          <h1 className="text-white text-2xl text-center mb-4 font-bold">
            <TypewriterEffect words={words} />
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
