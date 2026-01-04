function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="h-56 rounded-2xl bg-gray-200" />
      <div className="mt-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="flex items-center gap-2 mt-3">
          <div className="w-7 h-7 bg-gray-200 rounded-full" />
          <div className="h-3 bg-gray-200 rounded w-1/3" />
        </div>
      </div>
    </div>
  );
}
export default SkeletonCard;