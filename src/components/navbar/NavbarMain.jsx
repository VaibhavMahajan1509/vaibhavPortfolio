import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = ({ onWhyHireClick }) => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between p-4 lg:px-8">
        <NavbarLogo />
        <div className="hidden lg:block">
          <NavbarLinks />
        </div>
        <div className="hidden lg:block">
          <NavbarBtn onClick={onWhyHireClick} />
        </div>
        <div className="lg:hidden">
          <NavbarToggler />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black px-4 pb-4">
          <NavbarLinks />
          <div className="mt-4">
            <NavbarBtn onClick={onWhyHireClick} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;

