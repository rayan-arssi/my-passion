import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Line({ text, index }) {
	return (
		<motion.div
			className="hero-line"
			initial="hidden"
			animate="visible"
			variants={{
				hidden: {},
				visible: {
					transition: { staggerChildren: 0.03, delayChildren: 0.55 + index * 0.22 },
				},
			}}
		>
			<span className="hero-line-inner" aria-label={text}>
				{text.split("").map((char, i) =>
					char === " " ? (
						<span key={i} className="hero-char hero-char--space" />
					) : (
						<motion.span
							key={i}
							className="hero-char"
							variants={{
								hidden: { y: "115%", rotate: 4 },
								visible: { y: "0%", rotate: 0, transition: { duration: 0.65, ease } },
							}}
						>
							{char}
						</motion.span>
					)
				)}
			</span>
		</motion.div>
	);
}
