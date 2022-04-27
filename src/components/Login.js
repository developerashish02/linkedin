import React from "react";
import "../styles/Login.css";

const Login = () => {
	return (
		<div className="login__container">
			<div className="login__nav">
				<a href="/">
					<img src="/images/login-logo.svg" alt="logo" />
				</a>

				<div>
					<a className="login__join">Join now </a>
					<a className="login__signUp"> Sign In</a>
				</div>
			</div>

			<section className="login__section">
				<div className="login__hero">
					<h1>welcome to your professional community</h1>

					<img src="/images/login-hero.svg" alt="logo hero image" />
				</div>

				<div className="login__form">
					<button className="login__google">
						<img src="/images/google.svg" alt="" /> sign in with google
					</button>
				</div>
			</section>
		</div>
	);
};

export default Login;
