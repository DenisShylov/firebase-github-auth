import { useEffect } from 'react';
import Constants from '../../Constants/Constants';
import { authUserSelector } from '../../Redux/selectors';

const AuthRequire = ({ children }) => {
  const { navigate, useSelector } = Constants();
  const isAuth = useSelector(authUserSelector);

  useEffect(() => {
    if (!isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  return isAuth ? children : null;
};

export default AuthRequire;
