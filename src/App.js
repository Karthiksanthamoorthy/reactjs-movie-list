import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';
import { MovieList } from './MovieList';
import { AddColor } from './AddColor';
 import { useState } from "react";
import { AddMovie } from './AddMovie';
import { Routes, Route, Link, Navigate } from "react-router-dom";


function App() {
  const names = ["pandya", "ayan", "anjan", "dhamo"];
  const users = [
    {
      name: "dhamo",
      pic: "data:image/png;base64,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"
    },
    {
      name: "rohit",
      pic: "data:image/jpeg;base64,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"
    },
    {
      name: "virat",
      pic: "data:image/jpeg;base64,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"
    },
  ];
  const [movieList, setMovieList] = useState([
    {
      name: "Vikram",
      poster: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      rating: 8.4,
      summary: "Members of a black ops team must track and eliminate a gang of masked murderers."
    },
    {
      name: "RRR",
      poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
    },
    {
      name: "Iron man 2",
      poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    },
    {
      name: "No Country for Old Men",
      poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    },
    {
      name: "Jai Bhim",
      poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8
    },
    {
      name: "The Avengers",
      rating: 8,
      summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
    },
    {
      name: "Ratatouille",
      poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
    }
  ]);
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/color-game">Color Game</Link>
        </li>
        <li>
          <Link to="/movies/add">Add Movie</Link>
        </li>
      </ul>
     {/* {users.map((usr) => (<User name={usr.name} pic={usr.pic} />
      ))} */}
      {/* <AddColor /> 
      <MovieList /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Navigate replace to="/movies" />} />
        <Route path="/movies" element={<MovieList movieList={movieList}  />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route
          path="/movies/add"
          element={
            <AddMovie movieList={movieList} setMovieList={setMovieList} />} />
       <Route path="*" element={<NotFound />} />
      </Routes>
</div>
      );
}

function Home() {
  return <div>
    <h1>Welcome to the movie app</h1>
  </div>
}
function NotFound(){
  return (
    <div> 
    <h1>404 not found</h1>
  </div>
  ); 
}

export function ColorBox({ color }) {
  const styles = {
    width: "250px",
    height: "26px",
    marginTop: "10px",
    background: color,
  };
  return <div style={styles}></div>;
}

 
//1st method
function User(props) {
  return (
    <section>
      <img
        className="user-profile"
        src={props.pic} alt={props.name} />
      <h1 className="user-foo">Hello,  <span className="user-first-name">{props.name}😊😊 -{10 * 20} followers{" "}</span></h1>
      <Counter />
    </section>
  );
}

// 2nd Method
// function User(props) {
//   const { pic, name } = props;
//   return (
//     <section>
//       <img
//         className="user-profile"
//         src={pic} alt={name} />
//       <h1 className="user-foo">Hello,  <span className="user-first-name">{name}😊😊 -{101 * 20} followers{" "}</span></h1>
//     </section>
//   );
// }

//3rd Method
// function User({ pic, name }) {
//   return (
//     <section>
//       <img
//         className="user-profile"
//         src={pic} alt={name} />
//       <h1 className="user-foo">Hello,  <span className="user-first-name">{name}😊😊 -{101 * 1} followers{" "}</span></h1>
//     </section>
//   );
// }
export default App;
