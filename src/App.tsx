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

      {/* Compact Icon-Only Navigation Sidebar (Desktop & Mobile Drawer) */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        onReplayIntro={handleReplayIntro}
      />

      {/* Main Content Area */}
      <main className="lg:pl-20 relative z-10 min-h-screen flex flex-col justify-between pt-16 lg:pt-0">
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

        {/* Global Footer - تم ضبط ألوان الاسم لتكون بالذهبي الصريح والمتناسق */}
        <footer className="border-t border-[#C2A581]/15 py-6 px-6 bg-[#0b0c0e]/95 backdrop-blur-md mt-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8c887f]">
            
            <div className="text-[11px] text-[#8c887f] order-2 md:order-1 text-center md:text-left">
              © 2026 <span className="text-[#C2A581] font-medium">Farah Taher</span>. All Rights Reserved.
            </div>

            <div className="flex flex-col items-center text-center order-1 md:order-2 space-y-0.5">
              <span className="font-serif-display text-sm font-bold text-[#C2A581] tracking-wider">FARAH TAHER</span>
              <span className="text-[10px] text-[#8c887f] tracking-widest uppercase">Analytics Consultant & Data Specialist</span>
            </div>

            <div className="text-[11px] text-[#8c887f] order-3 text-center md:text-right">
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