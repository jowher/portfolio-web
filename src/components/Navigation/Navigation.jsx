import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./NavigationStyle.css";
import { ImLinkedin, ImGithub } from "react-icons/im";

const Navigation = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleNavbarToggle = () => {
    setToggleNav(!toggleNav);
    document.body.style.overflow = toggleNav ? "initial" : "hidden";
  };

  return (
    <div className="navigation_wrapper">
      <div className="navigation_container container">
        <nav>
          <ul className={toggleNav && "active"}>
            <button className="close_btn" onClick={handleNavbarToggle}>
              <IoMdClose />
            </button>
            <li>
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about">About</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#experience">Experience</AnchorLink>
            </li>
            {/* <li>
              <AnchorLink href="#">Work</AnchorLink>
            </li> */}
            <li>
              <AnchorLink href="#contact">Contact</AnchorLink>
            </li>
            <li className="social_links">
              <a href="https://www.linkedin.com/in/muhammed-ali-jowher/"  target="_blank">
                <ImLinkedin />
              </a>
              {/* <a href="#">
                <ImGithub />
              </a> */}
            </li>
          </ul>

          <button className="menu_btn" onClick={handleNavbarToggle}>
            <IoMenu />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
