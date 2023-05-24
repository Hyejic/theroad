import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/reset.scss';
import './styles/common.scss';
import './styles/contents.scss';
import Store from './contexts/store';
import Home from './pages/Home';
import Sub from './pages/Sub';
import { Error } from './pages/Error';
import './utils/common.js';
import './utils/motion.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Store>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="sub" element={<Sub />} />
				{/* <Route path="detail" element={<Detail />} /> */}
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	</Store>
);
