import React from "react";

class MovieRow extends React.Component {
    render() {
        return <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img className='posterImg' src={this.props.movie.poster_img} alt="poster"/>
            </td>

            <td>
              {this.props.movie.title} <br/>
              {this.props.movie.overview}
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow;