import React, { useState, useEffect } from 'react';
import { SectionId, ProjectData } from './types';
import { Sidebar } from './components/Sidebar';
import { SplashScreen } from './components/SplashScreen';
import { BackgroundParticles } from './components/BackgroundParticles';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExpertiseSection } from './components/sections/ExpertiseSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { PERSONAL_INFO } from './data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function App() {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  // Scroll to top smoothly when active section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const handleNavigate = (section: SectionId) => {
    setActiveSection(section);
  };

  const handleOpenProject = (project: ProjectData) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const handleReplayIntro = () => {
    setShowSplash(true);
    setActiveSection('home');
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#ded7cb] relative selection:bg-[#C2A581] selection:text-[#0b0c0e] overflow-x-hidden font-sans">
      {/* Intro Splash Screen Animation */}
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}

      {/* Animated Subtle Golden Particle Mesh Background */}
      <BackgroundParticles />

      {/* Top Navigation Bar */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        onReplayIntro={handleReplayIntro}
      />

      {/* Main Content Area (تم تعديل الـ padding علوياً ليتناسب مع الـ Top Navbar الجديدة) */}
      <main className="relative z-10 min-h-screen flex flex-col justify-between pt-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-14">
          {activeSection === 'home' && (
            <HeroSection
              onNavigate={handleNavigate}
              onOpenProject={handleOpenProject}
            />
          )}

          {activeSection === 'about' && (
            <AboutSection onNavigate={handleNavigate} />
          )}

          {activeSection === 'expertise' && (
            <ExpertiseSection onNavigate={handleNavigate} />
          )}

          {activeSection === 'projects' && (
            <ProjectsSection
              onNavigate={handleNavigate}
              onOpenProject={handleOpenProject}
            />
          )}

          {activeSection === 'contact' && (
            <ContactSection />
          )}
        </div>

        {/* Global Footer الاحترافي بثلاثة أعمدة */}
        <footer className="border-t border-[#C2A581]/20 py-12 px-6 bg-[#0b0c0e]/95 backdrop-blur-md mt-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 pb-10 border-b border-[#C2A581]/15">
            
            {/* العمود الأول: اللوجو الكبير ونبذة تعريفية */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img 
                    src="/assets/img/logo.png" 
                    alt="Farah Taher Logo" 
                    className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(194,165,129,0.5)]" 
                  />
                </div>
                <span className="font-serif-display text-lg font-bold text-[#f9f3ea] tracking-wider">
                  FARAH TAHER
                </span>
              </div>
              <p className="text-xs text-[#a39d91] leading-relaxed max-w-sm">
                Analytics Consultant & Data Specialist transforming complex, multi-source data into clear insights, automated workflows, and measurable business growth.
              </p>
            </div>

            {/* العمود الثاني: لينكات الصفحات (بدون رموز) */}
            <div className="space-y-4">
              <h4 className="font-serif-display text-xs font-bold tracking-[0.2em] text-[#C2A581] uppercase">
                QUICK LINKS
              </h4>
              <ul className="space-y-2.5 text-xs font-mono">
                <li>
                  <button onClick={() => handleNavigate('home')} className="text-[#a39d91] hover:text-[#C2A581] transition-colors cursor-pointer">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('about')} className="text-[#a39d91] hover:text-[#C2A581] transition-colors cursor-pointer">
                    About Me
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('projects')} className="text-[#a39d91] hover:text-[#C2A581] transition-colors cursor-pointer">
                    Projects 
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('expertise')} className="text-[#a39d91] hover:text-[#C2A581] transition-colors cursor-pointer">
                    Expertise
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('contact')} className="text-[#a39d91] hover:text-[#C2A581] transition-colors cursor-pointer">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* العمود الثالث: معلومات التواصل والسوشيال ميديا */}
            <div className="space-y-4">
              <h4 className="font-serif-display text-xs font-bold tracking-[0.2em] text-[#C2A581] uppercase">
                GET IN TOUCH
              </h4>
              <div className="space-y-3 text-xs font-mono text-[#a39d91]">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C2A581] shrink-0" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C2A581] shrink-0" />
                  <span>+1 (506) 866-5671</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C2A581] shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#121418] border border-[#C2A581]/30 text-[#C2A581] hover:bg-[#C2A581] hover:text-[#0b0c0e] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href={PERSONAL_INFO.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#121418] border border-[#C2A581]/30 text-[#C2A581] hover:bg-[#C2A581] hover:text-[#0b0c0e] transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* شريط حقوق النشر السفلي */}
          <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8c887f]">
            <div className="text-[11px] text-[#8c887f]">
              © 2026 <span className="text-[#C2A581] font-medium">Farah Taher</span>. All Rights Reserved.
            </div>

            <div className="text-[11px] text-[#8c887f]">
              Designed & Built by{' '}
              <a 
                href="https://www.linkedin.com/in/lobnaelemary" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#C2A581] hover:underline transition-colors font-semibold"
              >
                Lobna Elemary
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* Case Study Deep Dive Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={handleCloseProject}
        />
      )}
    </div>
  );
}