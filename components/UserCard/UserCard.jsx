import React from "react";

const UserCard = () => {
  const users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
  ];
  return (
    <div>
      {users.map((user) => {
        return (
          <div className="card ">
            <div className="card-fist">
              <h1 className="name">{user.name}</h1>
              <div className="basic-info">
                <h1 className="basic-info-tit">UserName: </h1>
                <h1 className="basic-info-titl">{user.username}</h1>
              </div>
              <div className="basic-info">
                <h1 className="basic-info-tit">Email: </h1>
                <h1 className="basic-info-titl">{user.email}</h1>
              </div>
              <div className="basic-info">
                <h1 className="basic-info-tit">Phone: </h1>
                <h1 className="basic-info-titl">{user.phone}</h1>
              </div>
              <div className="basic-info">
                <h1 className="basic-info-tit">Website: </h1>
                <h1 className="basic-info-titl">{user.website}</h1>
              </div>
            </div>
            <div className="card-fist">
              <h1 className="name">{user.name}</h1>
              <div className="basic-info">
                <h1 className="basic-info-tit">UserName: </h1>
                <h1 className="basic-info-titl">{user.username}</h1>
              </div>
              <div className="basic-info">
                <h1 className="basic-info-tit">Email: </h1>
                <h1 className="basic-info-titl">{user.email}</h1>
              </div>
              <div className="basic-info">
                <h1 className="basic-info-tit">Phone: </h1>
                <h1 className="basic-info-titl">{user.phone}</h1>
              </div>
              <div className="basic-info">
                <h1 className="basic-info-tit">Website: </h1>
                <h1 className="basic-info-titl">{user.website}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserCard;
