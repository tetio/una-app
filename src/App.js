import { saveLocale } from './i18nInit';
import React, { Component } from 'react';
import logo from './logo.svg';
import { t, jt } from 'ttag'

import './App.css';

const setLocale = (locale) => (ev) => {
  ev.preventDefault();
  saveLocale(locale);
  window.location.reload();
}

const LangSwitcher = () => (
  <div className="Lang-switch">
    <h2>{t`Switch lang`}</h2>
    <a href='/' onClick={setLocale('en')}>en</a>
    <a href='/' onClick={setLocale('ca')}>ca</a>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LangSwitcher />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {jt`Edit <code>src/App.js</code> and save to reload.`}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t`Learn React`}
          </a>
          <p>{t`Good luck!`}</p>
        </header>
      </div>
    );
  }
}

export default App;
