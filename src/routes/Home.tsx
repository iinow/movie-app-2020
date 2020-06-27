import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Movie from '../components/Movie'
import '../css/Home.css'

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
  const [ isLoading, setLoading ] = useState(true)
  const [ movies, setMovies ] = useState([])

  useEffect(() => {
    getMovie()
  }, [])

  async function getMovie() {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
    setMovies(movies)
    setLoading(false)
  }

  return (
    <section className="container">
      {
        isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading....</span>
          </div>
        ) : (
          <div className="movies">
            {
              movies.map((movie: any) => {
                return <Movie
                  key={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              })
            }
          </div>
        )
      }
    </section>
  );
}

export default Home
