import { BrowserRouter} from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Navbar></Navbar>
      </BrowserRouter>
    </div>
  );
}

export default App;
