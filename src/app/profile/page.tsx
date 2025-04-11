"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";

import { useState } from "react";
import { CameraIcon } from "./_components/icons";
import { SocialAccounts } from "./_components/social-accounts";
import { UploadPhotoForm } from "../pages/settings/_components/upload-photo";
import { PersonalInfoForm } from "../pages/settings/_components/personal-info";

export default function Page() {
  const [data, setData] = useState({
    name: "Danish Heilium",
    profilePhoto: "/images/user/user-03.png",
    coverPhoto: "/images/cover/cover-01.png",
  });

  const handleChange = (e: any) => {
    if (e.target.name === "profilePhoto" ) {
      const file = e.target?.files[0];

      setData({
        ...data,
        profilePhoto: file && URL.createObjectURL(file),
      });
    } else if (e.target.name === "coverPhoto") {
      const file = e.target?.files[0];

      setData({
        ...data,
        coverPhoto: file && URL.createObjectURL(file),
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="mx-auto w-full max-w-[970px]">
      <Breadcrumb pageName="Profile" />

      <div className="mx-auto w-full max-w-[1080px]">
    

      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-5 xl:col-span-3">
<PersonalInfoForm />
        </div>
        <div className="col-span-5 xl:col-span-2">
        <UploadPhotoForm />
        </div>
      </div>
    </div>
    </div>
  );
}
