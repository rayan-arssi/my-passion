import mindlyImage from "../images/mindly_project.png";
import shiftImage from "../images/shift_project.png";
import sorryboxImage from "../images/sorrybox_project.png";

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
		id: "03",
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
		id: "04",
		name: "LUME",
		category: "Motion & Branding",
		description: "A looping visual identity for a fictional music festival.",
		year: "2024",
		stack: ["After Effects", "Illustrator", "WebGL"],

		url: "https://example.com",
		variant: 3,
	},
];
