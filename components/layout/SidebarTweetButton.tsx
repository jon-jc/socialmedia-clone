import { useRouter } from "next/router";
import { FaFeather } from "react-icons/fa";

import useLoginModel from "@/hooks/useLoginModel";

const SidebarTweetButton = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/")}>
      <div
        className="
        mt-5
        lg:hidden
        rounded-full
        h-12
        w-12
        p-4
        flex
        items-center
        bg-slate-500
        hover:bg-opacity-80
        transition
        cursor-pointer

      "
      >
        <FaFeather size={24} color="white" />
      </div>
      <div
        className="
        mt-6
        hidden
        lg:block
        px-4
        py-2 
        rounded-full
        bg-white
        hover:bg-opacity-90
        cursor-pointer
        transition
       "
      >
        <p
          className="
          hidden
          lg:block
          text-center
          font-semibold
          text-slate-900
          text-[20px]
        "
        >
          Post
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
