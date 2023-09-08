import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi";
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const categoryList = [
    ...new Set(
        Menu.map((menudata) => {
            return menudata.category;
        })
    ),
    "All",
];

const Restaurants = () => {

    const [menu, setMenu] = useState(Menu);
    const [catList, setCatList] = useState(categoryList);


    const filterItem = (category) => {
        if (category === "All") {
            setMenu(Menu);
            return;
        }
        const updatedList = Menu.filter((menudata) => {
            return menudata.category === category;
        });
        setMenu(updatedList);
    };

    return (
        <>
            <Navbar filterItem={filterItem} catList={catList} />

            <MenuCard menu={menu} />
        </>
    );
};

export default Restaurants;