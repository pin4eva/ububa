'use client';

import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

interface FrontLayoutProps {
  children: React.ReactNode;
}

export function FrontLayout({ children }: FrontLayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = (state: boolean) => {
    setShowMobileNav(state);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        scrolled={scrolled}
        showMobileNav={showMobileNav}
        toggleMobileNav={toggleMobileNav}
      />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
