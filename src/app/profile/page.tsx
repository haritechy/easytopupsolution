"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState } from "react";
import { UploadPhotoForm } from "../pages/settings/_components/upload-photo";
import { PersonalInfoForm } from "../pages/settings/_components/personal-info";
import { SocialAccounts } from "./_components/social-accounts";
import { ChangePassword } from "../pages/settings/_components/changepassword";
import { ChangeEmail } from "../pages/settings/_components/chnageEmail";
import { ChangeMobile } from "../pages/settings/_components/changemobile";

export default function Page() {
  const [activeTab, setActiveTab] = useState("personal");

  const renderTabContent = () => {
    switch (activeTab) {
      case "personal":
        return <PersonalInfoForm />;
      case "contact information":
        return <UploadPhotoForm />;
      case "chnage password":
        return <ChangePassword />;
      case "change email":
        return <ChangeEmail />;
      case "change mobile":
        return <ChangeMobile />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto w-full max-w-[970px] px-4">
      <Breadcrumb pageName="Profile" />

      {/* Tabs */}
      <div className="flex w-full overflow-x-auto space-x-3 sm:space-x-4 border-b border-gray-200 mb-6 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
        {[
          { key: "personal", label: "Personal Information" },
          { key: "contact information", label: "Contact Information" },
          { key: "chnage password", label: "Change Password" },
          { key: "change mobile", label: "Change Mobile Number" },
          { key: "change email", label: "Change Email" },
        ].map((tab) => (
          <button
            key={tab.key}
            className={`flex-shrink-0 px-4 py-2 text-sm sm:text-base rounded-full font-medium transition-all duration-200 ${
              activeTab === tab.key
                ? "bg-white dark:bg-gray-700 text-orange-500 shadow dark:text-white"
                : "text-[#394499] hover:text-black dark:text-gray-300 dark:hover:text-white"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 sm:p-6">
        {renderTabContent()}
      </div>
    </div>
  );
}
