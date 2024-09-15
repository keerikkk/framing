import { NavLink } from 'react-router-dom';

export interface NavbarLinkProps {
  title: string;
  to: string;
  onClick?: () => void;
}

const NavbarLink = ({ title, to, onClick }: NavbarLinkProps) => {
  return (
    <NavLink
      to={to}
      className='text-sm font-medium text-gray-300 hover:text-white transition-colors'
      onClick={onClick}
    >
      {title}
    </NavLink>
  );
};

export default NavbarLink;
