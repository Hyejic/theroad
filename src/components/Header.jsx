
import { Link } from "react-router-dom";

const Header = (props) => {
    return(
        <header className={props.page === "home" ? "main" : ""}>
			{props.page === "home" ? <h1 className="ir-hidden">{props.page}</h1> : <h1>{props.page}</h1>}
			<nav className="nav">
				{props.page === "home" ?
					<>
					<Link to="/sub" className="link_sub"><span>NEW</span></Link>
					<Link to="/sub" className="link_sub"><span>MENU</span></Link>
					</>
					: 
					<Link to="/" className="link_main"><span className="ir-hidden">HOME</span></Link>
				}
			</nav>
		</header>
    );
}
export default Header;