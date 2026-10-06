import mindlyImage from "../images/mindly_project.webp";
import shiftImage from "../images/shift_project.webp";
import sorryboxImage from "../images/sorrybox_project.webp";
import footleImage from "../images/footle_project.png";
import sushiImage from "../images/sushi_project.png";
import azyoImage from "../images/azyo_project.png";

export const projects = [
	{
		id: "01",
		name: "Mindly",
		category: "Web Design/Development",
		description:
			"To help students manage stress, improve concentration, and stay motivated, the platform provides a range of supportive features, including daily check-ins, practical exercises, expert-led videos, and a community forum.",
		year: "2026",
		stack: ["React", "Vite.js", "Supabase", "Figma"],
		image: mindlyImage,
		url: "https://mindly-9stk.onrender.com/",
		variant: 0,
	},
	{
		id: "02",
		name: "AZYO",
		category: " Product Design/Webdevelopment",
		description:
			"AZYO is a design-object brand created to organize and enhance modern workspaces. The brand offers accessories such as phone stands, mouse holders, cup holders, laptop stands, and headphone stands, combining a modern, minimalist, and recognizable aesthetic. The project covers the complete brand identity, product design, visual content, and packaging, as well as the creation of an immersive website showcasing the collection.",
		year: "2026",
		stack: ["Branding", "Figma", "Illustrator", "React"],
		image: azyoImage,
		url: "",
		variant: 4,
	},
	{
		id: "03",
		name: "SHIFT Festival",
		category: "UI/UX & Web Design",
		description:
			"SHIFT FESTIVAL is the graduation expo of Multimedia & Creative Technology at Erasmushogeschool Brussel. Discover innovative XR, 3D, and interactive projects tackling meaningful themes. Don’t miss the live show and awards!",
		year: "2026",
		stack: ["Figma", "Illustrator", "Photoshop"],
		image: shiftImage,
		url: "https://www.shiftfestival.be/#experience",
		variant: 1,
	},
	{
		id: "04",
		name: "Sorrybox",
		category: "Web Design/Development",
		description:
			"Saying sorry can sometimes be difficult, and that’s understandable. With SorryBox, you get tools that can help you. With the SorryBot, you can find the right words and apologize in a fun and smart way.",
		year: "2024",
		stack: ["HTML/CSS", "JavaScript", "AI/Chatbot"],
		image: sorryboxImage,
		url: "https://example.com",
		variant: 2,
	},
	{
		id: "05",
		name: "Footle",
		category: "Web Development",
		description:
			"Footle is a football guessing game where you identify a player using progressively revealed clues. The fewer clues you need, the more points you earn, with daily challenges, streaks, stats, and leaderboards keeping you coming back.",
		year: "2026",
		stack: ["React", "TypeScript", "Framer Motion", "API"],
		image: footleImage,
		url: "https://footle-vu9r.onrender.com",
		variant: 3,
	},
	{
		id: "06",
		name: "So Sushi",
		category: "Web Design/Development",
		description:
			"So Sushi is a group of six hand-made sushi and pokebowl restaurants in Belgium. The website presents the brand story, the restaurants, the menu and the B2B offer.",
		year: "2026",
		stack: ["Web Design", "UI/UX", "Development"],
		image: sushiImage,
		url: "https://so-sushi.be/fr",
		variant: 0,
	},
];
