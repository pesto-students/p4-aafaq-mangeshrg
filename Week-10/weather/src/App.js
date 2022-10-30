import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	
	return (
		<BrowserRouter>
			<Toaster />
			<Header/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact-us" element={<Contact />} />
			</Routes>
			<Footer/>
		</BrowserRouter>
	)
}

export default App;
