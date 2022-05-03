import "./App.css";
import Reatc, { useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { getUserAuth } from './actions'
import { connect } from "react-redux";
function App(props) {
	useEffect(() => {
		props.getUserAuth();
	}, []);
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<Login />} />
					<Route path="/home" element={[<Header />, <Home />]} />
				</Routes>
			</Router>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {};
}

const mapDispatchToProps = (dispatch) => ({
	getUserAuth: () => dispatch(getUserAuth())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);  