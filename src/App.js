import "./App.css";
import Reatc from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route exact path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
