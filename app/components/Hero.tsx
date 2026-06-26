'use client';

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tsvetkov</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Explore my portfolio, projects, and ideas in one place
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all hover:scale-105">
          Get Started
        </button>
      </div>
    </section>
  );
}
