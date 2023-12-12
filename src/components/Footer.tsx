import { TemplateContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from "next/link";

const links = [
  {
    title: "Services",
    links: [
      {
        title: "Find a Store",
        link: "./",
      },
      {
        title: "Contact Us",
        link: "./",
      },
      {
        title: "Feedback",
        link: "./",
      },
      {
        title: "Promo Codes",
        link: "./",
      },
      {
        title: "FAQ",
        link: "./",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        title: "Terms and Conditions",
        link: "./",
      },
      {
        title: "Privacy Policy",
        link: "./",
      },
      {
        title: "About Us",
        link: "./",
      },
      {
        title: "Careers",
        link: "./",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-slate-50">
      <div className="flex flex-col pb-8 mt-8 md:flex-row w-[80%]">
        <div className="flex justify-center pt-8 md:w-1/2">
          nxtStore&apos;s mission is to bring tech to your doorstep in the fastest
          amount of time.
        </div>
        <div className="flex gap-16 pt-8 mt-8 justify-evenly md:w-1/2 md:mt-0">
          {links.map((obj, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="font-bold">{obj.title}</h3>
              {obj.links.map((link, linkIndex) => (
                <Link key={linkIndex} href={link.link}>
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[80%] border-t py-8">&copy; 2023 nxtStore, Inc. All rights reserved</div>
    </footer>
  );
};

export default Footer;
