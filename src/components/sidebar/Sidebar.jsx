import './Sidebar.scss'
import {logo} from '../../assets'
import {nastroyka} from '../../assets'
import {profil} from '../../assets'
import {tovar} from '../../assets'
import {Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='header'>
      <div className="img">
         <img src={logo} alt="" />
         <div className="mainimg">
        <Link to='/'>  <img  src={nastroyka} alt="" /></Link>
         <Link to='firstLogin'><img src={profil} alt="" /></Link>
         <Link to='kartAll'><img src={tovar} alt="" /></Link>
         </div>
      </div>
     </div>

     
  )
}

export default Sidebar