import './../src/css/styles/styles.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import Homes from '../src/components/Home/Home'

const App = () => {
  return (
    <div>
      <Homes/>
    </div>
  )
  
}

export default App;
