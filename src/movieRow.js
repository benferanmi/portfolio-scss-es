import React from "react";

class MovieRow extends React.Component {
  viewMovie() {
      const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
      window.location.href = url
      // console.log(this.props.movie.id)
  }
    render() {
        return <table key={this.props.movie.id} className="table" >
        <tbody className="tbody">
          <tr className="tr">
            <td>
              <img className='posterImg' src={ "https://image.tmdb.org/t/p/w185/" + this.props.movie.poster_path} alt="poster"/>
            </td>

            <td className="posterData">
              <h2 className="posterHeading">{this.props.movie.title}</h2>
              <p>{this.props.movie.overview}</p>
              <input className="button3" type="button" onClick={this.viewMovie.bind(this)} value="view"/>
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow;