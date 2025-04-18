"use client";
import { EmailIcon, PasswordIcon } from "@/assets/icons";
import Link from "next/link";
import React, { useState} from "react";
import InputGroup from "../FormElements/InputGroup";
import { Checkbox } from "../FormElements/checkbox";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import { loginUser } from "@/redux/actions/signinAction";
import { toast } from "react-toastify";

export default function SigninWithPassword() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const [data, setData] = useState({
    UserID: "",
    Password: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await dispatch<any>(loginUser(data.UserID, data.Password));
      if (!result?.success) {
        router.push("/homes");
        toast.success("successfully login");
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        toast.error("login failed");
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup
        type="name"
        label="Enter your email or phone number"
        className="mb-4 [&_input]:py-[15px]"
        placeholder="Enter your email or Phone number"
        name="UserID"
        handleChange={handleChange}
        value={data.UserID}
        icon={<EmailIcon />}
      />

      <InputGroup
        type="password"
        label="Password"
        className="mb-5 [&_input]:py-[15px]"
        placeholder="Enter your password"
        name="Password"
        handleChange={handleChange}
        value={data.Password}
        icon={<PasswordIcon />}
      />

      <div className="mb-6 flex items-center justify-between gap-2 py-2 font-medium">
        <Checkbox
          label="Remember me"
          name="remember"
          withIcon="check"
          minimal
          radius="md"
          onChange={(e) =>
            setData({
              ...data,
              remember: e.target.checked,
            })
          }
        />

        <Link
          href="/auth/forgot-password"
          className="hover:text-primary dark:text-white dark:hover:text-primary"
        >
          Forgot Password?
        </Link>
      </div>

      <div className="mb-4.5">
        <button
          type="submit"
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue p-4 font-medium text-white transition hover:bg-opacity-90 disabled:opacity-50"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}
