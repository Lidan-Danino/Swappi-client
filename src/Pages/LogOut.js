import { useEffect } from 'react';
import { API_URL } from '../services/constants';

function LogOut({ history }) {
  useEffect(() => {
    const logOut = async () => {
      try {
        const response = await fetch(`${API_URL}/auth/logout`);
        await response.json();
        history.push('/');
      } catch (err) {
        console.log(err);
      }
    };

    logOut();
  }, [history]);

  return null;
}

export default LogOut;
