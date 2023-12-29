import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [jokes, setJokes] = useState([]);

  /* To handle CORS error we either use proxy or we have to do the whitelisting of the url in the server */

  useEffect(() => {
    axios
      .get(`/api/jokes`)
      .then((response) => {
        // axios automatically converts the data into JSON format
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <h1>Hello World</h1>
      <p>LOKES: {jokes.length}</p>
      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
