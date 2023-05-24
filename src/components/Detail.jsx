import { useState } from "react";
import Cupset from "./Cupset";

const Detail = ({clickMenuData}) => {
    const data = {
        "id" : 1,
        "name" : "coffee",
        "price" : "0",
        "temperature" : "all",
        "cup" : "icecup",
        "color" : "#ffffff",
        "cream" : 0,
        "teabag" : 0,
        "description" : "description",
        "imgSrc" : null
    };
    // const [defaultdata,defaultdataSet] = useState(data);
    return (
        <div className="info" datatype={clickMenuData.temperature}>
            <div className="info__img">
                <Cupset menuData={clickMenuData}/>
            </div>
            <div className="info__cont">
                <div className="info__value">
                    {
                        (() => {
                            switch (clickMenuData.temperature) {
                                case "all":
                                return <><span className="blt-hot">HOT</span><span className="blt-iced">ICED</span></> ;
                                case "onlyIce":
                                return <span className="blt-iced">ICED ONLY</span>;
                                case "onlyHot":
                                return <span className="blt-hot">HOT ONLY</span>;
                                default:
                                return null;
                            }
                        })() 
                    }
                    
                </div>
                <dl className="info__default">
                    <dt className="info__name txt-n-b">{clickMenuData.name}</dt>
                    <dd className="info__price">{clickMenuData.price}원</dd>
                </dl>
                {
                    clickMenuData.description !== null 
                    ? <div className="info__desc">{clickMenuData.description}</div>
                    : null
                }
            </div>
        </div>
    )
}

export default Detail;