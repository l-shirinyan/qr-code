import { solutions } from "../../utils/constants";

const QrFeature = () => {
  return (
    <div className="flex flex-col gap-[57px] items-center">
      <span className="text-center text-[24px] font-medium leading-[26px] lg:text-start">
        QR Codes Features
      </span>
      <div className="flex flex-col justify-between w-[90%] h-full rounded-[10px] mx-auto">
        <div className="grid gap-7 bg-white lg:grid-cols-2">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="flex w-full h-full gap-[30px] bg-light-grey pr-9"
            >
              <div className="flex w-full h-full max-w-[132px] flex-shrink-0 items-center justify-center rounded-l-[10px] bg-indigo-500 text-white sm:max-w-[177px]">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-[77px] h-[77px]"
                />
              </div>
              <div className="mt-[34px] pb-6">
                <p className="text-[26px] font-medium leading-[39px]">
                  {item.name}
                </p>
                <p className="mt-1 text-lg leading-[27px] text-grey-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { QrFeature };
