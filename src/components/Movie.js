import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie(props) {
  const { id, coverImg, title, summary, genres } = props;

  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{id ? <Link to={`movie/${id}`}>{title}</Link> : ""}</h2>
      <p>{summary}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
