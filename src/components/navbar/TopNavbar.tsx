import { Disclosure } from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/images/Logo.png";
import { CustomDropDown } from "./CustomDropDown";
import { menuItems, staticNavbarLinks } from "../../utils/constants";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <Disclosure
      as="nav"
      className="fixed z-50 bg-white w-full lg:flex justify-center"
    >
      {({ open }) => (
        <>
          <div className="w-full max-w-[1280px] pl-5 pr-5 pt-5 md:pt-[49px] lg:pl-14 xl:pl-[88px] xl:px-6 2xl:pl-0">
            <div className="flex h-16 justify-between">
              <div className="flex w-[87%] xl:w-[79%] justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-[42px] w-[173px] lg:hidden"
                    src={Logo}
                    alt="Yalla"
                  />
                  <img
                    className="hidden h-[42px] w-[173px] lg:block"
                    src={Logo}
                    alt="Yalla"
                  />
                </div>
                <div className="hidden w-[74%] items-center justify-between lg:flex xl:w-[72%]">
                  {staticNavbarLinks.map((elem, idx) => {
                    let el;
                    if (idx === 2 || idx === 3) {
                      el = (
                        <CustomDropDown
                          key={idx}
                          title={elem.title}
                          menuItems={menuItems}
                        />
                      );
                    } else {
                      el = (
                        <Link
                          key={idx}
                          to={elem.path}
                          className="inline-flex items-center hover:border-b-2 hover:border-grey px-1 pt-1 text-black text-lg font-normal leading-[27px]"
                        >
                          {elem.title}
                        </Link>
                      );
                    }
                    return el;
                  })}
                </div>
              </div>
              <div className="-mr-2 flex items-center lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:flex lg:items-center">
                <button className="w-[100px] xl:w-[122px] h-[31px] bg-purple text-base text-white rounded-[15px]">
                  LOGIN
                </button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pt-2 pb-3 pl-5 pr-5">
              {staticNavbarLinks.map((elem, idx) => {
                let el;
                if (idx === 2 || idx === 3) {
                  el = (
                    <Disclosure.Button
                      key={idx}
                      as="a"
                      href={elem.path}
                      className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                      <CustomDropDown
                        y={idx}
                        title={elem.title}
                        menuItems={menuItems}
                        mobile={true}
                      />
                    </Disclosure.Button>
                  );
                } else {
                  el = (
                    <Disclosure.Button
                      key={idx}
                      as="a"
                      href={elem.path}
                      className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                      {elem.title}
                    </Disclosure.Button>
                  );
                }
                return el;
              })}
            </div>
            <div className="border-t border-gray-200 pb-3 pl-5 pr-5">
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  LOGIN
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export { TopNavbar };
