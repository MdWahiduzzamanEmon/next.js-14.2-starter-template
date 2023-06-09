export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 ">
      <div
        className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500
        dark:border-orange-400"
      ></div>
    </div>
  );
}
