import './../src/css/styles/styles.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import Home from '../src/components/Home'

const App = () => {
  return (
    <div>
      <Home/>
    </div>
  )
  
}

export default App;
