import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './styles/reset.scss';
import './styles/common.scss';
import './styles/contents.scss';
import Home from './pages/Home.jsx';
import Sub from './pages/Sub.jsx';
import Detail from './components/Detail.jsx';
import Store from './contexts/store';
import './utils/common.js';
import './utils/motion.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Store>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="sub" element={<Sub />} />
				{/* <Route path="detail" element={<Detail />} /> */}
			</Routes>
		</BrowserRouter>
	</Store>
);
