import { CallIcon, EmailIcon, UserIcon } from "@/assets/icons";
import InputGroup from "@/components/FormElements/InputGroup";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";

export function UploadPhotoForm() {
  return (
    <ShowcaseSection title="Contact Information" className="!p-7">
      <form>
        <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
          <InputGroup
            className="w-full sm:w-1/2"
            type="text"
            name="mobileNumber"
            label="Mobile No (SMS/OTP)"
            placeholder="Mobile No"
            defaultValue="6587404867"
            icon={<CallIcon />}
            iconPosition="left"
            height="sm"
            disabled
          />

          <InputGroup
            className="w-full sm:w-1/2"
            type="text"
            name="contactNumber"
            label="Contact No"
            placeholder="Contact No"
            defaultValue="6582621518"
            icon={<CallIcon />}
            iconPosition="left"
            height="sm"
            disabled
          />
        </div>

        <InputGroup
          className="mb-5.5"
          type="email"
          name="email"
          label="Email"
          placeholder="Email"
          defaultValue="6582621518@easytpup.sg"
          icon={<EmailIcon />}
          iconPosition="left"
          height="sm"
          disabled
        />

        <InputGroup
          className="mb-5.5"
          type="text"
          name="companyName"
          label="Company Name"
          placeholder="Company Name"
          defaultValue="Company Name"
          icon={<UserIcon />}
          iconPosition="left"
          height="sm"
          disabled
        />
      </form>
    </ShowcaseSection>
  );
}
