import React, { useState, useEffect } from "react";

const Metrics = () => {
  const [counts, setCounts] = useState({
    apps: 0,
    users: 0,
    satisfaction: 0,
    time: 0,
  });

  const finalCounts = {
    apps: 500,
    users: 1200,
    satisfaction: 98,
    time: 90,
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        apps: Math.floor(finalCounts.apps * progress),
        users: Math.floor(finalCounts.users * progress),
        satisfaction: Math.floor(finalCounts.satisfaction * progress),
        time: Math.floor(finalCounts.time * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(finalCounts);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 relative  min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-pulse">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
              Impact &
            </span>
            <br />
            <span className="text-amber-100">Performance</span>
          </h2>
          <p className="text-xl text-amber-100/70 max-w-3xl mx-auto">
            Real numbers from real users building real applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="transform transition-all duration-500 hover:scale-105">
            <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 text-center shadow-2xl hover:shadow-orange-500/20 transition-all duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent mb-2">
                {counts.apps}+
              </div>
              <h3 className="text-xl font-semibold text-amber-100 mb-2">
                Apps Generated
              </h3>
              <p className="text-amber-100/60">
                Production-ready applications built with ZeroCode Genesis
              </p>
            </div>
          </div>

          <div className="transform transition-all duration-500 hover:scale-105">
            <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 text-center shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                {counts.users}+
              </div>
              <h3 className="text-xl font-semibold text-amber-100 mb-2">
                Active Users
              </h3>
              <p className="text-amber-100/60">
                Developers, educators, and entrepreneurs using our platform
              </p>
            </div>
          </div>

          <div className="transform transition-all duration-500 hover:scale-105">
            <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 text-center shadow-2xl hover:shadow-green-500/20 transition-all duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-2">
                {counts.satisfaction}%
              </div>
              <h3 className="text-xl font-semibold text-amber-100 mb-2">
                Satisfaction Rate
              </h3>
              <p className="text-amber-100/60">
                Users who would recommend ZeroCode Genesis
              </p>
            </div>
          </div>

          <div className="transform transition-all duration-500 hover:scale-105">
            <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 text-center shadow-2xl hover:shadow-pink-500/20 transition-all duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-600 bg-clip-text text-transparent mb-2">
                {counts.time}%
              </div>
              <h3 className="text-xl font-semibold text-amber-100 mb-2">
                Time Saved
              </h3>
              <p className="text-amber-100/60">
                Reduction in development time compared to traditional methods
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="transform transition-all duration-500 hover:scale-105">
            <div className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/30 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">👩‍💻</span>
                </div>
                <div>
                  <p className="text-amber-100/80 mb-4 italic leading-relaxed">
                    "ZeroCode Genesis transformed our prototyping process. What
                    used to take weeks now takes minutes. The IBM Granite AI
                    integration is incredibly sophisticated."
                  </p>
                  <div>
                    <p className="font-semibold text-amber-100">Sarah Chen</p>
                    <p className="text-amber-100/60 text-sm">
                      CTO, TechStart Inc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="transform transition-all duration-500 hover:scale-105">
            <div className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/30 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">👨‍🎓</span>
                </div>
                <div>
                  <p className="text-amber-100/80 mb-4 italic leading-relaxed">
                    "The EduGen module revolutionized how I create learning
                    materials. My students are more engaged than ever with the
                    AI-generated quizzes."
                  </p>
                  <div>
                    <p className="font-semibold text-amber-100">
                      Dr. Michael Rodriguez
                    </p>
                    <p className="text-amber-100/60 text-sm">Professor, MIT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
