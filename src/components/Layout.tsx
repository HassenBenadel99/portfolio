import { ReactNode } from 'react';
import Navigation from './Navigation';
import SocialSidebar from './SocialSidebar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  showParticles?: boolean;
}

const Layout = ({ children, showParticles = false }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SocialSidebar />
      <main className="pl-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
