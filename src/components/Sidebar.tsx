import React from 'react';
import {
  Home,
  User,
  Brain,
  Briefcase,
  Mail,
  Linkedin,
  Github,
  Menu,
  X
} from 'lucide-react';
import { SectionId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface SidebarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onNavigate,
  isMobileOpen,
  setIsMobileOpen
}) => {
  // مصفوفة التنقل الرئيسية - قابلة للتطوير وإضافة صفحات جديدة بكل سهولة
  const navItems: { id: SectionId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'expertise', label: 'Expertise', icon: Brain },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  // مصفوفة روابط السوشيال ميديا - مركزية وقابلة للتعديل أو الإضافة مستقبلاً
  const socialLinks = [
    { label: 'LinkedIn', href: PERSONAL_INFO.linkedin, icon: Linkedin },
    { label: 'GitHub', href: PERSONAL_INFO.github, icon: Github },
    { label: 'Email', href: `mailto:${PERSONAL_INFO.email}`, icon: Mail }
  ];

  const handleItemClick = (id: SectionId) => {
    onNavigate(id);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Desktop Expanded & Well-Spaced Sidebar */}
      <aside
        id="desktop-sidebar"
        className="hidden lg:flex flex-col justify-between items-center w-24 h-screen fixed left-0 top-0 z-40 bg-[#0b0c0e]/95 border-r border-[#C2A581]/20 backdrop-blur-md py-8 select-none shadow-[4px_0_24px_rgba(0,0,0,0.5)]"
      >
        {/* Top: Large & Prominent Logo */}
        <div className="flex flex-col items-center w-full px-2">
          <div
            id="sidebar-logo-btn"
            onClick={() => onNavigate('home')}
            className="w-16 h-16 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 group relative"
            title="Farah Taher - Home"
          >
            <img 
              src="/assets/img/logo.png" 
              alt="Farah Taher Logo" 
              className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(194,165,129,0.5)]" 
            />
            <span className="absolute left-full ml-3 px-3 py-1.5 bg-[#0b0c0e] border border-[#C2A581]/40 text-[#f5ebd8] text-xs font-serif-display font-medium rounded-md shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-50">
              Farah Taher • Home
            </span>
          </div>
          <div className="mt-5 w-10 h-[1.5px] bg-gradient-to-r from-transparent via-[#C2A581]/50 to-transparent" />
        </div>

        {/* Center: Well-Distributed Navigation Icons */}
        <nav className="flex flex-col items-center justify-evenly space-y-4 my-auto w-full px-3" aria-label="Main Navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <div key={item.id} className="relative group flex items-center justify-center w-full">
                <button
                  id={`nav-btn-${item.id}`}
                  onClick={() => handleItemClick(item.id)}
                  aria-label={item.label}
                  className={`relative flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-[#f5ebd8] bg-[#C2A581]/25 border border-[#C2A581]/70 shadow-[0_0_20px_rgba(194,165,129,0.35)] scale-110'
                      : 'text-[#8c887f] hover:text-[#f2e9db] hover:bg-[#121418] border border-transparent hover:border-[#C2A581]/30 hover:scale-105'
                  }`}
                >
                  {isActive && (
                    <span className="absolute -left-3 top-2.5 bottom-2.5 w-1.5 bg-[#C2A581] rounded-r-full shadow-[0_0_10px_#C2A581]" />
                  )}
                  <Icon
                    className={`w-6 h-6 transition-transform duration-300 group-hover:scale-110 ${
                      isActive ? 'text-[#C2A581]' : 'text-[#8c887f] group-hover:text-[#C2A581]'
                    }`}
                  />
                </button>
                <div className="absolute left-full ml-3.5 px-3 py-1.5 bg-[#0b0c0e] border border-[#C2A581]/40 text-[#ded7cb] text-xs font-mono tracking-wider uppercase rounded-md shadow-2xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 z-50 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C2A581]" />
                  <span>{item.label}</span>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Bottom: Social Media Quick Links Side-by-Side (Desktop) */}
        <div className="flex items-center justify-center gap-2.5 pt-4 border-t border-[#C2A581]/20 w-full px-2">
          {socialLinks.slice(0, 2).map((social, idx) => {
            const SocialIcon = social.icon;
            return (
              <div key={idx} className="relative group flex justify-center">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-[#8c887f] hover:text-[#f5ebd8] hover:bg-[#121418] border border-transparent hover:border-[#C2A581]/30 transition-all duration-200 block cursor-pointer"
                  aria-label={social.label}
                >
                  <SocialIcon className="w-4 h-4" />
                </a>
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#0b0c0e] border border-[#C2A581]/40 text-[#f5ebd8] text-[10px] font-mono tracking-wider uppercase rounded-md shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-50">
                  {social.label}
                </span>
              </div>
            );
          })}
        </div>
      </aside>

      {/* Mobile Top Navigation Bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3.5 bg-[#0b0c0e]/95 backdrop-blur-md border-b border-[#C2A581]/20">
        <div onClick={() => onNavigate('home')} className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src="/assets/img/logo.png" alt="Logo" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(194,165,129,0.4)]" />
          </div>
          <span className="font-serif-display text-sm font-semibold tracking-wider text-[#ede5d8]">
            FARAH TAHER
          </span>
        </div>
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2.5 rounded-xl bg-[#121418] border border-[#C2A581]/30 text-[#C2A581] cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col justify-between p-6 pt-24 animate-fadeIn">
          <nav className="flex flex-col space-y-3.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl text-sm font-medium tracking-wider uppercase text-left transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#f5ebd8] bg-[#C2A581]/20 border border-[#C2A581]/50 shadow-lg'
                      : 'text-[#9c9a96] hover:bg-[#121418]'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#C2A581]' : 'text-[#888]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
          
          {/* Mobile Social Links (مبنية ديناميكياً باستخدام مصفوفة `socialLinks`) */}
          <div className="pt-6 border-t border-[#C2A581]/20 flex justify-center gap-6">
            {socialLinks.map((social, idx) => {
              const SocialIcon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#121418] border border-[#C2A581]/30 text-[#C2A581]"
                  aria-label={social.label}
                >
                  <SocialIcon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};