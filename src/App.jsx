import React from 'react';
import { FaHackerrank, FaGithub, FaLinkedin, FaCertificate, FaCode, FaCheckCircle, FaBriefcase, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 font-sans antialiased">
      
      {/* HERO HEADER SECTION */}
      <header className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 border-b border-slate-800 py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-center md:text-left space-y-3">
            <span className="bg-indigo-500/10 text-indigo-400 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border border-indigo-500/20">
              Agile-Proficient QA Leader
            </span>
            <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight text-white">
              Sunantha Chakkingal
            </h1>
            <p className="text-xl text-indigo-400 font-medium">
              QA Architect & Senior Automation Engineer
            </p>
            
            {/* Quick Contact Row */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1.5"><FaMapMarkerAlt /> Calgary, Alberta</span>
              <span className="flex items-center gap-1.5"><FaPhoneAlt /> (+1) 587 433 4175</span>
              <span className="flex items-center gap-1.5"><FaEnvelope /> sunantha.shanker@gmail.com</span>
            </div>
          </div>

          {/* Connected Profiles Card */}
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm min-w-[290px]">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center md:text-left">Verified Technical Hubs</h3>
            <div className="grid grid-cols-3 gap-3 text-center">
              <a href="https://hackerrank.com/natasha2809" target="_blank" rel="noreferrer" className="flex flex-col items-center p-3 bg-slate-900/80 rounded-xl hover:bg-emerald-950/30 hover:border-emerald-500/30 border border-transparent transition-all group">
                <FaHackerrank className="text-2xl text-emerald-500 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] text-slate-400 mt-1 font-medium">HackerRank</span>
              </a>
              <a href="https://github.com/natasha2809" target="_blank" rel="noreferrer" className="flex flex-col items-center p-3 bg-slate-900/80 rounded-xl hover:bg-white/5 hover:border-white/20 border border-transparent transition-all group">
                <FaGithub className="text-2xl text-white group-hover:scale-110 transition-transform" />
                <span className="text-[10px] text-slate-400 mt-1 font-medium">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/sunanthachakkingal" target="_blank" rel="noreferrer" className="flex flex-col items-center p-3 bg-slate-900/80 rounded-xl hover:bg-blue-950/40 hover:border-blue-500/30 border border-transparent transition-all group">
                <FaLinkedin className="text-2xl text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] text-slate-400 mt-1 font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

        </div>
      </header>

      {/* DASHBOARD LAYOUT GRID */}
      <main className="max-w-5xl mx-auto py-12 px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COMPONENT COLUMN: Technical Arsenal & Certs */}
        <div className="lg:col-span-1 space-y-8">
          
          {/* Professional Profile Summary */}
          <section className="bg-slate-800/40 p-6 rounded-2xl border border-slate-800/80 backdrop-blur-sm">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Overview</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Passionate, metrics-driven QA Architect with comprehensive expertise in end-to-end framework engineering. Proven record of implementing risk-based testing approaches to capture critical flaws early within the SDLC lifecycle.
            </p>
          </section>

          {/* Technical Toolkit Grid */}
          <section className="bg-slate-800/40 p-6 rounded-2xl border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center space-x-2 mb-4 text-indigo-400">
              <FaCode />
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">Technical Competencies</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Test Automation Core</span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {['Playwright', 'Selenium WebDriver', 'TestNG', 'Appium (Mobile)', 'LambdaTest'].map((s) => (
                    <span key={s} className="text-xs bg-slate-950 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">API Testing Frameworks</span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {['Postman', 'SOAP-UI'].map((s) => (
                    <span key={s} className="text-xs bg-slate-950 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Languages & Databases</span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {['Java', 'Python', 'SQL', 'PL/SQL', 'Oracle', 'MySQL', 'DB2'].map((s) => (
                    <span key={s} className="text-xs bg-slate-950 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">CI/CD & Environment Management</span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {['Jenkins', 'Git', 'GitHub', 'IBM Clearcase', 'JIRA', 'Node.js v22'].map((s) => (
                    <span key={s} className="text-xs bg-slate-950 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Credentials Card */}
          <section className="bg-slate-800/40 p-6 rounded-2xl border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center space-x-2 mb-4 text-indigo-400">
              <FaCheckCircle />
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">Credentials</h2>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/60 flex gap-3 items-start">
                <FaCertificate className="text-indigo-400 text-lg mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">ISTQB Certified Tester</h4>
                  <p className="text-[11px] text-slate-400">Advanced Level Test Automation Engineer</p>
                </div>
              </div>
              <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/60 flex gap-3 items-start">
                <FaCertificate className="text-indigo-400 text-lg mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Oracle Certified Associate</h4>
                  <p className="text-[11px] text-slate-400">Java SE / PLSQL Database Architect</p>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* RIGHT COMPONENT COLUMN: Core Professional Experience Timeline */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-slate-800/20 p-6 rounded-2xl border border-slate-800/60">
            <div className="flex items-center space-x-2 mb-6 text-indigo-400 border-b border-slate-800 pb-3">
              <FaBriefcase />
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">Engineering Work History</h2>
            </div>

            <div className="relative border-l border-slate-800 ml-2 pl-6 space-y-8">
              
              {/* Current Job Role */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 bg-indigo-500 w-3 h-3 rounded-full ring-4 ring-slate-900"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-lg font-bold text-white tracking-wide">Software Quality Assurance Engineer</h3>
                  <span className="text-xs bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded border border-indigo-500/20 w-fit font-medium">Feb 2025 – Present</span>
                </div>
                <p className="text-xs text-indigo-300 font-semibold mt-0.5">Chata.ai</p>
                
                <ul className="text-sm text-slate-400 mt-3 space-y-2 list-disc list-outside pl-4 leading-relaxed">
                  <li>Engineered robust UI Automation Framework using <strong className="text-slate-200 font-medium">Selenium and TestNG from scratch</strong> to support fast execution configurations.</li>
                  <li>Created and deployed scalable backend test validation infrastructures leveraging <strong className="text-slate-200 font-medium">Postman</strong> for API endpoints security and payloads routing.</li>
                  <li>Integrated local automated workflows into custom <strong className="text-slate-200 font-medium">Jenkins CI/CD execution servers</strong> executing scheduled cross-browser regression matrices against cloud ecosystems like LambdaTest.</li>
                  <li>Explored and designed mobile device orchestration patterns leveraging the <strong className="text-slate-200 font-medium">Appium Automation Framework</strong> to provide comprehensive native viewport metrics.</li>
                  <li>Applied a data-driven, risk-based approach to ensure that <strong className="text-emerald-400 font-semibold">90% of critical system software defects are isolated and resolved</strong> before UAT phases, streamlining development delivery cycles.</li>
                </ul>
              </div>

              {/* Historic Roles Reference */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 bg-slate-700 w-3 h-3 rounded-full ring-4 ring-slate-900"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-md font-bold text-slate-300">Senior QA Architect & Scrum Master</h3>
                  <span className="text-xs bg-slate-800 text-slate-500 px-2 py-0.5 rounded border border-slate-700 w-fit">Dec 2020 – Sep 2023</span>
                </div>
                <p className="text-xs text-slate-500 font-semibold">Blue Yonder Inc (JDA Software Pvt. Ltd.)</p>
                <p className="text-sm text-slate-500 mt-2 italic">
                  Led large-scale test matrix strategies, automated component-level evaluations, and structured agile scrum team dynamics across core enterprise products.
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* PORTFOLIO FOOTER */}
      <footer className="text-center py-10 text-xs text-slate-600 border-t border-slate-950 mt-12">
        <p>© 2026 Sunantha Chakkingal • Designed via React & Tailwind CSS</p>
      </footer>

    </div>
  );
}