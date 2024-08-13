import './Header.css'
import { TennisBall } from './icons/TennisBall'


function Header() {
  const iconBig = { 
    with:'148px',
    height:'148px',
  };
  return (
    <div className="header-container">

      {/* <h1>oi</h1> */}
      <h2>Heloo</h2>
      {/* <p>EIAAA</p> */}
      <TennisBall />

    </div>
  )
}

export default Header
