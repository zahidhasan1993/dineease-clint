import { Parallax } from "react-parallax";

const SectionCover = ({ img, name }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="w-full bg-center bg-cover h-96 md:h-[45rem]"
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="text-center bg-black py-20 px-32 md:py-40 md:px-60 bg-opacity-60">
            <h1 className="text-2xl font-semibold text-gray-200 uppercase lg:text-7xl">
              {name}
            </h1>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default SectionCover;
