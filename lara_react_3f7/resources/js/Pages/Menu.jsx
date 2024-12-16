import { Outlet, Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Link to="/blogs" className="text-sm text-gray-700 dark:text-gray-500 underline">Blogs</Link>{' '}&nbsp;&nbsp;&nbsp;
      <Link to="/contact" className="text-sm text-gray-700 dark:text-gray-500 underline">Contact</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/register" className="text-sm text-gray-700 dark:text-gray-500 underline">Register2</Link>{' '}&nbsp;&nbsp;&nbsp;
      <Link to="/home" className="text-sm text-gray-700 dark:text-gray-500 underline">Home</Link>{' '}&nbsp;&nbsp;&nbsp;
      <Outlet />
    </>
  )
};

export default Menu;