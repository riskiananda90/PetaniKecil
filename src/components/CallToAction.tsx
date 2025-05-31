import React from "react";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 relative bg-slate-900 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="opacity-0 animate-pulse">
          <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-6 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-amber-100/5 rounded-3xl"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-orange-400 rounded-full animate-ping"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
                <span className="text-white">Ready to</span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                  Transform Your Ideas?
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-amber-100/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Join the revolution in AI-powered development. Transform your
                data into applications and revolutionize learning with ZeroCode
                Genesis.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 animate-pulse w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-lg hover:shadow-orange-500/50">
                  Start Building Now
                </button>
                <button className="border border-amber-100/30 text-white hover:bg-amber-100/10 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-amber-100 focus:ring-offset-2 focus:ring-offset-slate-900 backdrop-blur-sm">
                  Schedule Demo
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-1">
                    Free
                  </div>
                  <p className="text-amber-100/70 text-sm">To get started</p>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-1">
                    5 Min
                  </div>
                  <p className="text-amber-100/70 text-sm">Setup time</p>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-400 to-red-600 bg-clip-text text-transparent mb-1">
                    24/7
                  </div>
                  <p className="text-amber-100/70 text-sm">AI assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
