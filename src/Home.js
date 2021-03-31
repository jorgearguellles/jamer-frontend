import "./Home.css";

import Header from "./components/Header/Header.js";
import MainSection from "./components/MainSection/MainSection.js";
import SecondarySection from "./components/SecondarySection/SecondarySection.js";
import LastSection from "./components/LastSection/LastSection.js";
import Footer from "./components/Footer/Footer.js";

function Home() {
	return (
		<div className="App">
			<Header />
			<MainSection />
			<SecondarySection />
			<LastSection />
			<Footer />
		</div>
	);
}

export default Home;
