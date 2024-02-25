import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

import usePost from "@/hooks/usePost";

import Header from "@/components/Header";

const PostView = () => {
  const router = useRouter();
  const { postId } = router.query;

  const { data: fetchedPost, isLoading } = usePost(postId as string);

  if (isLoading || !fetchedPost) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="white" size={80} />
      </div>
    );
  }

  return (
    <>
      <Header showBackArrow label="Post" />
    </>
  );
};

export default PostView;
