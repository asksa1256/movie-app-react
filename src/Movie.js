import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

// state가 필요 없는 컴포넌트이기 때문에 굳이 Class 형태로 만들지 않고 그냥 함수 형태로 생성
function Movie({id, year, title, summary, poster, genres}){
  return (<div className="movie">
    <img src={poster} alt={title} title={title} />
    <div className="movie-data">
      <h3 className="title">{title}</h3>
      <h6 className="year">{year}</h6>
      <ul className="genres">
        {genres.map((genre, i) => <li key={i} className='genre'>{genre}</li>)}
      </ul>
      <p className="summary">{summary.slice(0, 180)}...</p>
    </div>
  </div>);
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;