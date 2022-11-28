import { IGeneratedQr } from "../components/home/model";

const qrCodeUrl = (url: string) => {
  return fetch(url)
    .then((response) => {
      return response.blob();
    })
    .then((blob) => {
      return URL.createObjectURL(blob);
    });
};

export const DownloadImg = async (img: IGeneratedQr) => {
  const a = document.createElement("a");
  a.href = await qrCodeUrl(img.file_url);
  a.download = img.file_location;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  fetch(img.file_url, {
    mode: "no-cors",
  })
    .then((response) => response.blob())
    .then((blob) => {
      let blobUrl = window.URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.download = img.file_url.replace(/^.*[\\\/]/, "");
      a.href = blobUrl;
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
};
