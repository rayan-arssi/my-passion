import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Globe from "./Globe";
import Portrait from "./Portrait";
import RotatingBadge from "./RotatingBadge";
import Line from "./Line";

const ease = [0.22, 1, 0.36, 1];

const STATEMENT = ["I DESIGN IT.", "I BUILD IT.", "I MAKE IT MOVE."];

const labels = [
	{ text: "DESIGN", cls: "hero-label--tl" },
	{ text: "DEVELOPMENT", cls: "hero-label--tr" },
	{ text: "3D", cls: "hero-label--bl" },
	{ text: "CREATIVE TECHNOLOGY", cls: "hero-label--br" },
];

export default function Hero() {
	const sectionRef = useRef(null);
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const smx = useSpring(mx, { stiffness: 55, damping: 18 });
	const smy = useSpring(my, { stiffness: 55, damping: 18 });

	const photoX = useTransform(smx, (v) => v * 34);
	const photoY = useTransform(smy, (v) => v * 26);

	const globeX = useTransform(smx, (v) => v * 70);
	const globeY = useTransform(smy, (v) => v * 46);
	const labelX = useTransform(smx, (v) => v * -24);
	const labelY = useTransform(smy, (v) => v * -18);

	const onMove = (e) => {
		const r = sectionRef.current.getBoundingClientRect();
		mx.set((e.clientX - r.left - r.width / 2) / (r.width / 2));
		my.set((e.clientY - r.top - r.height / 2) / (r.height / 2));
	};

	return (
		<section ref={sectionRef} className="hero" id="top" onMouseMove={onMove}>
			<div className="hero-grid" aria-hidden="true">
				<span />
				<span />
				<span />
			</div>

			<div className="hero-top">
				<div className="hero-mast">
					<motion.h1
						className="hero-name"
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.9, ease, delay: 0.15 }}
					>
						RAYAN ARSSI
					</motion.h1>
					<motion.p
						className="hero-subtitle"
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease, delay: 0.32 }}
					>
						DIGITAL DESIGNER <span className="hero-dot">·</span> WEB &amp;
						FRONTEND DEVELOPER
					</motion.p>
				</div>
				<motion.div
					className="hero-globe"
					style={{ x: globeX, y: globeY }}
					initial={{ opacity: 0, scale: 0.4, rotate: -90 }}
					animate={{ opacity: 1, scale: 1, rotate: 0 }}
					transition={{ duration: 1.1, ease, delay: 0.9 }}
				>
					<Globe size={92} />
				</motion.div>
			</div>

			<div className="hero-body">
				<div className="hero-statement">
					{STATEMENT.map((line, i) => (
						<Line key={line} text={line} index={i} />
					))}
				</div>

				<div className="hero-photo-shell">
					<motion.div
						className="hero-photo-wrap"
						style={{ x: photoX, y: photoY }}
						initial={{ opacity: 0, y: 60, rotate: -14 }}
						animate={{ opacity: 1, y: 0, rotate: -5 }}
						transition={{ duration: 1.1, ease, delay: 1.25 }}
					>
						<Portrait variant="hero" />
					</motion.div>
				</div>
			</div>

			<div className="hero-labels">
				{labels.map((l, i) => (
					<motion.span
						key={l.text}
						className={`hero-label ${l.cls}`}
						style={{ x: labelX, y: labelY }}
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 1.15 + i * 0.14, duration: 0.55, ease }}
					>
						<i className="hero-label-line" aria-hidden="true" />
						{l.text}
					</motion.span>
				))}
			</div>

			<motion.div
				className="hero-scroll"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.9, duration: 0.9 }}
			>
				<span>SCROLL TO EXPLORE</span>
				<svg
					className="hero-scroll-arrow"
					width="18"
					height="34"
					viewBox="0 0 18 34"
					fill="none"
					aria-hidden="true"
				>
					<path
						d="M9 1 L9 31 M2 24 L9 32 L16 24"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</motion.div>

			<motion.div
				className="hero-badge"
				initial={{ opacity: 0, rotate: -40 }}
				animate={{ opacity: 1, rotate: 0 }}
				transition={{ delay: 1.5, duration: 1, ease }}
			>
				<RotatingBadge size={112} />
			</motion.div>
		</section>
	);
}
