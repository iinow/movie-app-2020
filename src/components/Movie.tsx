import React from "react";
import '../css/Movie.css'
import { Link } from "react-router-dom"

export interface MovieProps {
  year: string,
  title: string,
  summary: string,
  poster: string,
  genres: string[]
}

const Movie: React.FC<MovieProps> = (props) => {
  return (
    <div className="movie">
      <Link to={{
        pathname: '/movie-detail',
        state: {
          year: props.year,
          title: props.title,
          summary: props.summary,
          poster: props.poster,
          genres: props.genres
        }
      }}>
        <img src={props.poster} alt={props.title} title={props.title}/>
        <div className="movie__data">
          <h3 className="movie__title">{props.title}</h3>
          <h5 className="movie__year">{props.year}</h5>
          <ul className="movie__genres">
            {
              props.genres.map((genre, index) => {
                return (
                  <li key={index} className="movie__genre">{genre}</li>
                )
              })
            }
          </ul>
          <p className="movie__summary">{props.summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
