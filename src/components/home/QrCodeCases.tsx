import { files } from "./Files";

const QrCodeCases = () => {
  return (
    <div>
      <h3 className="text-[30px] font-bold leading-[45px] text-center mb-[41px] mx-auto">
        Different Case Studies of QR Codes
      </h3>
      <ul
        role="list"
        className="w-[90%] h-full mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {files.map((file) => (
          <li key={file.source} className="relative">
            <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img
                src={file.source}
                alt=""
                className="pointer-events-none object-cover group-hover:opacity-75"
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
