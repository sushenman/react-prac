import React from 'react';
import {useParams} from 'react-router-dom';
import { useRouteMatch ,Switch,Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Beluga from './Beluga';
import Blue from './Blue';

export default function Whale() {
    const { path } = useRouteMatch();
   
  
    return (
      <>
        <h2>Whale</h2>
        <Switch>
        <Route path={`${path}/beluga`}>
          <Beluga />
        </Route>
        <Route path={`${path}/blue`}>
          <Blue />
        </Route>
      </Switch>
      </>
    );
  }