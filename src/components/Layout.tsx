import { ReactNode } from 'react';
import Navigation from './Navigation';
import SocialSidebar from './SocialSidebar';
import GradientBackground from './GradientBackground';

interface LayoutProps {
  children: ReactNode;
  showGradient?: boolean;
}

const Layout = ({ children, showGradient = false }: LayoutProps) => {
  return (
    <div className="min-h-screen relative">
      {showGradient && <GradientBackground />}
      <Navigation />
      <SocialSidebar />
      <main className="pl-16 relative z-10">{children}</main>
    </div>
  );
};

export default Layout;
