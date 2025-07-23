import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="text-2xl p-2 border border-orange rounded-full"
      onClick={() => dispatch(toggleMenu())}
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;
