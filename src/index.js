import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
// Layouts
import DefaultLayout from 'components/Layout/DefaultLayout';
// Components
import Home from 'components/Home';
import Skills from 'components/Skills';
import Employment from 'components/Employment';
import Projects from 'components/Projects';
import Education from 'components/Education';
import Error404 from 'components/Error404';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

ReactDOM.render(
  <BrowserRouter>
    <div>
      <MuiThemeProvider theme={ theme }>
        <Switch>
          <DefaultLayout exact path='/' title='Home' component={ Home } />
          <DefaultLayout exact path='/skills' title='Skills' component={ Skills } />
          <DefaultLayout exact path='/employment' title='Employment' component={ Employment } />
          <DefaultLayout exact path='/projects' title='Projects' component={ Projects } />
          <DefaultLayout exact path='/education' title='Education' component={ Education } />
          <DefaultLayout component={ Error404 } />
        </Switch>
      </MuiThemeProvider>
    </div>
  </BrowserRouter>
  , document.querySelector('#root'));
