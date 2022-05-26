import React,{useState,useEffect} from 'react' 
import axios from "axios";

export default function Home() {

    const [movieData, setMovieData] = useState(null)

    useEffect(() => {
        getMovieData()
    },[])
    
    const getMovieData = ()=>{
        axios.get('/getmovie')
        .then(res => {
          const movieData = res.data;
          setMovieData(movieData.result)

        })
    }

  return (
    <div className="container">
        <div className="movie-container pt-5">
            <div className="row">
                {movieData !== null ?(
                    movieData.map(data=>{
                        return(
                    <div className="col-4 col-xl-3 mb-4" key={data.imdbID}>
                        <div className="card shadow">
                        <img src={data.Poster} className="card-img-top img-fluid" style={{height:"420px"}} alt="..."/>
                            <div className="card-body text-start">
                                <div className="movie-header d-flex align-items-center justify-content-between">
                                <h5>{data.Title}</h5>
                                <span className='rating'>0.5/10</span>
                                </div>
                                <p className="card-text">data.released</p>
                                <div className="movie-footer d-flex align-items-center justify-content-between">
                                <h5 className='released-date'>{data.released}</h5>
                                <h5 className='remain-time'>3HR 33MIN</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                        )

                    })
                ):(
                    <div className="col-12 text-center">
                        <h3>Loading</h3>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}
