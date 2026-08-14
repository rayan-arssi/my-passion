import sorryboxPoster from "../images/posters/sorrybox_poster.webp";
import sushi1Poster from "../images/posters/sushi1_poster.webp";
import sushi2Poster from "../images/posters/sushi2_poster.webp";
import footPoster from "../images/posters/foot_poster.webp";
import f50Poster from "../images/posters/f50_post.webp";
import iphonePoster from "../images/posters/iphone_post.webp";
import mePoster from "../images/posters/me_post.webp";
import barbiePoster from "../images/posters/barbie_poster.png";
import kenjiPoster from "../images/posters/kenji_post.png";
import vibePoster from "../images/posters/vibe_post.png";
import shiftPoster from "../images/posters/shift_poster.png";
import yellowPoster from "../images/posters/yellow_post.png";
import magazinePoster from "../images/posters/magazine_post.png";

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
		tag: "KENJI",
		variant: 0,
		image: kenjiPoster,
		aspect: 1254 / 1254,
	},
	{
		id: "P05",
		tag: "SO SUSHI",
		variant: 2,
		image: sushi2Poster,
		aspect: 626 / 896,
	},

	{
		id: "P06",
		tag: "FOOTBALL",
		variant: 3,
		image: footPoster,
		aspect: 1131 / 1600,
	},
	{
		id: "P07",
		tag: "ME ",
		variant: 0,
		image: mePoster,
		aspect: 4000 / 4000,
		span: 2,
	},
	{
		id: "P08",
		tag: "BIRTHDAY GIFT",
		variant: 0,
		image: barbiePoster,
		aspect: 1086 / 1448,
		marginTop: -70,
	},
	{
		id: "P09",
		tag: "SHIFT",
		variant: 0,
		image: shiftPoster,
		aspect: 595 / 843,
		marginTop: -70,
	},
	{
		id: "P10",
		tag: "IPHONE 16 POST",
		variant: 0,
		image: iphonePoster,
		aspect: 1,
	},
	{
		id: "P11",
		tag: "MAGAZINE",
		variant: 0,
		image: magazinePoster,
		aspect: 1080 / 1032,
	},
	{
		id: "P12",
		tag: "MOODBOARD",
		variant: 0,
		image: vibePoster,
		aspect: 842 / 596,
		marginTop: -30,
	},
	{
		id: "P13",
		tag: "MOODBOARD 2",
		variant: 0,
		image: yellowPoster,
		aspect: 1119 / 789,
	},
];
