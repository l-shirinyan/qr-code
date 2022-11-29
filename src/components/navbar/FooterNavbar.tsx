import { Link } from "react-router-dom";
import {
  footerBusinessTypes,
  footerCompany,
  footerContactUs,
  footerProduct,
  socialMediaIcons,
} from "../../helpers/utils/constants";

const FooterNavbar = () => {
  return (
    <div className="w-full bg-yellow flex justify-center pt-[54px] pb-[71px]">
      <div className="pl-[38px] pr-[80px] flex flex-col gap-6 w-[1171px] xl:p-0">
        <div className="flex flex-col w-full lg:flex-row">
          <div className="flex flex-col w-full">
            <div className="w-full max-w-[90%] grid grid-cols-1 gap-y-[25px] md:gap-y-[65px] md:grid-cols-2 xl:flex xl:justify-between">
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
            <div className="max-w-max mt-6 md:mt-16">
              <h3 className="text-white text-base">
                &copy; {new Date().getFullYear()} Yalla QR Codes. All rights
                reserved
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-7 w-full mt-5 md:max-w-[403px] lg:mt-0">
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
              <div className="flex gap-5 mt-[25px] md:mt-[65px]">
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
