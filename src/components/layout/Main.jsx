import {Outlet} from 'react-router-dom'
import NavBar from '../nav-bar/NavBar'

const Main = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default Main