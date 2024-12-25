import { X } from 'lucide-react';
import { NavbarLinkProps } from './NavbarLink';
import NavbarLinkList from './NavbarLinkList';

interface DrawerProps {
  onClick: () => void;
  links: NavbarLinkProps[];
  isOpen: boolean;
}

const Drawer = ({ onClick, links, isOpen }: DrawerProps) => {
  return (
    <div
      className={`fixed bottom-0 right-0 top-0 z-50 w-64 transform bg-[#0F0F0F] bg-opacity-95 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
    >
      <div className='flex justify-start p-4'>
        <button onClick={onClick} className='text-gray-300 hover:text-white'>
          <X className='h-6 w-6' />
        </button>
      </div>
      <NavbarLinkList
        className='flex flex-col space-y-4 p-4'
        onClick={onClick}
        links={links}
      />
    </div>
  );
};

export default Drawer;
