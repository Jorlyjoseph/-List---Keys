import StudentList from "./components/StudentList";
import "./App.css";
import SimpleList from "./components/SimpleList";
import MovieList from "./components/MovieList";

// function App() {
//   return (
//     <div className="App"></div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <SimpleList />
//     </div>
//   );
// }

function App() {
  const students = ["Marc", "Lucy", "Anna"];

  return (
    <div className="App">
      {/* <SimpleList /> */}
      <StudentList />
      <MovieList />
    </div>
  );
}

export default App;
