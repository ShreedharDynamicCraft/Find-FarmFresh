import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AuthenticationContext from '../context/authentication';
import { Role } from '../types/Auth';


function Navbar() {
  const { logInData } = useContext(AuthenticationContext);
  const [location, setLocation] = useState('Fetching location...');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocation('Current Location - Guwahati');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="flex justify-between items-center font-noto px-36 py-3 shadow-sm bg-light-green">
      <div>
        <NavLink to="/">
          <img
            className="h-16"
            src="./logo.png"
            
            alt="home"
          />
        </NavLink>
      </div>
      <div className="flex gap-9 items-center">
        <span className="text-sm font-semibold">{location}</span>
        <ul className="flex gap-4 font-semibold">
          {logInData.loggedIn && logInData.role === Role.Farmer && (
            <li>
              <NavLink to="http://localhost:7195/">Farmer Community</NavLink>
            </li>
          )}
          <li>
            <a
              href="localhost:XXXXX"
              target="_blank"
              rel="AI Power Disease Detection"
            >
              
            </a>
          </li>
          <li>
            <a
              href="localhost:XXXXX"
              target="_blank"
              rel="noreferrer"
            >
               AI Powered Disese Prediction
            </a>
          </li>
        </ul>
        <NavLink to="http://localhost:7195/rent" className="font-semibold">
  Rental Service
</NavLink>
        <ul className="flex gap-4 items-center">
          <li>
            <NavLink to="/store">
              <ShoppingBagIcon />
            </NavLink>
          </li>
          {logInData.role === Role.Consumer && (
            <li className="pr-2">
              <NavLink to="/shopping-cart">
                <ShoppingCartIcon />
              </NavLink>
            </li>
          )}
          {logInData.role === Role.Farmer && (
            <li className="pr-2">
              <NavLink to="/orders">
                <ListAltIcon />
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to={logInData.loggedIn ? '/my-profile' : '/sign-up'}>
              <AccountCircleIcon fontSize="large" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;