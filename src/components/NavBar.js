import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navbarList = links.map((link) =>  {
    return <a key={link} href={`#${link}`}>{link}</a>
   })
  return (
  <nav>
    {navbarList}
  </nav>
  );
}

export default NavBar;
