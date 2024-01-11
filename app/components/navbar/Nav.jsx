import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <h1
        style={{
          color: "#000",
          fontSize: 45,
          fontWeight: 400,
          marginTop: 110,
          marginLeft: 140,
          marginBottom: 50,
        }}
      >
        CRYPTO LIST
      </h1>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: 90,
          marginBottom: 60,
          borderBottom: "1px solid #d9d9d9",
          width: "915px",
          marginLeft: 80,
        }}
      >
        <li>
          <Link
            style={{
              color: "#000",
              fontSize: 30,
              fontWeight: 400,
              textDecoration: "none",
            }}
            href="/dashboard/list/giants"
          >
            Giants
          </Link>
        </li>
        <li>
          <Link
            style={{
              color: "#000",
              fontSize: 30,
              fontWeight: 400,
              textDecoration: "none",
            }}
            href="/dashboard/list/altcoins"
          >
            Altcoins
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
