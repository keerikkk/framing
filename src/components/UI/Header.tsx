interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <h1 className='font-cormorant text-6xl text-white text-left'>{title}</h1>
  );
};

export default Header;
