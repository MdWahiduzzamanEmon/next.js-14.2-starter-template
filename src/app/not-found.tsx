import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900 font-mono
    dark:bg-gray-900 dark:text-gray-100 space-y-6
        "
    >
      <h1>Not found – 404!</h1>
      <div>
        <Link
          href="/"
          className="px-6 py-2 my-6 text-sm text-white transition-all bg-orange-500 rounded-lg outline-none hover:bg-orange-400 focus:bg-orange-500 uppercase focus:outline-none border-1 border-white hover:border-orange-400 focus:border-orange-500"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
