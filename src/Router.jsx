import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Fallback from './Fallback';
// import FormsPage from './pages/FormsPage';
import FormPage from './components/FormPage';

const Home = React.lazy(() => import('./pages/Home'));
const Posts = React.lazy(() => import('./pages/Posts'));
const FormsPage = React.lazy(() => import('./pages/FormsPage'));

const Router = () => (
  <React.Suspense fallback={<Fallback />}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/formspage" component={FormsPage} />
        <Route exact path="/formsmain" component={FormPage} />
      </Switch>
    </BrowserRouter>
  </React.Suspense>
);

export default Router;
