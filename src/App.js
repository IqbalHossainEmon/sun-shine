import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./components/Context/AuthProvider";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Main/Home";
import Login from "./components/Login/Login/Login";
import Registrantion from "./components/Login/Registration/Registrantion";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter className='App.css'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/registration' element={<Registrantion />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
