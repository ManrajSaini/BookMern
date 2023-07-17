import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logoBook.png";

import { useState } from "react";
import { useEffect } from "react";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../routes/login/firebase";

function Header() {

  const [user, setUser] = useState(null);

    const logOut = async () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                window.location.href = "/blogs";
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getUser = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    };

    useEffect(() => {
        getUser();
    }, []);

  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="ReactJs" /> Manraj Book Store
      </Link>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/about">About</NavLink>
        {user ? (
                    <NavLink to="/login" onClick={logOut}>LogOut</NavLink>
                ) : (
                    <NavLink to="/login">LogIn</NavLink>
                )
        }
        
      </nav>
    </header>
  );
}

export default Header;
