const Team = () => {
  const anggotaTim = [
    {
      nama: "Rizki Ananda",
      peran: "Lead AI Engineer",
      keahlian: [
        "IBM Granite AI",
        "Machine Learning",
        "Full-Stack Development",
      ],
      bio: "Ahli integrasi AI dengan pengalaman lebih dari 5 tahun di IBM Research.",
      avatar: "👨‍💻",
    },
    {
      nama: "Rizki Ananda",
      peran: "Frontend Architect",
      keahlian: ["React", "Desain UI/UX", "TypeScript"],
      bio: "Mantan desainer dalam membuat antarmuka intuitif.",
      avatar: "👩‍🎨",
    },
    {
      nama: "Rizki Ananda",
      peran: "Backend Lead",
      keahlian: ["Node.js", "GraphQL", "Arsitektur Cloud"],
      bio: "Pakar skalabilitas dengan pengalaman enterprise cloud.",
      avatar: "👨‍🔧",
    },
    {
      nama: "Rizki Ananda",
      peran: "Spesialis Pendidikan",
      keahlian: ["EdTech", "Analitik Pembelajaran", "AI dalam Pendidikan"],
      bio: "PhD Teknologi Pendidikan, mantan peneliti Stanford.",
      avatar: "👩‍🎓",
    },
  ];

  return (
    <section className="py-20 px-4 relative min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-pulse">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-amber-100">Temui</span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
              Para Inovator
            </span>
          </h2>
          <p className="text-xl text-amber-100/70 max-w-3xl mx-auto">
            Tim ahli yang bersemangat mendemokratisasi pengembangan aplikasi melalui AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {anggotaTim.map((anggota, index) => (
            <div
              key={index}
              className="transform transition-all duration-500 hover:scale-105 group"
            >
              <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 text-center shadow-2xl transition-all duration-300">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {anggota.avatar}
                </div>

                <h3 className="text-xl font-bold text-amber-100 mb-1 group-hover:text-orange-400 transition-colors duration-300">
                  {anggota.nama}
                </h3>

                <p className="text-orange-400 font-semibold mb-3">
                  {anggota.peran}
                </p>

                <p className="text-amber-100/70 text-sm mb-4 leading-relaxed">
                  {anggota.bio}
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {anggota.keahlian.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-medium border border-orange-500/30 hover:bg-orange-500/30 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Kerjasama IBM */}
        <div className="mt-16 transform transition-all duration-500">
          <div className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/30 rounded-2xl p-8 text-center shadow-xl">
            <div className="mb-6">
              <div className="text-4xl mb-4 animate-bounce">🤝</div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
                Didukung oleh IBM Granite AI
              </h3>
              <p className="text-amber-100/70 text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
                Kerjasama kami dengan IBM memungkinkan kami memanfaatkan model bahasa canggih untuk
                kemampuan pembuatan kode dan konten edukasi yang luar biasa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-900">
                Pelajari Kerjasama IBM Kami
              </button>
              <button className="border border-amber-100/30 text-amber-100 hover:bg-amber-100/10 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-100 focus:ring-offset-2 focus:ring-offset-slate-900">
                Lihat Dokumentasi Teknis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
