import React from "react";
import "../styles/Header.css";

const Header = () => {
	return (
		<div className="heade__container">
			<div className="header__content">
				<span className="header__logo">
					<a href="/home">
						<img src="/images/home-logo.svg" alt="" />
					</a>
				</span>

				<div className="header__search">
					<div>
						<input type="text" placeholder="Search" />
					</div>

					<div className="header__searchIcon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							data-supported-dps="16x16"
							fill="currentColor"
							width="16"
							height="16"
							focusable="false"
						>
							<path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
						</svg>
					</div>
				</div>

				<div className="header__nav">
					<ul className="header__navListWrap">
						<li className=" header__navList  header__active">
							<a>
								<img src="/images/nav-home.svg" alt="home-icon" />
								<span>Home</span>
							</a>
						</li>

						<li className=" header__navList">
							<a>
								<img src="/images/nav-network.svg" alt="network-icon" />
								<span>Network</span>
							</a>
						</li>

						<li className=" header__navList">
							<a>
								<img src="/images/nav-jobs.svg" alt="home-icon" />
								<span>Jobs</span>
							</a>
						</li>

						<li className=" header__navList">
							<a>
								<img src="/images/nav-messaging.svg" alt="home-icon" />
								<span>Messaging</span>
							</a>
						</li>

						<li className=" header__navList">
							<a>
								<img src="/images/nav-notifications.svg" alt="home-icon" />
								<span>Notifications</span>
							</a>
						</li>

						<div className="header__navList header__user">
							<a>
								<img src="/images/user.svg" alt="" />
								<span>Me</span>
								<img src="/images/down-icon.svg" alt="" />
							</a>

							<div className="header__signOut">
								<a>Sign Out</a>
							</div>
						</div>
						<div className="header__navList header__work">
							<a>
								<img src="/images/nav-work.svg" alt="" />
								<span>Work</span>
								<img src="/images/down-icon.svg" alt="" />
							</a>
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
