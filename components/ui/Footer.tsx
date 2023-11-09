import Link from "next/link";

import { footerContent } from "@/utils/data/footerContent";

import Copyright from "./Copyright";
import Logo from "./Logo";

const Footer = ({ className }: SectionProps) => {
  const { footerLinks } = footerContent;
  return (
    <footer className={`${className} overflow-hidden w-full h-full`}>
      <div className="wrapper z-20 relative">
        <div className="md:flex">
          <div className="md:w-4/12 mb-10 md:mb-0">
            <Logo />
          </div>
          <div className="md:w-8/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {footerLinks.map(({ heading, links }, index) => (
                <div key={heading} className="mb-10 md:mb-0">
                  <h3 className="text-gray-800 mb-3">{heading}</h3>
                  <ul className="list-none">
                    {links.map((link, index) => (
                      <li key={link.label} className="mb-2">
                        <Link
                          href={link.href}
                          className={`${
                            link.badge && "flex gap-2 items-center"
                          } text-gray-500 transition hover:text-blue-600`}
                        >
                          {link.badge ? (
                            <>
                              <span>{link.label}</span>{" "}
                              <span className="py-0.5 px-2 rounded-full bg-blue-100 border border-blue-600 text-[10px] text-blue-600 font-semibold">
                                {link.badge}
                              </span>{" "}
                            </>
                          ) : (
                            link.label
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
