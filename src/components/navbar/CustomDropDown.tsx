import { Transition, Popover } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowDownIcon } from "../../assets/icons/arrow-down.svg";
import { IMenuItems } from "../../utils/constants";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface ICustomDropDownProps {
  menuItems: IMenuItems[];
  title: string;
  mobile?: boolean;
}

const CustomDropDown: React.FC<ICustomDropDownProps> = ({
  menuItems,
  title,
  mobile,
}) => {
  return (
    <>
      <Popover className="relative w-[286px] lg:w-auto">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? "text-gray-900" : "text-gray-500",
                "group inline-flex items-center rounded-md bg-white text-base font-medium"
              )}
            >
              <span
                className={`${
                  mobile
                    ? ""
                    : "inline-flex items-center hover:border-b-2 hover:border-grey px-1 text-black text-lg font-normal leading-[27px]"
                }`}
              >
                {title}
              </span>
              <ArrowDownIcon
                className={classNames(
                  open ? "text-gray-600" : "text-gray-400",
                  "-mr-1 ml-1 h-2 w-3 group-hover:text-gray-500"
                )}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                      >
                        <p className="text-base font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

export { CustomDropDown };
