import React, { useState } from "react";
import { GiKnifeFork } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navi = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navi(`/search/${search}`);
  };
  return (
    <div className="flex justify-around mb-5">
      <div className="flex-1">
        <Link to={"/"}>
          <GiKnifeFork className="text-4xl" />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
