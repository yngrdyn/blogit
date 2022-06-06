import { Link } from 'react-router-dom';
import logo from '../logo.png';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='container'>
        <Link to='/'>
          <img src={logo} width='35px'/>
          <h2>Blogit</h2>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
