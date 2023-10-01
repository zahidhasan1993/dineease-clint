const SkeletonLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center h-96 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-25"></div>
    </div>
  );
};

export default SkeletonLoader;
