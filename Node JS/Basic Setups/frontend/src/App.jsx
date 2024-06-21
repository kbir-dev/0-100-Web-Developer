import './App.css';
import axios from 'axios';
import { useState, useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get(`/api/jokes`)
      .then(response => setJokes(response.data))
      .catch(error => console.log("ERROR OCCURRED", error))
  }, []);

  return (
    <>
      <h1>Karanbir</h1>
      <p>Jokes: {jokes.length}</p>
      <div>
        {
          jokes.map((joke) => (
            <div key={joke.id}>
              <h5>{joke.title}</h5>
              <p>{joke.content}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App;



// import './App.css';
// import axios from 'axios';
// import { useState, useEffect } from "react";

// function App() {
//   const [jokes, setJokes] = useState([]);

//   useEffect(() => {
//     axios.get(`/api/jokes`)
//       .then(response => setJokes(response.data))
//       .catch(error => console.log("ERROR OCCURRED", error))
//   }, []); // Add dependency array to ensure it runs only once

//   return (
//     <>
//       <h1>Karanbir</h1>
//       <p>Jokes: {jokes.length}</p>
//       <div>
//         {
//           jokes.map((joke) => (
//             <div key={joke.id}>
//               <h5>{joke.title}</h5>
//               <p>{joke.content}</p>
//             </div>
//           ))
//         }
//       </div>
//     </>
//   )
// }

// export default App;
