"use client";
import { Oxanium } from "next/font/google";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import useUserStore from "../store";
import { toast } from "react-toastify";

const oxanium = Oxanium({
  subsets: ["latin"],
});

interface logInTypes {
  email: string;
  password: string;
}

function LogIn() {
  const { theme } = useTheme();
  const router = useRouter();
  const { updateUser, AccInfo } = useUserStore();

  const formik = useFormik<logInTypes>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // chech user exist

      const url = new URL("https://695137c070e1605a10898dad.mockapi.io/users");
      url.searchParams.append("email", values.email);
      url.searchParams.append("password", values.password);

      fetch(url, {
        method: "GET",
        headers: { "content-type": "application/json" },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          // handle error
        })
        .then((tasks) => {
          if (tasks == undefined) {
            alert("user not exist");
          } else {
            //  if authothication correct alert
            updateUser(true);
            router.push("/");
            const fullName = tasks[0].firstname + " " + tasks[0].lastname;
            AccInfo(fullName, tasks[0].email);
            toast.success(`Log In Successfully`);
          }
        })
        .catch((error) => {
          // handle error
        });
    },
  });

  return (
    <div
      className={`py-4 flex justify-center items-center ${oxanium.className} bg-white dark:bg-black`}
    >
      <div className="w-[90%] md:w-[30%] h-[500px] ">
        <span className="text-[28px]">Login</span>
        <form
          onSubmit={formik.handleSubmit}
          className="grid w-full  items-center gap-2 mt-16"
        >
          {/* input search */}
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className={` px-2 outline-0 text-lg w-full ${
              theme === "light"
                ? " caret-black text-black  placeholder:text-black border-b"
                : "caret-white text-white  placeholder:text-white border-b"
            }`}
          />

          {/* input paswssord */}
          <label htmlFor="password" className="text-sm mt-8">
            Paswssord
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className={` px-2 outline-0 text-lg w-full ${
              theme === "light"
                ? " caret-black text-black  placeholder:text-black border-b"
                : "caret-white text-white  placeholder:text-white border-b"
            }`}
          />
          <button
            type="submit"
            className="w-[110px] h-[48px] bg-black dark:bg-white text-white dark:text-black font-bold mt-4 hover:opacity-60 duration-300 cursor-pointer"
          >
            Sign in
          </button>

          <Link
            href={"/signup"}
            className="border-b border-b-black dark:border-b-white w-fit mt-9 hover:border-b-orange-500 dark:hover:border-b-orange-500 duration-300"
          >
            Create account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
