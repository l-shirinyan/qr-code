import { QrCodeCases } from "../../components/home/QrCodeCases";
import { QrCustomize } from "../../components/home/QrCustomize";
import { QrFeature } from "../../components/home/QrFeature";
import { QrFrequently } from "../../components/home/QrFrequently";
import { QrGenerator } from "../../components/home/QrGenerator";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-[70px] pb-[50px] md:pb-[151px]">
      <QrGenerator />
      <QrCodeCases />
      <QrFeature />
      <QrCustomize />
      <QrFrequently />
    </div>
  );
};

export { HomePage };
