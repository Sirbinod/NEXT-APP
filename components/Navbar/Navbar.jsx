import React from "react";

const Navbar = () => {
  const menus = [
    {
      id: 1,
      name: "posts",
    },
    {
      id: 2,
      name: "albums",
    },
    {
      id: 3,
      name: "users",
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="logo">
          <h1 className="logo_title">THE WORLD</h1>
          {menus.map((menu) => {
            return (
              <div key={menu.id} className="menu">
                <h1 className="menu_item">{menu.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
