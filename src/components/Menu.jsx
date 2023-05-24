import React, { useState, useEffect } from 'react';
import menuData from "../services/dataAll.json";
import Submenu from '../components/Submenu.jsx';

const Menu = () => {
    const depth01 = Object.keys(menuData);
    const [isActive, setActive] = useState(depth01[0]);

    const ActiveMenu = (e) => {
        const targetTab  = document.querySelector('.depth01');
        const targetTabList  = document.querySelectorAll('.depth01__list');
        let categoryTabWHarf = targetTab.clientWidth / 2;
        let categoryTabW = 0;
        let targetLeft = 0;
        let selectTargetPos = 0;
        let movePos;

        // useState 
        setActive(e.target.outerText); // return
        
        // tab total width
        targetTabList.forEach((menu) => {
            const menuW = menu.clientWidth;
            categoryTabW += menuW
        }); 
        targetLeft = e.target.offsetLeft;
        selectTargetPos = targetLeft + (e.target.clientWidth / 2);
        if (selectTargetPos <= categoryTabWHarf) {
            movePos = 0;
        } else if (categoryTabW - selectTargetPos <= categoryTabWHarf) { 
            movePos = categoryTabW - targetTab.clientWidth;
        } else {
            movePos = selectTargetPos - categoryTabWHarf;
        }
        targetTab.scroll({ left: movePos, behavior: 'smooth' })
    }
    
    useEffect(() => {
        
	}, []);

    const menuList = depth01.map((menu) => {
        return(
            <li className="depth01__list" key={ menu }>
                <button type="button" 
                    data-type={ menu }
                    onClick={ ActiveMenu } 
                    className={ menu === isActive ? "active" : ""}>
                    { menu }
                </button>
            </li>
        );
    });
    return(
        <>
        <div className="depth01">
            <ul className="depth01__wrap">
                { menuList }
            </ul>
        </div>
        <Submenu menuDataSort={menuData[isActive]}/>
        </>
    );
}

export default Menu;