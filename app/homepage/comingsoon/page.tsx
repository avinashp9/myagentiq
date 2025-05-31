import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center px-6">
      <div className="text-center space-y-8">
        {/* Glowing Robot Icon */}
        {/* <div className="animate-pulse">
          <svg
            className="mx-auto w-16 h-16 text-cyan-400 drop-shadow-lg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 18v-1a3 3 0 116 0v1m-3-7h.01M12 2v2m-5 3H5m14 0h-2m-1 11h2a2 2 0 002-2v-5a2 2 0 00-2-2h-2m-8 9H7a2 2 0 01-2-2v-5a2 2 0 012-2h2m2 4h.01"
            />
          </svg>
        </div> */}

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-widest uppercase">
          Coming Soon
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-orange-300 font-medium">
          Our intelligent systems are calibrating...
        </p>

        {/* Loading Dots Animation */}
        <div className="flex justify-center gap-2 mt-6">
          <span className="w-3 h-3 bg-[#FF5C35] rounded-full animate-bounce" />
          <span className="w-3 h-3 bg-[#FF5C35] rounded-full animate-bounce delay-200" />
          <span className="w-3 h-3 bg-[#FF5C35] rounded-full animate-bounce delay-400" />
        </div>

        {/* Back to Home Button */}
        <div className="mt-10">
          <Link href="/" passHref>
            <button className="px-6 py-3 rounded-full bg-[#FF5C35] hover:bg-orange-900 text-white font-semibold transition-all duration-300 shadow-lg">
              ⬅ Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
