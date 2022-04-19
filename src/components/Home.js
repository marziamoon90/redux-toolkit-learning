import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Home = () => {

  const notify = () => {
    toast("Hello there", {
      onOpen: () => <ToastContainer
        position="bottom-right"
        newestOnTop={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
        autoClose={1500}
      />,
      // onClose: () => window.alert('Called when I close')
    });
  }
  return (
    <div>
      <button onClick={notify}>Notify</button>
      <ToastContainer
        position="top-right"
        newestOnTop={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
        autoClose={1500}
      />
    </div>
  );
};

export default Home;