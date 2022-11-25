import { posts } from "../../utils/constants";

const QrCustomize = () => {
  return (
    <div className="flex flex-col gap-[57px] items-center w-full mx-auto">
      <span className="text-center text-[24px] font-medium leading-[26px] px-[30px] lg:text-start">
        All you need for your Customized QR code campaign in one place!
      </span>
      <div className="bg-white w-full mx-auto">
        <div className="grid gap-16 w-full pl-[37px] pr-[63px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-[46px] lg:px-[60px]">
          {posts.map((post) => (
            <div
              key={post.name}
              className="flex flex-col gap-9 items-center w-full lg:max-w-[285px]"
            >
              <img
                src={post.src}
                alt={post.name}
                className="w-[86px] h-[86px]"
              />
              <div className="flex flex-col items-center gap-4">
                <p className="text-[22px] font-bold leading-[33px] text-center">
                  {post.name}
                </p>
                <p className="text-base leading-6 text-justify text-grey-500">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { QrCustomize };
