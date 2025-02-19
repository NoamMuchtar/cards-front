import { FunctionComponent, useEffect, useState } from "react";
import { decodeToken } from "../services/tokenService";
import { getUserById } from "../services/userService";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const [user, setUser] = useState<any>(null);

  let token: any = sessionStorage.getItem("token");

  let decodedToken: any = token ? decodeToken(token) : null;

  useEffect(() => {
    getUserById(decodedToken._id)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }),
    [];

  console.log(user);

  let capitalLetter = (str: string) => {
    return str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : "";
  };

  const logout = () => {
    sessionStorage.removeItem("token");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Card Project
        </a>
      </nav>
    </>
  );
};

export default Header;
