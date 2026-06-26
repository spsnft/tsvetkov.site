'use client';

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              I'm a full-stack developer passionate about creating beautiful and functional web applications. With experience in modern web technologies, I love building projects that make a difference.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the community.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-gray-700 dark:text-gray-300">5+ years of web development experience</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Expert in React, Next.js, and TypeScript</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Passionate about clean code and best practices</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-12 text-white text-center">
            <div className="text-6xl font-bold mb-4">Dev</div>
            <p className="text-xl">Building the future of web</p>
          </div>
        </div>
      </div>
    </section>
  );
}
