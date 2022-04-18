import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginAction } from '../redux/actions'

const Auth = () => {
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Please Login</h3>
      <input
        name="phone"
        required
        type="text"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        placeholder="Phone number"
      />
      <button onClick={() => dispatch(LoginAction(phone))} >Login</button>
    </div>
  );
};

export default Auth;