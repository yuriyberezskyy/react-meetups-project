import { Route, Switch } from 'react-router-dom';
import React from 'react';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetsupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <div>
        <Switch>
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetsupPage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
        </Switch>
      </div>
    </Layout>
  );
}

export default App;
