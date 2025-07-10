import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Home from './pages/Home/Home';
import { ThemeProvider } from './context/ThemeContext';


function App() {

  return (
    <ThemeProvider>
      <Home/>
    </ThemeProvider>
  )
}

export default App
