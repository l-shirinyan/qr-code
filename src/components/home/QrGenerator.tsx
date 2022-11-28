import { useState } from "react";

import { useMutation } from "@tanstack/react-query";
import { fetchPost } from "../../redux/queries";
import { IGeneratedQr } from "./model";
import { DownloadImg } from "../../utils/downloadimg";

const QrGenerator = () => {
  const [qrValue, setQrValue] = useState<string>("");
  const [err, setErr] = useState<string>("");
  const [generatedQr, setGeneratedQr] = useState<IGeneratedQr>();
  const mutation = useMutation({
    mutationFn: fetchPost,
    onError: (err: { response: { status: number } }) => {
      if (err.response.status === 422) {
        setErr("Url must be a valid url");
      }
    },
    onSuccess: (data) => {
      setGeneratedQr(data);
    },
  });

  const download = (generatedQr: IGeneratedQr) => {
    DownloadImg(generatedQr);
  };

  const handleGenerateQR = (e: React.SyntheticEvent) => {
    e.preventDefault();
    mutation.mutate(qrValue);
  };

  return (
    <div className="flex flex-col gap-[22px]">
      <form
        onSubmit={handleGenerateQR}
        className="flex flex-col justify-between w-[90%] gap-[50px] bg-light-grey rounded-[10px] mx-auto pt-[49px] px-11 pl-11 pb-[51px] md:mt-[83px] lg:pr-0"
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
            name="url"
            id="url"
            required
            value={qrValue}
            onChange={(e) => setQrValue(e.target.value)}
            className="block h-[58px] w-full rounded-[10px] border-[1px] placeholder:text-grey placeholder:text-base outline-none pl-7 text-sm max-w-[474px]"
            placeholder="Example: http://www.yourwebsite.com"
          />
          <span className="text-red text-sm leading-[21px]">
            Required Field
          </span>
        </div>
        <div className="flex items-center flex-col gap-5 w-full">
          <span className="text-base text-red leading-5">{err}</span>
          <button
            type="submit"
            className="flex items-center justify-center w-full max-w-[220px] h-[58px] rounded-[10px] bg-light-yellow font-semibold text-[20px] text-white leading-[30px]"
          >
            Generate QR
          </button>
        </div>
      </form>
      {generatedQr && (
        <div className="flex flex-col justify-center items-center w-[90%] h-max bg-light-grey rounded-[10px] mx-auto pt-[52px] px-11 pl-11 pb-[51px] lg:pr-0">
          <div className="flex flex-col w-full h-full max-w-[568px] max-h-[647px] bg-grey-100 p-[37px] gap-[27px]">
            <img
              src={generatedQr.file_url}
              alt="QrCode"
              className="w-full h-full max-w-[494px] max-h-[494px]"
            />
            <div className="w-full h-[58px] flex flex-wrap gap-[22px] sm:flex-nowrap">
              <button
                onClick={() => download(generatedQr)}
                className="flex justify-center items-center bg-light-yellow h-full w-full rounded-[10px] leading-[30px] font-semibold text-white sm:text-[20px]"
              >
                Download PNG
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { QrGenerator };
