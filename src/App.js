import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Sub from './pages/Sub';
import {Detail} from './components/Detail';
import {Error} from './pages/Error';

function App(){
    return(
        <div className="App">
            <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sub" element={<Sub />} />
				{/* <Route path="detail" element={<Detail />} /> */}
                <Route path="*" element={<Error />} />
			</Routes>
        </div>
    )
}

export default App;