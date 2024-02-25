import useCurrentUser from "./useCurrentUser";
import useUser from "./useUser";
import { useCallback, useMemo } from "react";
import useLoginModel from "./useLoginModel";
import { toast } from "react-hot-toast";
import axios from "axios";

const UseFollow = (userId: string) => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { mutate: mutateFetchedUser } = useUser(userId);

  const LoginModel = useLoginModel();

  const isFollowing = useMemo(() => {
    const list = currentUser?.followingIds || [];

    return list.includes(userId);
  }, [userId, currentUser?.followingIds]);

  const toggleFollow = useCallback(async () => {
    if (!currentUser) {
      return LoginModel.onOpen();
    }
    try {
      let request;

      if (isFollowing) {
        request = () => axios.delete(`/api/follow/`, { data: { userId } });
      } else {
        request = () => axios.post(`/api/follow/`, { userId });
      }

      await request();

      mutateCurrentUser();
      mutateFetchedUser();
      toast.success(isFollowing ? "Unfollowed" : "Followed");
    } catch (error) {
      toast.error("Error following user");
      console.error(error);
    }
  }, [
    currentUser,
    isFollowing,
    userId,
    mutateCurrentUser,
    mutateFetchedUser,
    LoginModel,
  ]);

  return {
    isFollowing,
    toggleFollow,
  };
};

export default UseFollow;
