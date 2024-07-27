import { useEffect, useRef, useState } from "react";
import { IconLinks, Navigation } from "../../config";
import { Image } from "@nextui-org/react";

import "./index.scss";
import {
  Divider,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle
} from "@nextui-org/react";
import ThemeToggle from "../ThemeToggle";
import Icon from "../Icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggleIcon, setToggleIcon] = useState<HTMLElement | null>(null);
  const [theme, setTheme] = useState("dark");
  // 获取nav实例
  useEffect(() => {
    setToggleIcon(document.querySelector(".myToggleIcon") as HTMLElement);
  }, []);

  const handleMenuChange = (e: boolean) => {
    setIsMenuOpen(e);
    if (e) {
      toggleIcon?.classList.add("myToggleIconOpen");
    } else {
      toggleIcon?.classList.remove("myToggleIconOpen");
    }
  };

  return (
    <header className="inset-x-0 top-0 z-50 py-8 mb-14">
      <Navbar
        maxWidth="2xl"
        shouldHideOnScroll={true}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={handleMenuChange}
        classNames={{ toggleIcon: "myToggleIcon", base: "navBase" }}
        className="backdrop-blur-none	"
        style={{ background: "transparent" }}
      >
        <NavbarContent>
          <NavbarBrand>
            <Image
              width={150}
              alt="Logo"
              src={
                theme === "dark"
                  ? "/assets/backgrounds/logo_dark.png"
                  : "/assets/backgrounds/logo_light.png"
              }
            />
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />
        </NavbarContent>

        <NavbarContent
          className="hidden md:flex gap-4 myMenu text-sm rounded-full"
          justify="center"
        >
          {Navigation.map((item, index) => (
            <NavbarItem
              key={`${item}-${index}`}
              className="myMenuItem font-bold"
            >
              <Link href={item.href} color="foreground">
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end" className="myMenuRight hidden md:flex">
          {IconLinks.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <Link href={item.href}>
                <span className="sr-only">{item.label}</span>
                <Icon icon={item.icon} className="myMenuIcon" />
              </Link>
            </NavbarItem>
          ))}
          <NavbarItem>
            {ThemeToggle({
              setTheme
            })}
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="mt-8 MobileMenu">
          {Navigation.map((item, index) => (
            <NavbarItem
              key={`${item}-${index}`}
              className="myMenuItem font-bold"
            >
              <Link href={item.href} color="foreground">
                {item.name}
              </Link>
            </NavbarItem>
          ))}
          <Divider className="my-4" />

          <div className="flex px-3 mt-4 justify-between">
            <div className="flex justify-center gap-4 ">
              {IconLinks.map((item, index) => (
                <NavbarItem key={`${item}-${index}`}>
                  <Link href={item.href}>
                    <span className="sr-only">{item.label}</span>
                    <Icon icon={item.icon} className="myMenuIcon" />
                  </Link>
                </NavbarItem>
              ))}
            </div>
            {ThemeToggle({
              setTheme
            })}
          </div>
        </NavbarMenu>
      </Navbar>
    </header>
  );
};

export default Header;
