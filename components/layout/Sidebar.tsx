import { HiHome } from "react-icons/hi2";
import { IoNotificationsCircle } from "react-icons/io5";
import { RiUser6Fill } from "react-icons/ri";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import { RiLogoutCircleLine } from "react-icons/ri";
import SidebarTweetButton from "./SidebarTweetButton";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();
  const items = [
    {
      label: "Home",
      href: "/",
      icon: HiHome,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: IoNotificationsCircle,
      auth: true,
      alert: currentUser?.hasNotification,
    },
    {
      label: "User Profile",
      href: `/users/${currentUser?.id}`,
      icon: RiUser6Fill,
      auth: true,
    },
  ];

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space gap-y-2 lg:w-[200px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              auth={item.auth}
              alert={item.alert}
            />
          ))}
          {currentUser && (
            <SidebarItem
              onClick={() => signOut()}
              icon={RiLogoutCircleLine}
              label="Logout"
            />
          )}
          ;
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
