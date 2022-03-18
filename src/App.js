import './../src/css/styles/styles.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import Home from '../src/components/Home'
import  {Mobile}  from './components/mobile/mobile.component.jsx'
import {Desktop} from './components/desktop/desktop.component.jsx';
import { useMediaQuery } from 'react-responsive'

const App = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div>
      {isTabletOrMobile  && <Mobile/>} 
      {isDesktopOrLaptop && <>
        <Desktop />
        </>}
      {/* {isTabletDevice && <Home/>}  */}
      {/* && isTabletDevice && <Home/> && isDesktop &&<Home/>&& isLaptop && <Home/>&& isBigScreen && <Home/> } */}
    </div>
  )
  
}

export default App;

{/* < h1 > React Responsive: una guía </ h1 >       
{isMobileDevice && < Mobile /> } 
  {isTabletDevice && <> < TabletMobile /> 
  {isDesktop && < Desktop /> } 
  {isLaptop && < Laptop /> } 
  {isBigScreen && < BigScreen /> }
 </> }  */}