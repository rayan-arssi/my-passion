import posterPhoto from '../images/mindly_project.webp';

export default function ProjectPoster({ project, large = false }) {
  if (project.comingSoon) {
    return (
      <div className={`pp pp--coming${large ? ' pp--large' : ''}`} aria-hidden="true">
        <span className="pp-coming-mark">*</span>
        <span className="pp-coming-label">COMING SOON</span>
        <span className="pp-coming-line" />
      </div>
    );
  }
  return (
    <div className={`pp pp--${project.variant}${large ? ' pp--large' : ''}`} aria-hidden="true">
      <img className="pp-photo" src={project.image ?? posterPhoto} alt="" />
      <span className="pp-overlay" />
    </div>
  );
}
