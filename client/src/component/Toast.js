import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";

const toastSuccess = (msg) => toast(msg)
const toastError = (msg) => toast.error(msg)

export {toastSuccess, toastError}

