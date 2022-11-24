import { Link } from "react-router-dom";
import {
  footerBusinessTypes,
  footerCompany,
  footerContactUs,
  footerProduct,
  socialMediaIcons,
} from "../../utils/constants";

const FooterNavbar = () => {
  return (
    <div className="w-full bg-yellow flex justify-center pt-[54px] pb-[71px]">
      <div className="px-[80px] flex flex-col gap-6">
        <div className="flex flex-col gap-6 xl:ml-7">
          <h3 className="text-2xl font-medium leading-9 text-white">
            Get started for free, no credit card required. Fill the information
            below and our sales will contact you.
          </h3>
          <div className="grid grid-cols-1 gap-[11px] md:grid-cols-2 xl:flex">
            <input
              type="text"
              name="name"
              id="name"
              className="block h-[58px] w-full rounded-[10px] placeholder:text-grey placeholder:text-sm outline-none pl-7 text-sm xl:max-w-[242px]"
              placeholder="Full Name"
            />
            <input
              type="text"
              name="res_name"
              id="res_name"
              className="block h-[58px] w-full rounded-[10px] placeholder:text-grey placeholder:text-sm outline-none pl-7 text-sm xl:max-w-[262px]"
              placeholder="Restaurant Name"
            />
            <input
              type="text"
              name="account-number"
              id="account-number"
              className="block h-[58px] w-full rounded-[10px] placeholder:text-grey placeholder:text-sm outline-none pl-7 text-sm xl:max-w-[262px]"
              placeholder="Mobile Number"
            />
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-[10px] bg-purple px-6 py-3 text-xl font-semibold text-white leading-[31px] xl:max-w-[458px]"
            >
              START NOW
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full mt-[52px] lg:flex-row xl:mt-[104px]">
          <div className="flex flex-col w-full">
            <div className="w-full max-w-[90%] grid grid-cols-1 gap-y-[65px] md:grid-cols-2 xl:flex xl:justify-between">
              <div className="flex flex-col gap-7 w-full md:max-w-[222px]">
                <h3 className="text-white text-lg">Product</h3>
                <div className="flex flex-col gap-[14px]">
                  {footerProduct.map((el, idx) => {
                    return (
                      <Link key={idx} to={el.path} className="text-white">
                        {el.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-7 w-full md:max-w-[162px]">
                <h3 className="text-white text-lg">Business Types</h3>
                <div className="flex flex-col gap-[14px]">
                  {footerBusinessTypes.map((el, idx) => {
                    return (
                      <Link key={idx} to={el.path} className="text-white">
                        {el.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-7 w-full md:max-w-[222px]">
                <h3 className="text-white text-lg">Company</h3>
                <div className="flex flex-col gap-[14px]">
                  {footerCompany.map((el, idx) => {
                    return (
                      <Link key={idx} to={el.path} className="text-white">
                        {el.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="max-w-max mt-16">
              <h3 className="text-white text-base">
                &copy; {new Date().getFullYear()} Yalla QR Codes. All rights
                reserved
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-7 w-full mt-7 md:max-w-[403px]">
            <h3 className="text-white text-lg">Contact Us</h3>
            <div className="flex flex-col gap-[14px]">
              {footerContactUs.map(({ Icon, ...el }, idx) => {
                return (
                  <div key={idx} className="flex gap-7">
                    <Icon fill="#fff" className={`${el.size}`} />
                    <span className="text-white">{el.title}</span>
                  </div>
                );
              })}
              <div className="flex gap-5 mt-[65px]">
                {socialMediaIcons.map(({ Icon }, idx) => {
                  return <Icon key={idx} fill="#fff" />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FooterNavbar };
