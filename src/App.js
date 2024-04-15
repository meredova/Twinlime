import './App.css';
import Header from "./components/Header/Header/Header"
import Footer from './components/Footer/Footer'
import Aside from './components/Aside/Aside';
import Main from './components/Main/Main';


function App() {
  return (
    <div className="App">
      <Header/>
      <Aside/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
