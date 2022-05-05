import React from "react";
import styled from "styled-components";
import {
	InsertPhotoIcon,
	MusicVideoIcon,
	EventIcon,
	ArticleIcon,
	ThumbUpIcon,
	MoreHorizIcon,
	CommentIcon,
	ShareIcon,
	SendIcon,
} from "./Icon";
import PostModal from "./PostModal";
import { connect } from "react-redux";
import { getArticlesAPI } from "../actions";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
const Mainside = (props) => {
	const [showModal, setShowModal] = useState("close");

	useEffect(() => {
		props.getArticles();
	}, []);

	const handleClick = (e) => {
		e.preventDefault();

		if (e.target !== e.currentTarget) {
			return;
		}

		switch (showModal) {
			case "open":
				setShowModal("close");
				break;

			case "close":
				setShowModal("open");
				break;

			default:
				setShowModal("close");
				break;
		}
	};
	return (
		<Container>
			<ShareBox>
				<div>
					{props.user && props.user.photoURL ? (
						<img src={props.user.photoURL} />
					) : (
						<img src="/images/user.svg" />
					)}
					{/* <img src="/images/man.png" alt="" /> */}
					<button onClick={handleClick} disabled={props.loading ? true : false}>
						Start a posts
					</button>
				</div>

				<div>
					<button>
						<InsertPhotoIcon />
						<span>Photo</span>
					</button>

					<button>
						<MusicVideoIcon />
						<span>video</span>
					</button>
					<button>
						<EventIcon />

						<span>event</span>
					</button>

					<button>
						<ArticleIcon />
						<span>write artical</span>
					</button>
				</div>
			</ShareBox>
			<Content>
				{props.loading && <img src="\images\Spinner-1s-200px.svg" />}
				{props.articles.length > 0 &&
					props.articles.map((article, key) => (
						<Article key={key}>
							<SharedActor>
								<a>
									{article.actor.image ? (
										<img src={article.actor.image} alt="" />
									) : (
										<img src="/images/user.svg" alt="" />
									)}
									<div>
										<span>{article.actor.title}</span>
										<span>{article.actor.description}</span>
										<span>
											{article.actor.date.toDate().toLocaleDateString()}
										</span>
									</div>
								</a>

								<button>
									<MoreHorizIcon />
								</button>
							</SharedActor>

							<Description>{article.description}</Description>

							<SharedImage>
								<a>
									{!article.sharedImg && article.video ? (
										<div>
											<ReactPlayer width={"100%"} url={article.video} />
										</div>
									) : (
										article.sharedImg && <img src={article.sharedImg} alt="" />
									)}
								</a>
							</SharedImage>

							<SocialCount>
								<li>
									<button>
										<img
											src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
											alt=""
										/>
										<span>{}</span>
									</button>
								</li>
								<li>
									<a>{article.comments}</a>
								</li>
							</SocialCount>

							<SocialActions>
								<button>
									<ThumbUpIcon />
									<span>Like</span>
								</button>
								<button>
									<CommentIcon />
									<span>Comment</span>
								</button>
								<button>
									<ShareIcon />
									<span>Share</span>
								</button>
								<button>
									<SendIcon />
									<span>Send</span>
								</button>
							</SocialActions>
						</Article>
					))}
			</Content>
			<PostModal showModal={showModal} handleClick={handleClick} />
		</Container>
	);
};

const Container = styled.div`
	grid-area: main;
`;

const CommonBox = styled.div`
	text-align: center;
	overflow: hidden;
	margin-bottom: 8px;
	background-color: #fff;
	border-radius: 5px;
	position: relative;
	border: none;
	box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonBox)`
	display: flex;
	flex-direction: column;
	margin: 0 0 8px;
	color: #958b7b;
	div {
		button {
			outline: none;
			color: rgba(0, 0, 0, 0.6);
			font-size: 14px;
			line-height: 1.5;
			min-height: 48px;
			display: flex;
			align-items: center;
			border: none;
			background-color: transparent;
			font-weight: 600;
		}
		&:first-child {
			display: flex;
			align-items: center;
			padding: 8px 16px;
			img {
				width: 48px;
				border-radius: 50%;
				margin-right: 8px;
			}
			button {
				margin: 4px 0;
				flex-grow: 1;
				padding-left: 16px;
				border: 1px solid rgba(0, 0, 0, 0.15);
				border-radius: 35px;
				text-align: left;
			}
		}
		&:nth-child(2) {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			padding-bottom: 4px;
			button {
				img {
					margin: 0 4px 0 -2px;
				}
			}
		}
	}
`;

const Article = styled(CommonBox)`
	padding: 0;
	margin: 0 0 8px;
	overflow: visible;
`;

const SharedActor = styled.div`
	padding-right: 40px;
	flex-wrap: nowrap;
	padding: 12px 16px 0;
	margin-bottom: 8px;
	display: flex;
	align-items: center;
	a {
		margin-right: 12px;
		flex-grow: 1;
		overflow: hidden;
		display: flex;
		img {
			width: 48px;
			height: 48px;
			border-radius: 50%;
		}
		& > div {
			display: flex;
			flex-direction: column;
			flex-grow: 1;
			flex-basis: 0;
			margin-left: 8px;
			overflow: hidden;
			span {
				text-align: left;
				&:first-child {
					font-size: 14px;
					font-weight: 700;
					color: #000;
				}
				&:nth-child(n + 2) {
					font-size: 12px;
					color: rgba(0, 0, 0, 0.6);
				}
			}
		}
	}
	button {
		position: absolute;
		top: 0;
		right: 12px;
		border: none;
		outline: none;
		background: transparent;
	}
`;

const Description = styled.div`
	padding: 0 16px;
	overflow: hidden;
	font-size: 14px;
	text-align: left;
`;

const SharedImage = styled.div`
	margin: 8px 16px 0;
	background-color: #f9fafb;
	img {
		width: 100%;
		height: 100%;
	}
`;

const SocialCount = styled.ul`
	line-height: 1.3;
	display: flex;
	align-items: flex-start;
	overflow: auto;
	margin: 0 16px;
	padding: 8px 0;
	border-bottom: 1px solid #e9efdf;
	color: rgba(0, 0, 0, 0.6);
	list-style: none;
	li {
		margin-right: 5px;
		font-size: 12px;
		button {
			display: flex;
			border: none;
			color: rgba(0, 0, 0, 0.6);
			background: transparent;
			span {
				padding-left: 5px;
			}
		}
	}
`;

const SocialActions = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 4px 12px;
	min-height: 40px;
	padding-bottom: 5px;
	button {
		display: inline-flex;
		align-items: center;
		padding: 8px;
		border: none;
		background: transparent;
		span {
			margin-left: 4px;
			color: rgba(0, 0, 0, 0.6);
			font-size: 14px;
		}
	}
	button.active {
		span {
			color: #0a66c2;
			font-weight: 600;
		}
		svg {
			fill: #0a66c2;
		}
	}
`;

const Content = styled.div`
	text-align: center;
	& > img {
		width: 30px;
	}
`;

const mapStateToProps = (state) => {
	return {
		loading: state.articalState.loading,
		user: state.userState.user,
		articles: state.articalState.articles,
	};
};

const mapDispatchToProps = (dispatch) => ({
	getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mainside);
