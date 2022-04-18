import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction, LogoutAction } from '../redux/actions';


const BasePage = () => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAction())
  }, [])

  return (
    <div>
      <h1>Welcome to our website</h1>
      <h2>Phone: {auth?.phone}</h2>
      <p>Title: {auth?.data?.title}</p>
      <button onClick={() => dispatch(LogoutAction())}>Logout</button>
    </div>
  );
};

export default BasePage;