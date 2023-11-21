"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useWindowSize } from "usehooks-ts";

import { navContent } from "@/utils/data/navContent";

import Logo from "./Logo";
import StyledLink from "./StyledLink";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { width } = useWindowSize();

  let newPathname = "";

  newPathname = pathname;

  if (pathname.includes("/blog")) {
    newPathname = "/blog";
  } else if (pathname.includes("/projects")) {
    newPathname = "/projects";
  }

  useEffect(() => {
    if (width > 768 && open) {
      setOpen(false);
    }
  }, [open, width]);

  return (
    <>
      <header role="banner" className="py-5 absolute w-full z-[3]">
        <div className="container px-4 mx-auto flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <nav className="flex">
            <ul role="list" className="hidden md:flex space-x-8">
              {navContent.map(({ href, label }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className={`text-[12px] tracking-[1px] font-semibold pb-2 linkUnderlineHover ${
                      newPathname === href
                        ? "border-blue-600 text-blue-600 before:scale-x-[1]"
                        : "border-transparent"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className="md:hidden text-md pb-2 linkUnderlineHover"
              onClick={() => setOpen(true)}
            >
              Menu
            </button>
          </nav>
        </div>
      </header>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"></div>
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition-all ease-in-out duration-500 sm:duration-500"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition-all ease-in-out duration-500 sm:duration-500"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-sm">
                    <div className="h-full flex flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-8 py-6 sm:px-12">
                        <div className="flex justify-between items-start">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Menu
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-0.5"></span>
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden />
                            </button>
                          </div>
                        </div>
                        <div className="mt-8">
                          <nav className="flow-root">
                            <ul role="list">
                              {navContent.map(({ href, label }, i) => (
                                <li key={i}>
                                  <Link
                                    href={href}
                                    className="py-2 inline-block pb-2 linkUnderlineHover"
                                  >
                                    {label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </nav>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div>
                          <StyledLink href="/contact">
                            Contact us now
                          </StyledLink>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Header;
