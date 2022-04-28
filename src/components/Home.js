import React from "react";
import "../styles/Home.css";
import Leftside from "./Leftside";
import Rightside from "./Rightside";
import Mainside from "./Mainside";

const Home = () => {
	return (
		<div className="home__container">
			<div className="home__content">
				<section className="home__section">
					<a>
						<h5>Hiring in a hyrry? - </h5>
					</a>
					<p>
						Find talented pros in record time with Upwork and keep business
						Moving
					</p>
				</section>

				{/* layout */}
				<section className="home__layout">
					{<Leftside />}
					{<Mainside />}
					{<Rightside />}
				</section>
			</div>
		</div>
	);
};

export default Home;
