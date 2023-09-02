const SectionCover = ({img,name}) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[40rem]"
      style={{
        backgroundImage:
          `url(${img})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
        <div className="text-center bg-black py-40 px-60 bg-opacity-60">
          <h1 className="text-2xl font-semibold text-gray-200 uppercase lg:text-7xl">
            {name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SectionCover;
