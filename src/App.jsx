import React, { useState, useEffect } from 'react';
import Aboutus from './Components/Aboutus';
import Welcome from './Components/Welcome';
import Categories from './Components/Categories';
import Rooms from './Components/Rooms';
import Diningroom from './Components/Diningroom';
import Contact from './Components/Contact';
import Shoppingcart from './Components/Shoppingcart';
import Navigation from './Components/Navigation';

function App() {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = (e) => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect((e) => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	

	return (
    <>
    <button
      type="button"
      onClick={handleThemeSwitch}
      className="fixed z-2 top-1 bg-indigo-500 text-lg p-1 rounded-md"
    >
      {theme === 'dark' ? '🌚' : '🌝'}
    </button>
      <div className="App">
		<Navigation />
		<Welcome />
		<Categories />
		<Aboutus />
		<Rooms />
		<Diningroom />
		<Contact />
		<Shoppingcart />
      </div>
		</>
	);
}

export default App;

