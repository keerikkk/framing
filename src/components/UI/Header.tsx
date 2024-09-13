interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <h1 className='font-cormorant text-4xl sm:text-5xl lg:text-6xl text-white text-left'>
      {title}
    </h1>
  );
};

export default Header;
