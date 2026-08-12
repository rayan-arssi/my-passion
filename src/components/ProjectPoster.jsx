import posterPhoto from '../images/mindly_project.png';

export default function ProjectPoster({ project, large = false }) {
  return (
    <div className={`pp pp--${project.variant}${large ? ' pp--large' : ''}`} aria-hidden="true">
      <img className="pp-photo" src={project.image ?? posterPhoto} alt="" />
      <span className="pp-overlay" />
    </div>
  );
}
