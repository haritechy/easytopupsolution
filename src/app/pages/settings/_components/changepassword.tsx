import {

    PencilSquareIcon,
  } from "@/assets/icons";
  import InputGroup from "@/components/FormElements/InputGroup";
  import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { Button } from "@/components/ui-elements/button";
import { Lock } from "lucide-react";

  
  export function ChangePassword() {
    return (
      <ShowcaseSection title="Change Password" className="!p-7">
        <form className="flex flex-col gap-5.5">
          <InputGroup
            className="w-full"
            type="password"
            name="currentPassword"
            label="Current Password"
            placeholder="Enter current password"
            icon={<Lock />}
            iconPosition="left"
            height="sm"
          />
  
          <InputGroup
            className="w-full"
            type="password"
            name="newPassword"
            label="New Password"
            placeholder="Enter new password"
            icon={<Lock />}
            iconPosition="left"
            height="sm"
          />
  
          <InputGroup
            className="w-full"
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm new password"
            icon={<Lock />}
            iconPosition="left"
            height="sm"
          />
  <div className="text-right">
          <button
            type="submit"
            className="rounded-md bg-primary px-6 py-2 text-white hover:bg-primary-dark"
           
          >
            Save Changes
          </button>
        </div>
        </form>
      </ShowcaseSection>
    );
  }
  