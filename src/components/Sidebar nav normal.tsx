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
  // مصفوفة التنقل الرئيسية
  const navItems: { id: SectionId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'expertise', label: 'Expertise', icon: Brain },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  // مصفوفة روابط السوشيال ميديا
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
      {/* Top Navbar Header (Desktop & Mobile Unified) */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 bg-[#0b0c0e]/90 backdrop-blur-md border-b border-[#C2A581]/20 shadow-lg select-none">
        
        {/* Left: Brand Logo & Name */}
        <div 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-3.5 cursor-pointer group"
        >
          <div className="w-11 h-11 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <img 
              src="/assets/img/logo.png" 
              alt="Farah Taher Logo" 
              className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(194,165,129,0.5)]" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-display text-base font-bold tracking-widest text-[#f9f3ea] group-hover:text-[#C2A581] transition-colors">
              FARAH TAHER
            </span>
            <span className="text-[10px] font-mono tracking-wider text-[#C2A581] uppercase">
              Analytics Consultant
            </span>
          </div>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 bg-[#121418]/80 border border-[#C2A581]/20 px-3 py-1.5 rounded-full shadow-inner" aria-label="Main Navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                aria-label={item.label}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-[#0b0c0e] bg-[#C2A581] font-bold shadow-[0_0_15px_rgba(194,165,129,0.4)] scale-105'
                    : 'text-[#9c9a96] hover:text-[#f5ebd8] hover:bg-[#1a1d24]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#0b0c0e]' : 'text-[#C2A581]'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right: Social Icons (Desktop) & Hamburger Menu (Mobile) */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 pl-2 border-l border-[#C2A581]/20">
            {socialLinks.map((social, idx) => {
              const SocialIcon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-[#8c887f] hover:text-[#C2A581] hover:bg-[#121418] border border-transparent hover:border-[#C2A581]/30 transition-all duration-200 block cursor-pointer"
                  aria-label={social.label}
                >
                  <SocialIcon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-[#121418] border border-[#C2A581]/30 text-[#C2A581] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col justify-between p-6 pt-28 animate-fadeIn">
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
                      ? 'text-[#0b0c0e] bg-[#C2A581] font-bold shadow-lg'
                      : 'text-[#9c9a96] hover:bg-[#121418] hover:text-[#f5ebd8]'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#0b0c0e]' : 'text-[#C2A581]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
          
          {/* Mobile Social Links */}
          <div className="pt-6 border-t border-[#C2A581]/20 flex justify-center gap-6 pb-4">
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