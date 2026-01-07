"use client";

import React, { useEffect } from "react";
import useUserStore from "../store";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function AuthLoader() {
  const { updateUser, AccInfo } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const email= localStorage.getItem("email") as string
    const fullname = localStorage.getItem("fullname") as string
    if (isLoggedIn == "true") {
      //  if authothication correct alert
      updateUser(true);
      router.push("/");
      AccInfo(fullname, email);
      toast.success("Log In SuccessFull beacuse you log in before");
    }
  }, []);
  return null;
}

export default AuthLoader;
