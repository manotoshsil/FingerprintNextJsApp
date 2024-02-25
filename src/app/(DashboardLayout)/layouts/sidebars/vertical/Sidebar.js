import React  , {useState} from "react";
import {
  Button, Nav, NavItem, Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import Logo from "../../shared/logo/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    title: "Dashboard",
    href: "/",
    icon: "bi bi-speedometer2",
  },
  // {
  //   title: "Students",
  //   href: "/ui/alerts",
  //   icon: "bi bi-bell",
  // },
  {
    title: "Students",
    href: "/ui/student/student-register",
    icon: "bi bi-bell",
  },
  {
    title: "Users",
    href: "/ui/badges",
    icon: "bi bi-patch-check",
  },
  {
    title: "Organizations",
    href: "/ui/buttons",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Settings",
    href: "/ui/cards",
    icon: "bi bi-card-text",
  },

];

const Sidebar = ({ showMobilemenu }) => {
  const location = usePathname();
  const currentURL = location.slice(0, location.lastIndexOf('/'));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <span className="ms-auto d-lg-none">
          <Button
            close
            size="sm"
            onClick={showMobilemenu}
          ></Button>
        </span>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                href={navi.href}
                className={
                  location === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
         
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
