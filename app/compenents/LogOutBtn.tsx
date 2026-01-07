"use client";
import Link from "next/link";
import useUserStore from "../store";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function LogOutBtn() {
  const { updateUser } = useUserStore();
  const router = useRouter();
  function logout() {
    updateUser(false);
    router.push("./login");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    localStorage.removeItem("fullname");
    toast.warning("Log Out successfully");
  }

  return (
    <div
      onClick={logout}
      className={`px-2 cursor-pointer text-sm capitalize  border-b border-b-black dark:border-b-white hover:border-b-amber-600 hover:dark:border-b-amber-600 duration-300 w-fit`}
    >
      Log out
    </div>
  );
}

export default LogOutBtn;
