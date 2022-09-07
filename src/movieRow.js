import React from "react";

class MovieRow extends React.Component {
  viewMovie() {
      const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
      window.location.href = url
      // console.log(this.props.movie.id)
  }
    render() {
        return <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img className='posterImg' src={ "https://image.tmdb.org/t/p/w185/" + this.props.movie.poster_path} alt="poster"/>
            </td>

            <td>
              <h2>{this.props.movie.title}</h2> <br/>
              <p>{this.props.movie.overview}</p> <br/>
              <input type="button" onClick={this.viewMovie.bind(this)} value="view"/>
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow;