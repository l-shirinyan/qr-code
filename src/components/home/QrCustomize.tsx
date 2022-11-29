import { posts } from "../../helpers/utils/constants";

const QrCustomize = () => {
  return (
    <div className="flex flex-col gap-[57px] items-center w-full mx-auto">
      <span className="text-center text-[24px] font-medium leading-[26px] px-[30px] lg:text-start">
        All you need for your Customized QR code campaign in one place!
      </span>
      <div className="bg-white w-full mx-auto">
        <div className="grid gap-16 w-full pl-[37px] pr-[63px] sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 xl:gap-x-9 lg:px-[60px]">
          {posts.map(({ Icon, ...post }) => (
            <div
              key={post.name}
              className="flex flex-col gap-8 items-center w-full"
            >
              <div className="h-[91px] flex justify-center items-center">
                {Icon && <Icon />}
              </div>
              <div className="flex flex-col items-center gap-4">
                <p className="text-lg font-bold leading-[33px] text-center md:text-[22px] ">
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
