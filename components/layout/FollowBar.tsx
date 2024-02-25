import React, { use } from "react";

import useUsers from "@/hooks/useUsers";
import Avatar from "../Avatar";
import { Meteors } from "../ui/meteors";

const FollowBar = () => {
  const { data: users = [] } = useUsers();

  if (users.length === 0) {
    return null;
  }

  return (
    <div className="px-6 py-4 hidden lg:block">
      <Meteors />
      <div className="bg-neutral-800 rounded-xl p-4">
        <h2 className="text-white text-xl font-mono">Explore</h2>
        <div className="flex flex-col gap-0 mr-4">
          {users.map((user: Record<string, any>) => (
            <div key={user.id} className="flex flex-row gap-4">
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <p
                  className="text-white 
                font-mono
                text-sm"
                >
                  {user.name}
                </p>
                <p className="text-slate-400 text-sm font-thin">
                  @{user.username}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
