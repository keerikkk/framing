import { cn } from '@/lib/utils';
import NavbarLink, { NavbarLinkProps } from './NavbarLink';

interface NavbarLinkListProps {
  className?: string;
  links: NavbarLinkProps[];
  onClick?: () => void;
}

const NavbarLinkList = ({ className, links, onClick }: NavbarLinkListProps) => {
  return (
    <nav className={cn('font-medium', className)}>
      {links.map((link) => (
        <NavbarLink key={link.title} {...link} onClick={onClick} />
      ))}
    </nav>
  );
};

export default NavbarLinkList;
