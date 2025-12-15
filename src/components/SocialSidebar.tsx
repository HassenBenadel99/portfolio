import { Home, User, Briefcase, Grid3X3, Mail, Github, Linkedin, Code } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navigationIcons = [
  { icon: Home, path: '/', label: 'Home' },
  { icon: User, path: '/about', label: 'About' },
  { icon: Briefcase, path: '/experience', label: 'Experience' },
  { icon: Code, path: '/skills', label: 'Skills' },
  { icon: Grid3X3, path: '/projects', label: 'Projects' },
  { icon: Mail, path: '/contact', label: 'Contact' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/hassenbenadel/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/HassenBenadel99', label: 'GitHub' },
];

const SocialSidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-16 flex flex-col items-center justify-between py-24 z-40">
      <div className="flex flex-col gap-4">
        {navigationIcons.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'social-icon',
                isActive && 'text-primary border border-primary rounded'
              )}
              title={item.label}
            >
              <Icon size={20} />
            </Link>
          );
        })}
      </div>

      <div className="flex flex-col gap-4">
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className="social-icon"
              title={item.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default SocialSidebar;
