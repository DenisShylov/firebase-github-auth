import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RepositoriesList from '../RepositoriesList/RepositoriesList';
import { useDispatch, useSelector } from 'react-redux';
import {
  repositoriesListSelector,
  showProgressSelector,
} from '../../Redux/selectors';
import { fetchingDataList } from '../../Redux/actionCreators';
import Progress from '../Progress/Progress';

const SearchForm = () => {
  const [userData, setUserData] = useState('');
  const dispatch = useDispatch();
  const showProgressState = useSelector((state) => showProgressSelector(state));
  const reposList = useSelector((state) => repositoriesListSelector(state));
  if (showProgressState) {
    return <Progress />;
  }
  const handleChange = (e) => {
    setUserData(e.target.value);
  };

  const handleSearch = async () => {
    await dispatch(fetchingDataList(userData));
  };

  return (
    <>
      <TextField
        value={userData}
        onChange={handleChange}
        placeholder="search user resositories in github"
        id="outlined-basic"
        label="Search user repositories"
        variant="outlined"
      />
      <Button
        onClick={handleSearch}
        style={{ textAlign: 'center' }}
        variant="contained"
        endIcon={<SearchIcon />}
      >
        Search
      </Button>

      {reposList.length > 0 ? <RepositoriesList list={reposList} /> : ''}
    </>
  );
};

export default SearchForm;
