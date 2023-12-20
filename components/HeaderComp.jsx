
import SCLogo from '.././SaiCharan.png'

// const Logo = ()=> {
//     return <img className = "logoimg" src = {SCLogo}  alt="logo"/>
// }
import {Link} from 'react-router-dom';
const Icon = () => {
    return (
      <ul className="ulNavbar">
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Exp">Experience</Link>
        </li>
        <li>
          <Link to="/Test">Projects</Link>
        </li>
        <li>Contact</li>
        <li className="ResumeBox">Resume</li>
      </ul>
    );
  };
const Title = () => {
    return <h1>Sai Charan</h1>
}

const HeaderComponent = ()=> {
    return (
        <div className='headercomp'>
    
    <Icon/>
    </div> );}
    

export default HeaderComponent;