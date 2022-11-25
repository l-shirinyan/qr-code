import { Disclosure } from "@headlessui/react";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../assets/icons/minus.svg";
import { faqs } from "../../utils/constants";

const QrFrequently = () => {
  return (
    <div className="mx-auto">
      <h3 className="text-[30px] font-bold leading-[45px] text-center mb-[41px] mx-auto">
        Frequently Asked Questions
      </h3>
      <div className="flex flex-col gap-[38px] px-6 lg:pr-[41px] lg:pl-[52px] xl:px-0">
        {faqs.map((faq, idx) => (
          <div className="grid gap-x-[38px] gap-y-[30px] items-center md:grid-cols-2">
            {faq.map((elem) => {
              return (
                <Disclosure as="div" key={idx}>
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button
                          className={`flex w-full items-start justify-between text-left pl-7 pr-5 py-4 rounded-[5px] ${
                            open ? "bg-purple" : "bg-light-grey "
                          }`}
                        >
                          <span
                            className={`text-lg leading-[27px] ${
                              open ? "text-white" : "text-grey-500"
                            }`}
                          >
                            {elem.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? <MinusIcon /> : <PlusIcon />}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel
                        as="dd"
                        className="pt-4 pr-12 bg-white max-w-[571px]"
                      >
                        <p className="text-base leading-6 text-grey-500 pl-7 text-justify">
                          {elem.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export { QrFrequently };
