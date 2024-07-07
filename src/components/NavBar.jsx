import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = [
    {
      id: 1,
      link: '/',
      name: "home"
    },
    {
      id: 2,
      link: '/movie',
      name: "All Movies"
    },
    {
      id: 3,
      link: '/anime',
      name: "anime"
    },
    {
      id: 4,
      link: '/upcomming',
      name: "Upcomming"
    },
    {
      id: 5,
      link: '/subscription',
      name: "Subscription"
    }
  ];

  const navlink = ({isActive})=>{
    return {
      textDecoration: isActive ? 'underline' : 'none',
      color: isActive ? 'white' : 'gray'
    }
  }

  return (
    <div className="flex justify-between items-center w-full h-28 bg-black  ">
      <div>
        <h1 className="font-signature text-4xl font-bold text-white underline ">
          FLex Movies
        </h1>
      </div>
      <ul className="text-white flex justify-center items-center h-full">
        {links.map(({ id, name,link }) => (
            <NavLink style={navlink} to={link} >
          <li 
            key={id}
            className="px-4 cursor-pointer capitalize py-6 font-bold hover:scale-125 duration-200 ">
            {name}
          </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
