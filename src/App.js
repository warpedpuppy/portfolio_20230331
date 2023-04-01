
import './App.scss';
import Home from './pages/Home';
import CV from './pages/CV';
import './animations/animations.scss';
import { useState } from 'react';
import Logo from './components/Logo';
import Contact from './pages/Contact';
import FunStuff from './pages/fun-stuff/FunStuff';
function App() {
	const [page, setPage] = useState('home');
  return (
    <div className="App">
		{
			page !== 'home' && <Logo />
		}
		{
			page === 'home' && <Home setPage={setPage} />
		}
		{
			page === 'CV' && <CV setPage={setPage}  />
		}
		{
			page === 'contact' && <Contact setPage={setPage}  />
		}
			{
			page === 'fun-stuff' && <FunStuff setPage={setPage}  />
		}
    </div>
  );
}

export default App;
