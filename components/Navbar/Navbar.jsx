import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
          <h1 className="logo_title">THE WORLD</h1>
          <Link href="/User">
            <div className="menu">
              <h1 className="menu_item">User</h1>
            </div>
          </Link>
          <div className="menu">
            <h1 className="menu_item">Post</h1>
          </div>
          <div className="menu">
            <h1 className="menu_item">Album</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
