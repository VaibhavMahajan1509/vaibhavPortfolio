import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div id="contact" className="flex flex-col gap-4">
      <SingleInfo text="Vaibhav.mahajan1509@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+916267090692" Image={FiPhone} />
      <SingleInfo text="Indore, Madhyapradesh" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
