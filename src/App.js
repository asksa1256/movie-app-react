import React from "react";
import axios from "axios";
import Movie from "./Movie.js";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async() => {
    // 데이터를 모두 받아올 때까지 기다림(비동기)
    // movies.data.data.movies === {data: {data: {movies}}}
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({movies, isLoading: false}) // 선언해놨던 movies[]에 API의 'movies' 데이터를 추가
  }
  componentDidMount(){
    // Class(before DOM), DOM이 로드된 이후에 실행
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading === true ? (<span className="loader">Loading...</span>) : (<div className="movies">
          {
            movies.map(movie => {
              return <Movie 
              key={movie.id}
              id={movie.id} 
              year={movie.year} 
              genres={movie.genres}
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image} />;
            })
          }
        </div>)
        }
      </div>
    )
  }
}

export default App;
