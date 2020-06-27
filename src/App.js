import React, { useState, useEffect } from "react";
import Food from "./Food";
import { foodLike } from "./data/food";


function App() {
  const [ isLoading, setLoading ] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })

  return (
    <div>
      {
        isLoading ? 'Loading...' : 'We are ready'
      }
    </div>
  );
}

export default App;
