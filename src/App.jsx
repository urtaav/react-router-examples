import './App.css'
import { BrowserRouter as Router} from 'react-router-dom';
import AppLayout from './Pages/AppLayout/AppLayout';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <>
      <Router>
        <AppLayout></AppLayout>
      </Router>
    </>
  )
}

export default App
