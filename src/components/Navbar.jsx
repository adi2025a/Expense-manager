import React from "react";

export let selectedCategory='';

const Navbar = () => {

    const handleClick=((e)=>{
        selectedCategory = e.target.getAttribute('data-value')
    })

  return (
    <div className="flex gap-24 text-white">
      <img className="h-[50px]" src="src/assets/logo.png" />
      <img className="h-[40px]" src="src/assets/menu.png" />
      
      <ul className="flex gap-5 justify-center items-center">
        <li onClick={handleClick} data-value="shopping" className="cursor-pointer">Shopping</li>
        <li onClick={handleClick} data-value="food" className="cursor-pointer">Food</li>
        <li onClick={handleClick} data-value="travel" className="cursor-pointer">Travel</li>
        <li onClick={handleClick} data-value="rent" className="cursor-pointer">Rent</li>
      </ul>
    </div>
  );
};

export default Navbar;