import { cn } from '@/lib/utils';
import NavbarLink, { NavbarLinkProps } from './NavbarLink';
import ThemeSwitch from '../UI/ThemeSwitch';

interface NavbarLinkListProps {
  className?: string;
  links: NavbarLinkProps[];
  onClick?: () => void;
}

const NavbarLinkList = ({ className, links, onClick }: NavbarLinkListProps) => {
  return (
    <nav className={cn('font-medium flex items-center', className)}>
      {links.map((link) => (
        <NavbarLink key={link.title} {...link} onClick={onClick} />
      ))}
      <ThemeSwitch />
    </nav>
  );
};

export default NavbarLinkList;
