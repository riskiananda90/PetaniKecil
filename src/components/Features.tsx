import { BorderBeam } from "./magicui/border-beam";

const featuresData: Feature[] = [
  {
    id: "core",
    icon: "⚡",
    title: "ZeroCode Genesis Core",
    description:
      "Transform any data file into a complete, production-ready application. Upload your Excel, CSV, or JSON and watch IBM Granite AI work its magic.",
    color: "orange",
    points: [
      {
        title: "Intelligent Code Generation",
        desc: "Full-stack applications with React frontends, Node.js backends, and database schemas",
      },
      {
        title: "Auto-Generated APIs",
        desc: "RESTful endpoints with comprehensive CRUD operations and data validation",
      },
      {
        title: "Instant Deployment",
        desc: "One-click deployment to cloud platforms with CI/CD pipelines",
      },
    ],
    buttonText: "Try Core Demo",
  },
  {
    id: "edu",
    icon: "🧠",
    title: "EduGen AI Module",
    description:
      "Revolutionary educational companion that generates personalized quizzes, explanations, and learning paths from any uploaded content.",
    color: "pink",
    points: [
      {
        title: "Smart Question Generation",
        desc: "Multi-choice, true/false, and open-ended questions from any document",
      },
      {
        title: "Adaptive Learning",
        desc: "Personalized difficulty adjustment based on performance analytics",
      },
      {
        title: "Progress Tracking",
        desc: "Comprehensive analytics dashboard with learning insights",
      },
    ],
    buttonText: "Explore EduGen",
  },
];

type FeaturePoint = {
  title: string;
  desc: string;
};

type Feature = {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: "orange" | "pink";
  points: FeaturePoint[];
  buttonText: string;
};

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const colorClasses = {
    orange: {
      bg: "bg-orange-500/20",
      dot: "bg-orange-500",
      textGradient: "from-orange-400 to-pink-600",
      buttonBg: "bg-orange-500 hover:bg-orange-600",
      focusRing: "focus:ring-orange-500",
    },
    pink: {
      bg: "bg-pink-500/20",
      dot: "bg-pink-500",
      textGradient: "from-pink-400 to-purple-600",
      buttonBg: "bg-pink-500 hover:bg-pink-600",
      focusRing: "focus:ring-pink-500",
    },
  };

  const c = colorClasses[feature.color];

  return (
    <div className="transform transition-all duration-500 hover:scale-105 bg-gradient-hero">
      <div
        className={`backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 shadow-2xl  transition-all duration-300 h-[580px] flex flex-col justify-between`}
      >
      <BorderBeam
        duration={4}
        size={100}
        reverse
        className={`from-transparent ${c.textGradient} to-transparent`}
      />
        <div className="mb-6">
          <div
            className={`${c.bg} rounded-xl flex items-center justify-center w-16 h-16 mb-4`}
          >
            <span className="text-2xl">{feature.icon}</span>
          </div>
          <h3
            className={`text-3xl font-bold bg-gradient-to-r ${c.textGradient} bg-clip-text text-transparent mb-4`}
          >
            {feature.title}
          </h3>
          <p className="text-amber-100/70 text-lg leading-relaxed">
            {feature.description}
          </p>
        </div>

        <div className="space-y-4 mb-8 ">
          {feature.points.map(({ title, desc }: FeaturePoint, idx: number) => (
            <div className="flex items-start gap-4" key={idx}>
              <div
                className={`${c.dot} w-2 h-2 rounded-full mt-2 flex-shrink-0`}
              ></div>
              <div>
                <h4 className="font-semibold text-amber-100 mb-1">{title}</h4>
                <p className="text-amber-100/60 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className={`${c.buttonBg} w-full text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 ${c.focusRing} focus:ring-offset-2 focus:ring-offset-slate-900`}
        >
          {feature.buttonText}
        </button>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-20 px-4 relative bg-gradient-hero min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-amber-100">Dual-Powered</span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className="text-xl text-amber-100/70 max-w-3xl mx-auto">
            Two revolutionary products working in harmony to transform how you
            build and learn.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        <div className="mt-16 transform transition-all duration-500">
          <div className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/30 rounded-2xl p-8 text-center shadow-xl">
            <BorderBeam
              duration={6}
              delay={3}
              size={100}
              className="from-transparent via-blue-500 to-transparent"
            />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Perfect Integration
            </h3>
            <p className="text-amber-100/70 text-lg max-w-3xl mx-auto mb-6">
              Both modules work seamlessly together, powered by IBM Granite AI's
              advanced language models. Generate applications and instantly
              create educational content to help users understand the code.
            </p>
            <div className="flex justify-center">
              <button className="px-8 py-3 bg-slate-700/50 border border-blue-500/30 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900">
                See Integration Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
