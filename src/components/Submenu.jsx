// import React, { useContext } from 'react';
// import { Context } from '../contexts/store';

import Detail from "./Detail";
import Cupset from "./Cupset";

import { useState } from "react";

const Submenu = ({menuDataSort}) => {
    const [clickData, setClickData] = useState();
    const subMenuList = menuDataSort.map((menu) => (
        <li className="depth02__list" key={menu.id}>
            <button type="button" onClick={ () => handleClick(menu) }>
                <div className="depth02__img">
                    <Cupset menuData={menu}/>
                </div>
                <dl className="depth02__info">
                    <dt>
                        <strong className="">{menu.name}</strong>
                        {
                            menu.temperature === "onlyIce" 
                            ? <span className="iced txt-n-b">ICED ONLY</span>
                            : menu.temperature === "onlyHot" && <span className="hot txt-n-b">HOT ONLY</span>
                        }
                    </dt>
                    <dd>{menu.price}원</dd>
                </dl>
            </button>
        </li>
    ));
    const handleClick = (menu) => {
        setClickData(menu);
    }

    return(
        <>
        <ul className="depth02">
            {subMenuList}
        </ul>
        <div className="layer">
            <div className="layer__inner">
                {
                    clickData && <Detail clickMenuData={clickData}/>
                }
                <button type="button" className="layer__close"><span className="ir-hidden">닫기</span></button>
            </div>
        </div>
        {/* <div>{context.name}</div> */}
        </>
    
    );
}

export default Submenu;