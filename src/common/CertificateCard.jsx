import PropTypes from 'prop-types';

function CertificateCard({src, h3, p }) {
  return (
    <div className="hover">
      <img src={src} alt={`${h3} certificate`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
}

CertificateCard.propTypes = {
  src: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired
};

export default CertificateCard;