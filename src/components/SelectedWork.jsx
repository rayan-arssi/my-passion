import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getLenis } from "../lib/scroll";
import ProjectPoster from "./ProjectPoster";
import Reveal from "./Reveal";
import { projects } from "../data/projects";

const ease = [0.22, 1, 0.36, 1];

function WorkRow({ project, onOpen }) {
	const rowVariants = {
		hidden: { opacity: 0, y: 70 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease,
				staggerChildren: 0.07,
				delayChildren: 0.08,
			},
		},
		hover: { transition: { duration: 0.3 } },
	};

	const posterVariants = {
		hidden: { scale: 0.96, opacity: 0.6 },
		visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease } },
		hover: {
			scale: 1.06,
			rotate: -2,
			transition: { type: "spring", stiffness: 220, damping: 16 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 24 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
	};

	const extraVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: { opacity: 0, y: 10 },
		hover: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
	};

	const open = (e) => {
		e.stopPropagation();
		onOpen(project);
	};

	return (
		<motion.div
			className="work-row"
			data-cursor="VIEW"
			onClick={open}
			initial="hidden"
			whileInView="visible"
			whileHover="hover"
			viewport={{ once: true, margin: "-8% 0px" }}
			variants={rowVariants}
		>
			<motion.span className="work-index" variants={itemVariants}>
				{project.id}
			</motion.span>

			<motion.div className="work-poster" variants={posterVariants}>
				<ProjectPoster project={project} />
			</motion.div>

			<div className="work-info">
				<motion.h3 className="work-name" variants={itemVariants}>
					{project.name}
				</motion.h3>
				<motion.p className="work-cat" variants={itemVariants}>
					{project.category}
				</motion.p>
				<motion.p className="work-desc" variants={itemVariants}>
					{project.description}
				</motion.p>
				<motion.div className="work-tags" variants={itemVariants}>
					{project.stack.map((t, i) => (
						<span
							key={`${t}-${i}`}
							className="work-pill"
							style={{
								border: "0.5px solid #000",
								borderRadius: "999px",
								padding: "0.35rem 0.75rem",
								display: "inline-flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							{t}
						</span>
					))}
				</motion.div>
				<motion.div className="work-links" variants={itemVariants}>
					<a
						href={project.url}
						target="_blank"
						rel="noreferrer"
						onClick={(e) => e.stopPropagation()}
					>
						LIVE SITE ↗
					</a>
				</motion.div>
				<motion.div className="work-extra" variants={extraVariants}>
					<span>YEAR — {project.year}</span>
				</motion.div>
			</div>

			<motion.span className="work-arrow" variants={itemVariants}>
				↗
			</motion.span>
		</motion.div>
	);
}

function ProjectModal({ project, onClose }) {
	useEffect(() => {
		const lenis = getLenis();
		lenis?.stop();
		const onKey = (e) => e.key === "Escape" && onClose();
		window.addEventListener("keydown", onKey);
		return () => {
			lenis?.start();
			window.removeEventListener("keydown", onKey);
		};
	}, [onClose]);

	return (
		<motion.div
			className="modal"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.35 }}
			onClick={onClose}
		>
			<motion.div
				className="modal-card"
				onClick={(e) => e.stopPropagation()}
				initial={{ y: 90, opacity: 0, scale: 0.98 }}
				animate={{ y: 0, opacity: 1, scale: 1 }}
				exit={{ y: 60, opacity: 0, scale: 0.98 }}
				transition={{ duration: 0.55, ease }}
			>
				<button className="modal-close" data-cursor="CLOSE" onClick={onClose}>
					CLOSE ✕
				</button>

				<div className="modal-head">
					<span className="modal-index">{project.id}</span>
					<h3 className="modal-title">{project.name}</h3>
					<span className="modal-title-mark" aria-hidden="true">
						*
					</span>
				</div>

				<div className="modal-poster">
					<ProjectPoster project={project} large />
				</div>

				<div className="modal-meta">
					<div className="modal-metahead">
						<p className="modal-cat">CATEGORY — {project.category}</p>
						<div className="modal-stack">
							{project.stack.map((s, i) => (
								<span key={`${s}-${i}`} className="modal-pill">
									{s}
								</span>
							))}
						</div>
						<div className="modal-links">
							<a href={project.url} target="_blank" rel="noreferrer">
								LIVE SITE ↗
							</a>
						</div>
					</div>
					<p className="modal-desc">{project.description}</p>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default function SelectedWork() {
	const [active, setActive] = useState(null);
	return (
		<section className="section work" id="work">
			<div className="container">
				<header className="section-head">
					<Reveal>
						<h2 className="section-title">SELECTED WORK</h2>
					</Reveal>
					<Reveal delay={0.12}>
						<span className="handnote">things I designed + built</span>
					</Reveal>
				</header>

				<div className="work-list">
					{projects.map((p) => (
						<WorkRow key={p.id} project={p} onOpen={setActive} />
					))}
				</div>
			</div>

			<AnimatePresence>
				{active && (
					<ProjectModal project={active} onClose={() => setActive(null)} />
				)}
			</AnimatePresence>
		</section>
	);
}
