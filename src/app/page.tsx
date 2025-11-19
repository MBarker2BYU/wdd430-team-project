import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={38}
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Welcome to Our Group Project
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            A modern web application built with Next.js 14 + TypeScript
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-16 px-6">
        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Project Overview
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              This is the official landing page for our W03 group project. We are building a 
              full-featured Next.js application using the App Router, TypeScript, and ESLint 
              following current best practices.
            </p>
          </div>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
            [Future Image / Screenshot Placeholder]
          </div>
        </section>

        <section className="text-center py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Features in Development
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Responsive Design
              </h3>
              <p className="text-gray-600">Works perfectly on mobile, tablet, and desktop</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Type Safety
              </h3>
              <p className="text-gray-600">Full TypeScript integration</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Modern Stack
              </h3>
              <p className="text-gray-600">Next.js App Router + React Server Components</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} W03 Group Project • Built with Next.js & TypeScript
        </p>
      </footer>
    </div>
  );
}