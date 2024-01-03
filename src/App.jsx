
import './App.css'
import { useParams } from 'react-router-dom';

import {
  Routes,
  Route,
} from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <h1>Welcome</h1>

    </div>
  );
}

const Four = (props) => {
  const { number } = useParams()
  return (
    <div>
      <h1>The number is: {number}</h1>

    </div>
  );
}


const HelloWorld = (props) => {
  const { greet } = useParams()
  return (
    <div>
      <h3 style={{ backgroundColor: '#ffcccc', color: 'blue', border: '2px solid lightgray', height: '50px', padding: '20px 0px 0px 20px', margin: '0 auto' }}>The World is so: {greet}</h3>

    </div>
  );
}


const Hello = (props) => {
  const { greet } = useParams()
  return (
    <div>
      <h1>hola:{greet}</h1>

    </div>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/hello/:greet" element={<Hello />} />
        <Route path="/hello/blue/red/:greet" element={<HelloWorld />} />
        <Route path=":number" element={<Four />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}


export default App
