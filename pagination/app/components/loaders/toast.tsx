import React from "react";
import {  toast, ToastContainer } from 'react-toastify';

const ToastContainerConfig = () => {
    return(
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
       aria-label={undefined}/>
    )
}

export default ToastContainerConfig;
