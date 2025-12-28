"use client";
import { Oxanium } from "next/font/google";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import { useFormik } from "formik";
import useUserStore from "../store";
import { useRouter } from "next/navigation";

interface SignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

type SignUpFormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
};

const oxanium = Oxanium({
  subsets: ["latin"],
});

const validate = (values) => {
  const errors: SignUpFormErrors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = "Must contain at least one uppercase letter";
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = "Must contain at least one lowercase letter";
  } else if (!/[0-9]/.test(values.password)) {
    errors.password = "Must contain at least one number";
  } else if (!/[!@#$%^&*(),.?\":{}|<>]/.test(values.password)) {
    errors.password = "Must contain at least one special character";
  }

  return errors;
};

function SignUp() {
  const { theme } = useTheme();
  const router = useRouter();
  const { login, updateUser } = useUserStore();

  const formik = useFormik<SignUpFormValues>({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      // chech user exist

      const url = new URL("https://695137c070e1605a10898dad.mockapi.io/users");
      url.searchParams.append("email", values.email);

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
            //  if not exist add user
            const newTask = {
              firstname: values.firstName,
              lastname: values.lastName,
              password: values.password,
              email: values.email,
            };

            fetch("https://695137c070e1605a10898dad.mockapi.io/users", {
              method: "POST",
              headers: { "content-type": "application/json" },
              // Send your data in the request body as JSON
              body: JSON.stringify(newTask),
            })
              .then((res) => {
                if (res.ok) {
                  return res.json();
                }
                // handle error
              })
              .then((task) => {
                updateUser(true);
                router.push("/");
              })
              .catch((error) => {
                // handle error
              });
          } else {
            alert("user exist");
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
        <span className="text-[28px]">Create Account</span>
        <form
          onSubmit={formik.handleSubmit}
          className="grid w-full  items-center  mt-5"
        >
          {/* input first name */}
          <label htmlFor="firstName" className="text-sm">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className={` px-2 outline-0 text-lg w-full ${
              theme === "light"
                ? " caret-black text-black  placeholder:text-black border-b"
                : "caret-white text-white  placeholder:text-white border-b"
            }`}
          />
          {formik.submitCount > 0 && formik.errors.firstName ? (
            <div className="text-red-400">{formik.errors.firstName}</div>
          ) : null}

          {/* input last name */}
          <label htmlFor="lastName" className="text-sm mt-4">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className={` px-2 outline-0 text-lg w-full ${
              theme === "light"
                ? " caret-black text-black  placeholder:text-black border-b"
                : "caret-white text-white  placeholder:text-white border-b"
            }`}
          />
          {formik.submitCount > 0 && formik.errors.lastName ? (
            <div className="text-red-400">{formik.errors.lastName}</div>
          ) : null}

          {/* input email */}
          <label htmlFor="email" className="text-sm mt-4">
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
          {formik.submitCount > 0 && formik.errors.email ? (
            <div className="text-red-400">{formik.errors.email}</div>
          ) : null}

          {/* input paswssord */}
          <label htmlFor="password" className="text-sm mt-4">
            Paswssord
          </label>
          <input
            type="text"
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
          {formik.submitCount > 0 && formik.errors.password ? (
            <div className="text-red-400">{formik.errors.password}</div>
          ) : null}

          <button
            // onClick={signUpCheck}
            type="submit"
            className="w-[110px] h-[48px] bg-black dark:bg-white text-white dark:text-black font-bold mt-4 hover:opacity-60 duration-300 cursor-pointer"
          >
            Create
          </button>

          <Link
            href={"./login"}
            className="border-b border-b-black dark:border-b-white w-fit mt-9 hover:border-b-orange-500 dark:hover:border-b-orange-500 duration-300"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
