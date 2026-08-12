import posterPhoto from '../images/mindly_project.png';

export default function ProjectPoster({ project, large = false }) {
  return (
    <div className={`pp pp--${project.variant}${large ? ' pp--large' : ''}`} aria-hidden="true">
      <img className="pp-photo" src={posterPhoto} alt="" />
      <span className="pp-overlay" />
      <span className="pp-index">{project.id}</span>
      <span className="pp-name">{project.name}</span>
      <span className="pp-cat">{project.category || 'DESIGN × CODE'}</span>
    </div>
  );
}
