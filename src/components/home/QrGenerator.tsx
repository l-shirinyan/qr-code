import React, { HtmlHTMLAttributes, useState } from "react";
import QRCode from "react-qr-code";

const QrGenerator = () => {
  const [qrValue, setQrValue] = useState<string>("");
  const [generate, setGenerate] = useState<string>("");

  const handleGenerateQR = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setGenerate(qrValue);
  };
  return (
    <div className="flex flex-col gap-[22px]">
      <form
        onSubmit={handleGenerateQR}
        className="flex flex-col justify-between w-[90%] h-[598px] bg-light-grey rounded-[10px] mx-auto pt-[49px] px-11 pl-11 pb-[51px] md:mt-[83px] lg:pr-0"
      >
        <span className="text-center text-[24px] font-medium leading-[26px] lg:text-start">
          The most advanced QR Code Generator with logo online
        </span>
        <div className="flex flex-col items-center gap-5 lg:flex-row">
          <span className="text-lg leading-7">
            Enter the URL of your website
          </span>
          <input
            type="text"
            name="email"
            id="email"
            value={qrValue}
            onChange={(e) => setQrValue(e.target.value)}
            className="block h-[58px] w-full rounded-[10px] border-[1px] placeholder:text-grey placeholder:text-base outline-none pl-7 text-sm max-w-[474px]"
            placeholder="Example: http://www.yourwebsite.com"
          />
          <span className="text-red text-sm leading-[21px]">
            Required Field
          </span>
        </div>
        <div className="flex justify-center w-full">
          <button
            type="submit"
            className="flex items-center justify-center w-full max-w-[220px] h-[58px] rounded-[10px] bg-light-yellow font-semibold text-[20px] text-white leading-[30px]"
          >
            Generate QR
          </button>
        </div>
      </form>
      <div className="flex flex-col justify-center items-center w-[90%] h-max bg-light-grey rounded-[10px] mx-auto pt-[52px] px-11 pl-11 pb-[51px] lg:pr-0">
        <div className="flex flex-col w-full h-full max-w-[568px] max-h-[647px] bg-grey-100 p-[37px] gap-[27px]">
          <QRCode
            size={494}
            value={generate}
            className="p-8 w-full max-w-[494px] h-max bg-white"
            viewBox="0 0 494 494"
          />
          <div className="w-full h-[58px] flex flex-wrap gap-[22px] sm:flex-nowrap">
            <button className="flex justify-center items-center bg-light-yellow h-full w-full rounded-[10px] leading-[30px] font-semibold text-white sm:text-[20px]">
              Download PNG
            </button>
            <button className="flex justify-center items-center bg-purple h-full w-full rounded-[10px] leading-[30px] font-semibold text-white sm:text-[20px]">
              Download SVG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { QrGenerator };
