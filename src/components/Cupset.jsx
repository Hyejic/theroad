const Cupset = (setData) => {
    return (
        setData.menuData.imgSrc !== null
            ? <img src={`${process.env.PUBLIC_URL}/assets/img/menu/${setData.menuData.imgSrc}`} alt={setData.menuData.name} /> 
            : (() => {
                switch (setData.menuData.cup) {
                    case "icecup":
                    return (
                            <div className="none-img">
                                <div className="cup icecup"></div>
                                <span className="ir-hidden">ice cup</span>
                                <div className="beverage" style={{backgroundColor: setData.menuData.color}}></div>
                            </div>
                        )
                    case "teacup":
                        return (
                            <div className="none-img">
                                <div className="cup teacup"></div>
                                <span className="ir-hidden">tea cup</span>
                            </div>
                        )
                    case "lattecup":
                        return (
                            <div className="none-img">
                                <div className="cup lattecup"></div>
                                <span className="ir-hidden">latte cup</span>
                            </div>
                        )
                    default:
                    return null;
                }
            })() 
    )
}

export default Cupset;