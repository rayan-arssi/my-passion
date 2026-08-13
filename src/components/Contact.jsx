import { useState } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal";
import SplitWords from "./SplitWords";
import Globe from "./Globe";
import { BrushSwoosh } from "./Brush";
import { EMAILJS, CONTACT_EMAIL } from "../lib/email";

const head = ["LET'S MAKE", "SOMETHING", "GREAT."];

const INITIAL = { name: "", email: "", message: "" };

export default function Contact() {
	const [form, setForm] = useState(INITIAL);
	const [status, setStatus] = useState("idle");

	const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

	const onSubmit = async (e) => {
		e.preventDefault();
		setStatus("sending");
		try {
			await emailjs.send(
				EMAILJS.serviceId,
				EMAILJS.templateId,
				{
					from_name: form.name,
					from_email: form.email,
					message: form.message,
					to_email: CONTACT_EMAIL,
				},
				EMAILJS.publicKey,
			);
			setStatus("sent");
			setForm(INITIAL);
		} catch (err) {
			console.error(err);
			setStatus("error");
		}
	};

	return (
		<section className="section contact" id="contact">
			<div className="contact-top">
				<Reveal delay={0.1}>
					<span className="contact-kicker">
						HAVE AN IDEA, PROJECT OR OPPORTUNITY?
					</span>
				</Reveal>
				<div className="contact-globe">
					<Globe size={72} />
				</div>
			</div>

			<Reveal delay={0.2} className="contact-formwrap">
				<form className="contact-form" onSubmit={onSubmit}>
					<div className="contact-form-row">
						<label className="contact-field">
							<span className="contact-field-label">Your name</span>
							<input
								className="contact-input"
								type="text"
								name="name"
								required
								placeholder="Name"
								value={form.name}
								onChange={set("name")}
							/>
						</label>

						<label className="contact-field">
							<span className="contact-field-label">Your email</span>
							<input
								className="contact-input"
								type="email"
								name="email"
								required
								placeholder="email"
								value={form.email}
								onChange={set("email")}
							/>
						</label>
					</div>

					<label className="contact-field">
						<span className="contact-field-label">Your message</span>
						<textarea
							className="contact-input contact-input--area"
							name="message"
							rows={5}
							required
							placeholder="Tell me about your project…"
							value={form.message}
							onChange={set("message")}
						/>
					</label>

					<div className="contact-form-foot">
						<button
							className="btn btn--solid contact-submit"
							type="submit"
							disabled={status === "sending"}
							data-cursor="SEND"
						>
							{status === "sending" ? "SENDING…" : "SEND MESSAGE"}
						</button>
						<span className={`contact-status contact-status--${status}`}>
							{status === "sent"
								? "✓ Message sent, I'll get back to you soon."
								: status === "error"
									? "Oops, something went wrong. Try again or email me directly."
									: ""}
						</span>
					</div>
				</form>
			</Reveal>

			<Reveal delay={0.15} className="contact-email">
				<a
					href={`mailto:${CONTACT_EMAIL}`}
					className="contact-mail"
					data-cursor="WRITE"
				>
					{CONTACT_EMAIL}
				</a>
			</Reveal>

			<div className="contact-socials">
				<Reveal delay={0.05}>
					<a
						href="https://www.linkedin.com/in/rayan-arssi-3a189a41a"
						target="_blank"
						rel="noreferrer"
						data-cursor="LINK"
					>
						LINKEDIN ↗
					</a>
				</Reveal>
				<span className="contact-x">×</span>
			</div>
		</section>
	);
}
