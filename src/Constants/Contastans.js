import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Constants = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return {
    dispatch,
    navigate,
    useSelector,
  };
};

export default Constants;
