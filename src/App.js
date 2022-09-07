// import logo from './logo.svg';
import React, { Component } from 'react';
import MovieRow from './movieRow';
import './App.css';
import './style.css';

class App extends Component {
  constructor(props) {
    // Calling super class constructor
    super(props); 

    const movies = [
      {id: 0, title: "The avengers", overview: "the return of the avengers that went to the space", 
      poster_img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411"},
      {id: 1, title: "return avengers", overview: "the return of the avengers that went to they think the will make it bur fr the space",
      poster_img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1636996180"},
      {id: 2, title: "The salvagery avengers", overview: "the return of the avengers that went to the space theat wesnt i before te lefting ",
      poster_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUStuzlrSSK28et4tVqGGBxct4Du3P1MuY25faH9JUVuL2j-3FM-18P8DnPsVPJB0GTM&usqp=CAU"},
      {id: 3, title: "The masked avengers", overview: "the return of the avengers that went to the space2",
      poster_img: "https://smashinghub.com/wp-content/uploads/2012/06/Use-AIDA-Formula.jpg"},
    ]
    
    var movieRow = [];

    movies.forEach((movie) => {
      const movieTable = <MovieRow movie ={movie} />
      movieRow.push(movieTable)
    }) 

    this.state = {rows: movieRow}
  }
  render() {
  return (
    <div className="App">
      <table style={{
        backgroundColor: '#000 '
      }} className='headertitle'>
        <tbody>
          <tr>
          <td>
            <img width="40px" src="logo.png" alt="app icon "/>
          </td>
          <td>B Movies Search</td>
          </tr>
        </tbody>
      </table>

      <input type="search" name="search" placeholder="Enter Search term" className="moviessearch"/>

      {this.state.rows}
    </div>
  );
}
}
export default App;
