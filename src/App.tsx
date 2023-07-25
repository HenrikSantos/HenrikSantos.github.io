import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {

	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
}

export default App;
