import React, { useState, useEffect } from 'react';
import Aboutus from './Components/Aboutus';
import Welcome from './Components/Welcome';
import Categories from './Components/Categories';
import Rooms from './Components/Diningroom';
import Diningroom from './Components/Rooms';
import Contact from './Components/Contact';
import Shoppingcart from './Components/Shoppingcart';
import Navigation from './Components/Navigation';
import SectionTitle from './Components/Sectiontitle';

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
	<div className="bg-white dark:bg-slate-900 min-h-screen font-inter ">
		<div className="max-w-5xl w-11/12 mx-auto">
		<Navigation />
		<Welcome />
		<Categories />
		<Aboutus />
		<Rooms />
		<Diningroom />
		<Contact />
		<Shoppingcart />
		<SectionTitle />

      </div>
	  </div>

		</>
	);
}

export default App;

