import React from "react";
import "../styles/Leftside.css";
import styled from "styled-components";

const Leftside = () => {
	return (
		<div className="leftSide__conatiner">
			<div className="left__artcard">
				<div className="left__userInfo">
					<CardBackground />
					<a>
						<Photo />
						<div className="left__link">Welcome ,there</div>
					</a>

					<a>
						<div className="addPhotoText">Add A photo</div>
					</a>
				</div>

				<div className="left__widget">
					<a>
						<div>
							<span>Connections</span>
							<span> Grow Your Network</span>
						</div>
						<img src="/images/widget-icon.svg" alt="widget-icon" />
					</a>
				</div>

				<a className="home__item">
					<span>
						<img src="images/item-icon.svg" />
						My Items
					</span>
				</a>
			</div>

			<div className="community__card left__artcard">
				<a>
					<span>Group</span>
				</a>

				<a>
					<span>
						Events
						<img src="/images/plus-icon.svg" alt="" />
					</span>
				</a>

				<a>
					<span>Follow Hashtag</span>
				</a>

				<a>
					<span>Discover More</span>
				</a>
			</div>
		</div>
	);
};

const CardBackground = styled.div`
	background: url("/images/card-bg.svg");
	background-position: center;
	background-size: 462px;
	height: 54px;
	margin: -12px -12px 0;
`;

const Photo = styled.div`
	background-image: url("/images/photo.svg");
	width: 72px;
	height: 72px;
	box-sizing: border-box;
	background-clip: content-box;
	background-color: white;
	background-position: center;
	background-repeat: no-repeat;
	background-size: 60%;
	border: 2px solid white;
	margin: -38px auto 12px;
	border-radius: 50%;
`;
export default Leftside;
