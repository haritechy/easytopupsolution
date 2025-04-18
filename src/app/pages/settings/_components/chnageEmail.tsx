"use client";

import { useState } from "react";
import {
  EmailIcon,
  PencilSquareIcon,
  UserIcon,
  CallIcon,
} from "@/assets/icons";
import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";

export function ChangeEmail() {
  const [newEmail, setNewEmail] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Email:", newEmail);
    console.log("Security Code:", securityCode);
    // Add your API call or save logic here
  };

  return (
    <ShowcaseSection title="Change Email" className="!p-7">
      <form onSubmit={handleSaveChanges} className="flex flex-col gap-5.5">

        {/* New Email Input */}
        <InputGroup
          className="mb-5.5"
          type="email"
          name="newEmail"
          label="New Email"
          placeholder="Enter new email"
          icon={<EmailIcon />}
          iconPosition="left"
          height="sm"
          value={newEmail}
          handleChange={(e) => setNewEmail(e.target.value)}
        />

        {/* Show Security Code only after email is entered */}
        {newEmail.trim() !== "" && (
          <InputGroup
            className="mb-5.5"
            type="text"
            name="securityCode"
            label="Security Code"
            placeholder="Enter security code"
            icon={<CallIcon />}
            iconPosition="left"
            height="sm"
            value={securityCode}
            handleChange={(e) => setSecurityCode(e.target.value)}
          />
        )}

        {/* Save Button */}
        <div className="text-right">
          <button
            type="submit"
            className="rounded-md bg-primary px-6 py-2 text-white hover:bg-primary-dark"
            disabled={!newEmail.trim() || !securityCode.trim()}
          >
            Save Changes
          </button>
        </div>
      </form>
    </ShowcaseSection>
  );
}
