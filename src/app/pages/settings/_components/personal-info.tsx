import {
  CallIcon,
  EmailIcon,
  PencilSquareIcon,
  UserIcon,
} from "@/assets/icons";
import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";

export function PersonalInfoForm() {
  return (
    <ShowcaseSection title="Personal Information" className="!p-7">
      <form>
        <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
          <InputGroup
            className="w-full sm:w-1/2"
            type="text"
            name="firstName"
            label="First Name"
            placeholder="First Name"
            defaultValue="APPSDEMO"
            icon={<UserIcon />}
            iconPosition="left"
            height="sm"
            disabled
          />

          <InputGroup
            className="w-full sm:w-1/2"
            type="text"
            name="lastName"
            label="Last Name"
            placeholder="Last Name"
            defaultValue="IOS"
            icon={<UserIcon />}
            iconPosition="left"
            height="sm"
            disabled
          />
        </div>

        <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
          <InputGroup
            className="w-full sm:w-1/2"
            type="text"
            name="street"
            label="Street"
            placeholder="Street"
            defaultValue="Street"
            icon={<UserIcon />}
            iconPosition="left"
            height="sm"
            disabled
          />

          <InputGroup
            className="w-full sm:w-1/2"
            type="text"
            name="city"
            label="City"
            placeholder="City"
            defaultValue="City"
            icon={<UserIcon />}
            iconPosition="left"
            height="sm"
            disabled
          />
        </div>

        <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
          <InputGroup
            className="w-full sm:w-1/2"
            type="text"
            name="state"
            label="State"
            placeholder="State"
            defaultValue="State"
            icon={<UserIcon />}
            iconPosition="left"
            height="sm"
            disabled
          />

          <InputGroup
            className="w-full sm:w-1/2"
            type="text"
            name="pincode"
            label="Pin Code"
            placeholder="Pin Code"
            defaultValue="Pin Code"
            icon={<UserIcon />}
            iconPosition="left"
            height="sm"
            disabled
          />
        </div>

        <InputGroup
          className="mb-5.5"
          type="text"
          name="country"
          label="Country"
          placeholder="Country"
          defaultValue="Country"
          icon={<UserIcon />}
          iconPosition="left"
          height="sm"
          disabled
        />

        <TextAreaGroup
          className="mb-5.5"
          label="Remarks"
          placeholder="Remarks"
          icon={<PencilSquareIcon />}
          defaultValue=""
          disabled
        />
      </form>
    </ShowcaseSection>
  );
}
