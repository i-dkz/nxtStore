
const Skeleton = () => {
  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden animate-pulse">
      <div className="h-40 bg-gray-400"></div>
      <div className="p-6">
        <div className="h-4 bg-gray-400 w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-400 w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-400 w-3/4"></div>
      </div>
    </div>
  );
};

export default Skeleton;
