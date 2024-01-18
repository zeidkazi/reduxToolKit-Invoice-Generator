import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import Store from './redux/store/store';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <Layout>
    <ToastContainer/>
      <App />
    </Layout>
  </Provider>
);

reportWebVitals();
