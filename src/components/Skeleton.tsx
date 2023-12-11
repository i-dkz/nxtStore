
const Skeleton = () => {
  return (
    <div className="z-10 w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg animate-pulse">
      <div className="h-40 bg-gray-400"></div>
      <div className="p-6">
        <div className="w-3/4 h-4 mb-2 bg-gray-400"></div>
        <div className="w-1/2 h-4 mb-4 bg-gray-400"></div>
        <div className="w-3/4 h-4 bg-gray-400"></div>
      </div>
    </div>
  );
};

export default Skeleton;
