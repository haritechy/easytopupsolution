"use client";

import { useState } from "react";
import { CallIcon } from "@/assets/icons";
import InputGroup from "@/components/FormElements/InputGroup";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";

export function ChangeMobile() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [showCodeField, setShowCodeField] = useState(false); // Flag to control next step

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileNumber.trim() !== "") {
      setShowCodeField(true);
    }
  };

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Mobile:", mobileNumber);
    console.log("Security Code:", securityCode);
    // Add your API call or logic here
  };

  return (
    <ShowcaseSection title="Change Mobile" className="!p-7">
      <form
        onSubmit={showCodeField ? handleSaveChanges : handleNext}
        className="flex flex-col gap-5.5"
      >
        {/* New Mobile Number Input */}
        <InputGroup
          className="mb-5.5"
          type="text"
          name="mobileNumber"
          label="New Number"
          placeholder="Enter new mobile number"
          icon={<CallIcon />}
          iconPosition="left"
          height="sm"
          value={mobileNumber}
          handleChange={(e) => setMobileNumber(e.target.value)}
          disabled={showCodeField} // Lock input after proceeding
        />

        {/* Show Security Code input only after clicking Next */}
        {showCodeField && (
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

        {/* Buttons */}
        <div className="text-right">
          {!showCodeField ? (
            <button
              type="submit"
              className="rounded-md bg-primary px-6 py-2 text-white hover:bg-primary-dark"
              disabled={!mobileNumber.trim()}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="rounded-md bg-primary px-6 py-2 text-white hover:bg-primary-dark"
              disabled={!securityCode.trim()}
            >
              Save Changes
            </button>
          )}
        </div>
      </form>
    </ShowcaseSection>
  );
}
