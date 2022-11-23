import { Disclosure, Menu, Transition } from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/images/Logo.png";
import { ReactComponent as ArrowDownIcon } from "../../assets/icons/arrow-down.svg";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const TopNavbar = () => {
  return (
    <Disclosure as="nav" className="bg-white w-full lg:flex justify-center">
      {({ open }) => (
        <>
          <div className="px-4 lg:px-6 max-w-[1283px] pt-[49px] pl-[88px] pr-5">
            <div className="flex h-16 gap-[55px] justify-between lg:justify-start xl:gap-[75px]">
              <div className="flex gap-[33px] xl:gap-[104px]">
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
                <div className="hidden items-center lg:ml-6 lg:flex lg:space-x-8">
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-black text-lg font-normal leading-[27px]"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center hover:border-b-2 hover:border-grey px-1 pt-1 text-black text-lg font-normal leading-[27px]"
                  >
                    About Us
                  </a>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex items-center hover:border-b-2 hover:border-grey px-1 pt-1 text-black text-lg font-normal leading-[27px]">
                        Solution
                        <ArrowDownIcon
                          className="-mr-1 ml-2 h-[6px] w-3"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                  </Menu>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex items-center hover:border-b-2 hover:border-grey px-1 pt-1 text-black text-lg font-normal leading-[27px]">
                        Use Cases
                        <ArrowDownIcon
                          className="-mr-1 ml-2 h-[6px] w-3"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                  </Menu>
                  <a
                    href="#"
                    className="inline-flex items-center hover:border-b-2 hover:border-grey px-1 pt-1 text-black text-lg font-normal leading-[27px]"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center hover:border-b-2 hover:border-grey px-1 pt-1 text-black text-lg font-normal leading-[27px]"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center hover:border-b-2 hover:border-grey px-1 pt-1 text-black text-lg font-normal leading-[27px]"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="-mr-2 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-6 lg:flex lg:items-center">
                <button className="w-[122px] h-[31px] bg-purple text-base text-white rounded-[15px]">
                  LOGIN
                </button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pt-2 pb-3">
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                About Us
              </Disclosure.Button>
              <Menu
                as="div"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                <div>
                  <Menu.Button className="flex items-center">
                    Solutions
                    <ArrowDownIcon
                      className="-mr-1 ml-2 h-[6px] w-3"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
              </Menu>
              <Menu
                as="div"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                <div>
                  <Menu.Button className="flex items-center">
                    Use Cases
                    <ArrowDownIcon
                      className="-mr-1 ml-2 h-[6px] w-3"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
              </Menu>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Pricing
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Blog
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 pb-3">
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
