import PropTypes from 'prop-types';

function ProjectCard({src, link, h3, p }) {
  const handleClick = (e) => {
    // Prevent the event from bubbling up to carousel navigation controls
    e.stopPropagation();
    // The link will still work because we're not preventing default behavior
  };

  return (
    <a href={link} target="_blank" onClick={handleClick}>
      <img className="hover" src={src} alt={`${h3} image`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired
};

export default ProjectCard;