import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './Redux/store.js';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import MainPage from './Pages/MainPage';
import { PersistGate } from 'redux-persist/integration/react';
import AuthRequire from './Components/Auth/AuthRequire';
import Settings from './Components/Settings/Settings';
import Header from './Components/Header/Header';

import './index.css';
import ModalWindow from './Components/ModalWindow/ModalWindow';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthRequire>
        <Header />
      </AuthRequire>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<App />} />
        <Route
          path="/repos"
          element={
            <AuthRequire>
              <MainPage />
            </AuthRequire>
          }
        />
        <Route
          path="/repos/:repos_name"
          element={
            <AuthRequire>
              <MainPage />
              <ModalWindow />
            </AuthRequire>
          }
        />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
