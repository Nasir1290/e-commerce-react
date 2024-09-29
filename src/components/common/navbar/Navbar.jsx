// import React from "react";
// import shoppingCartIcon from "/src/assets/icons/shopping-cart.png";
// // import { Link } from "react-router-dom";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenuToggle,
//   NavbarMenu,
//   NavbarMenuItem,
//   Link,
//   Button,
//   Input,
//   DropdownItem,
//   DropdownTrigger,
//   Dropdown,
//   DropdownMenu,
//   Avatar,
//   Image,
//   Tab,
// } from "@nextui-org/react";
// import { SearchIcon } from "./SearchIcons.jsx";
// import LogoImage from "../../../assets/images/logo.png";
// import NavItem from "./NavItem.jsx";
// import { useNavigate } from "react-router-dom";

// export default function NavbarPage() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const navigate = useNavigate();

//   const menuItems = [
//     "Home",
//     "Shop",
//     "Trending",
//     // "Analytics",
//     // "System",
//     // "Deployments",
//     // "My Settings",
//     // "Team Settings",
//     // "Help & Feedback",
//     "Missions",
//   ];

//   return (
//     <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
//       <NavbarContent justify="start">
//         <NavbarMenuToggle
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           className="sm:hidden"
//         />
//         {/* company logo */}
//         <NavbarBrand>
//           <Image
//             onClick={() => {
//               navigate("/");
//             }}
//             className=" w-8 h-8 md:w-16 md:h-16 rounded-full cursor-pointer"
//             src={LogoImage}
//           />
//           <p
//             onClick={() => {
//               navigate("/");
//             }}
//             className="md:font-bold font-semibold text-inherit cursor-pointer"
//           >
//             E-Shop
//           </p>
//         </NavbarBrand>

//         {/* <h4 className=" mx-2 font-bold">Shop</h4> */}
//       </NavbarContent>

//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         {/* navigation items menu */}
//         <NavItem />
//         {/* navigation items menu */}
//       </NavbarContent>

//       <NavbarContent justify="end" className="items-center">
//         {/* Search Input added here */}

//         {/* add a cart icon for add to cart */}
//         <div className=" border-2 border-blue-500 h-10 w-10 rounded-full bg-gray-200 text-green-500 font-bold flex items-center justify-center">
//           <Image src={shoppingCartIcon} className="h-8 w-8"></Image>
//         </div>

//         {/* user menus like logout card and many thing to added here */}
//         {/* Avatar Dropdown added here */}
//         <Dropdown placement="bottom-end">
//           <DropdownTrigger>
//             <Avatar
//               isBordered
//               as="button"
//               className="transition-transform"
//               color="secondary"
//               name="Jason Hughes"
//               size="sm"
//               src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
//             />
//           </DropdownTrigger>
//           <DropdownMenu aria-label="Profile Actions" variant="flat">
//             <DropdownItem key="profile" className="h-14 gap-2">
//               <p className="font-semibold">Signed in as</p>
//               <p className="font-semibold">zoey@example.com</p>
//             </DropdownItem>
//             {/* <DropdownItem key="settings">My Settings</DropdownItem> */}
//             {/* <DropdownItem key="team_settings">Team Settings</DropdownItem>
//             <DropdownItem key="analytics">Analytics</DropdownItem>
//             <DropdownItem key="system">System</DropdownItem>
//             <DropdownItem key="configurations">Configurations</DropdownItem>
//             <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem> */}
//             <DropdownItem key="logout" color="danger">
//               Log Out
//             </DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//       </NavbarContent>

//       {/* Menu item for mobile user */}
//       <NavbarMenu>
//         {/* {menuItems.map((item, index) => ( */}
//         {/* <NavbarMenuItem key={`${item}-${index}`}> */}
//         <NavbarMenuItem>
//           <Link
//             color="primary"
//             className="w-full"
//             onClick={(event) => {
//               event.preventDefault();
//               navigate("/");
//               close;
//             }}
//             size="lg"
//           >
//             Home
//           </Link>

//           <Link
//             color="foreground"
//             onClick={(event) => {
//               event.preventDefault();
//               navigate("/shop");
//             }}
//             className="w-full"
//             size="lg"
//           >
//             Shop
//           </Link>

//           <Link
//             color="foreground"
//             onClick={(event) => {
//               event.preventDefault();
//               navigate("/trending");
//             }}
//             className="w-full"
//             size="lg"
//           >
//             Trending
//           </Link>

//           <Link
//             color="foreground"
//             onClick={(event) => {
//               event.preventDefault();
//               navigate("/mission");
//             }}
//             className="w-full"
//             size="lg"
//           >
//             Our Mission
//           </Link>
//         </NavbarMenuItem>

//         {/* ))} */}
//       </NavbarMenu>
//     </Navbar>
//   );
// }

import { Button, Drawer, Image, Menu } from "antd";
import MainLogo from "../../../assets/images/logo.png";
import { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import shoppingCartIcon from "/src/assets/icons/shopping-cart.png";

// import useAuth from "../../hooks/useAuth";
// import useOpenProfile from "../../hooks/useOpenProfile";

export default function Navbar() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigage = useNavigate();
  // const { loading, user } = useAuth();
  // const { isOpenProfile, setIsOpenProfile } = useOpenProfile();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollUp(false);
      } else {
        setScrollUp(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Fixed navbar */}
      <div
        className={`flex container py-2 bg-white items-center justify-between gap-1 md:gap-2 border-b shadow fixed top-0 w-full z-50 transition-transform duration-300 ${
          scrollUp ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {isMobileView && (
          <MenuOutlined
            onClick={() => setIsShowMenu(true)}
            className="md:hidden ml-3"
          />
        )}
        <div>
          <Link to="/home">
            <img
              className="hidden md:flex w-8 h-8 md:w-16 ml-4 md:h-16 rounded-full cursor-pointer"
              src={MainLogo}
              alt="logo"
            />
          </Link>
        </div>
        {!isMobileView && (
          <div className="hidden md:flex">
            <MenuBar isInline={false} />
          </div>
        )}

        <Drawer
          open={isShowMenu}
          closable
          placement="left"
          onClose={() => setIsShowMenu(false)}
        >
          <MenuBar isInline={true} setIsShowMenu={setIsShowMenu} />
        </Drawer>

        <div className="flex mr-2 md:mr-12">
          <div className=" border-2 border-purple-400 h-9 w-9 p-1 mx-2 rounded-full bg-gray-100 text-green-500 font-bold flex items-center justify-center">
            <Image src={shoppingCartIcon} className="h-8 w-8"></Image>{" "}
          </div>

          {/* {user?.email ? (
            <Button
              onClick={() => {
                setIsOpenProfile(true);
              }}
              className="px-3 py-2 border-1 border-b-2 border-black text-black text-xs font-bold rounded-lg"
            >
              My Profile
            </Button>
          ) : (
            <Button
              role="link"
              onClick={() => navigage("/auth/login")}
              className="px-3 py-2 border-1 mr-4 border-b-2 border-black text-black text-xs font-bold rounded-lg"
            >
              Login
            </Button>
          )} */}

          <Button
            role="link"
            onClick={() => navigage("/auth/login")}
            className="px-3 py-2 border-1 mr-4 border-b-2 border-black text-black text-xs font-bold rounded-lg"
          >
            Login
          </Button>
        </div>
      </div>

      {/* Add padding to the content below the navbar */}
      <div className="pt-16 mb-4"></div>
    </>
  );
}

const MenuBar = ({ isInline, setIsShowMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState(location.pathname);

  useEffect(() => {
    setSelectedKey(location.pathname);
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // This makes the scroll smooth
      });
    };
    scrollToTop()
  }, [location.pathname]);

  return (
    <Menu
      onClick={({ key }) => {
        navigate(key);
        setIsShowMenu(false);
        setSelectedKey(key);
      }}
      selectedKeys={[selectedKey]}
      className={`text-lg gap-4 border-none bg-white text-black`}
      mode={isInline ? "inline" : "horizontal"}
      items={[
        { label: "Home", key: "/home" },
        { label: "Shop", key: "/shop" },
        { label: "Our-Mission", key: "/mission" },
        { label: "Trending", key: "/trending" },
      ]}
    />
  );
};
