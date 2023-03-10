import { NavbarContainer, LogoContainer, MenuContainer } from './styles';

import menuIcon from '../../../assets/Nav/menu.png'
import logo from '../../../assets/Nav/logo1.png'

type NavbarProps = {
  toggleMenu: () => void;
};

function Navbar({ toggleMenu }: NavbarProps) {
  const handleMenuClick = () => {
    toggleMenu();
  };

  return (
    <NavbarContainer>
      <LogoContainer><img src={logo} alt="Logo" /></LogoContainer>
      <MenuContainer onClick={handleMenuClick}><img src={menuIcon} alt="Menu Icon" /></MenuContainer>
    </NavbarContainer>
  );
};

export default Navbar;
