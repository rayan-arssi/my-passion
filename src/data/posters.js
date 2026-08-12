import sorryboxPoster from "../images/posters/sorrybox_poster.webp";
import sushi1Poster from "../images/posters/sushi1_poster.webp";
import sushi2Poster from "../images/posters/sushi2_poster.webp";
import footPoster from "../images/posters/foot_poster.webp";
import f50Poster from "../images/posters/f50_post.webp";
import iphonePoster from "../images/posters/iphone_post.webp";
import mePoster from "../images/posters/me_post.webp";

export const posters = [
	{
		id: "P01",
		tag: "SORRYBOX",
		variant: 0,
		image: sorryboxPoster,
		aspect: 1134 / 1600,
	},
	{
		id: "P02",
		tag: "14 FEBRUARY",
		variant: 1,
		image: sushi1Poster,
		aspect: 632 / 896,
	},
	{
		id: "P03",
		tag: "F50 POST",
		variant: 0,
		image: f50Poster,
		aspect: 1,
	},
	{
		id: "P04",
		tag: "IPHONE 16 POST",
		variant: 0,
		image: iphonePoster,
		aspect: 1,
	},

	{
		id: "P06",
		tag: "SO SUSHI",
		variant: 2,
		image: sushi2Poster,
		aspect: 626 / 896,
	},

	{
		id: "P07",
		tag: "FOOTBALL",
		variant: 3,
		image: footPoster,
		aspect: 1131 / 1600,
	},
	{
		id: "P08",
		tag: "ME ",
		variant: 0,
		image: mePoster,
		aspect: 4000 / 4000,
		span: 2,
	},
];
