import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'EXPERIENCE', path: '/experience' },
  { name: 'SKILLS', path: '/skills' },
  { name: 'PROJECTS', path: '/projects' },
  { name: 'CONTACT', path: '/contact' },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              'nav-link',
              location.pathname === item.path && 'active'
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
