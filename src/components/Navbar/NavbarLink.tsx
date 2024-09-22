import Link from 'next/link';

export interface NavbarLinkProps {
  title: string;
  to: string;
  onClick?: () => void;
}

const NavbarLink = ({ title, to, onClick }: NavbarLinkProps) => {
  return (
    <Link
      href={to}
      className='text-sm font-medium text-gray-300 hover:text-white transition-colors'
      onClick={onClick}
    >
      {title}
    </Link>
  );
};

export default NavbarLink;
