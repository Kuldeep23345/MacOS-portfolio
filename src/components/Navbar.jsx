import { navIcons, navLinks } from "#constants/index";
import useWindowsStore from "#store/window";
import dayjs from "dayjs";

const Navbar = () => {

  const{openWindow} =useWindowsStore();
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Kunal's Portfolio</p>
        <ul>
          {navLinks.map(({ id, name,type }) => (
            <li key={id} onClick={()=>openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
