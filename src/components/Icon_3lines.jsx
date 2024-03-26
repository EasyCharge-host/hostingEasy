import { AiOutlineMenu } from "react-icons/ai";

function Icon_3lines(prop) {
  const { setDropdown, Dropdown } = prop;
  return (
    <>
      <AiOutlineMenu
        className="p-3 m-3"
        size={"3rem"}
        onClick={() => setDropdown(!Dropdown)}
      >
        Icon
      </AiOutlineMenu>
    </>
  );
}

export default Icon_3lines;
