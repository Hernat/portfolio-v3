"use client";

import {
   RiWhatsappFill,
   RiLinkedinFill,
   RiGithubFill,
   RiFacebookBoxFill,
   RiGoogleFill,
} from "react-icons/ri";
import Link from "next/link";

const icons = [
   {
      path: "https://api.whatsapp.com/send?phone=261341769459",
      name: <RiWhatsappFill />,
   },
   {
      path: "https://www.linkedin.com/in/toky-hernat-rijamanjaka-972767133/",
      name: <RiLinkedinFill />,
   },
   {
      path: "https://github.com/Hernat",
      name: <RiGithubFill />,
   },
   {
      path: "https://web.facebook.com/touky.hernat",
      name: <RiFacebookBoxFill />,
   },
   {
      path: "mailto:tokyhernat@gmail.com",
      name: <RiGoogleFill />,
   },
];

const Socials = ({ containerStyles, iconsStyles }) => {
   return (
      <div className={`${containerStyles}`}>
         {icons.map((icon, index) => (
            <Link href={icon.path} key={index} target="_blank">
               <div className={`${iconsStyles}`}>{icon.name}</div>
            </Link>
         ))}
      </div>
   );
};

export default Socials;
