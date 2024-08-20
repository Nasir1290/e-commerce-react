import React from "react";
// import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Image,
  Tab,
} from "@nextui-org/react";
import { SearchIcon } from "./SearchIcons.jsx";
import LogoImage from "../../../assets/images/logo.png";
import NavItem from "./NavItem.jsx";
import { useNavigate } from "react-router-dom";

export default function NavbarPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const menuItems = [
    "Home",
    "Shop",
    // "Activity",
    // "Analytics",
    // "System",
    // "Deployments",
    // "My Settings",
    // "Team Settings",
    // "Help & Feedback",
    "Missions",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
          onClick={() => {navigate("/shop")}}
            className=" w-8 h-8 md:w-16 md:h-16 rounded-full"
            src={LogoImage}
          />
          <p  onClick={() => {navigate("/shop")}} className="md:font-bold font-semibold text-inherit">E-Shop</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* navigation items menu */}
        <NavItem />
        {/* navigation items menu */}
      </NavbarContent>

      <NavbarContent justify="end" className="items-center">
        {/* Search Input added here */}
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />

        {/* Avatar Dropdown added here */}
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            {/* <DropdownItem key="settings">My Settings</DropdownItem> */}
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {/* {menuItems.map((item, index) => ( */}
        {/* <NavbarMenuItem key={`${item}-${index}`}> */}
        <NavbarMenuItem>
          <Link
            color="primary"
            className="w-full"
            onClick={(event) => {
              event.preventDefault();
              navigate("/");
              close;
            }}
            size="lg"
          >
            Home
          </Link>
          <Link
            color="foreground"
            onClick={(event) => {
              event.preventDefault();
              navigate("/shop");
            }}
            className="w-full"
            size="lg"
          >
            Shop
          </Link>
        </NavbarMenuItem>

        {/* ))} */}
      </NavbarMenu>
    </Navbar>
  );
}
