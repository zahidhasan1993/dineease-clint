const SectionTitle = ({ title }) => {
  return (
    <div className="mt-10 mb-20 text-center text-2xl md:text-4xl">
      <h1 className="text-red-700 font-fontOne">---{title}---</h1>
      <span className="inline-block bg-red-700 h-0.5 w-1/2"></span>
    </div>
  );
};

export default SectionTitle;
