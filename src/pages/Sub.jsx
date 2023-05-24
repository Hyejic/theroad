import Detail from "../components/Detail.jsx";
import Header from "../components/Header.jsx";
import Menu from '../components/Menu.jsx';
// import Submenu from '../components/Submenu.jsx';

const Sub = () => {
    return (
		<>
		<Header page="MENU"/>
		<div className="menu-board inner">
			<Menu />
		</div>
		</>
    );
}
  
export default Sub;
