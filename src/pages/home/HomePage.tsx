import { QrCodeCases } from "../../components/home/QrCodeCases";
import { QrGenerator } from "../../components/home/QrGenerator";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-[70px] pb-[151px]">
      <QrGenerator />
      <QrCodeCases />
    </div>
  );
};

export { HomePage };
