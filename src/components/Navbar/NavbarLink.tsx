import { Link } from 'react-scroll';

export interface NavbarLinkProps {
  title: string;
  to: string;
  onClick?: () => void;
}

const NavbarLink = ({ title, to, onClick }: NavbarLinkProps) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={1000}
      className='cursor-pointer text-sm font-medium text-paragraph-dark transition-colors hover:text-blue-dark dark:text-gray-300 dark:hover:text-white'
      onClick={onClick}
    >
      {title}
    </Link>
  );
};

export default NavbarLink;
