import { files } from "./Files";

const QrCodeCases = () => {
  return (
    <div>
      <h3 className="text-[30px] font-bold leading-[45px] text-center mb-[41px] mx-auto">
        Different Case Studies of QR Codes
      </h3>
      <ul
        role="list"
        className="w-[90%] h-full mx-auto grid grid-cols-2 gap-x-[29px] gap-y-[38px] sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {files.map((file) => (
          <li key={file.source}>
            <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg">
              <img
                src={file.source}
                alt={file.source}
                className="pointer-events-none object-cover max-w-[298px] max-h-[199px]"
              />
            </div>
            <p className="text-lg leading-7 text-center mt-4">{file.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { QrCodeCases };
