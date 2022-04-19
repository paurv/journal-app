// Sistema de rutas principal
// Es como un componente común y corriente

import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
    <div>
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/auth"
                        component={AuthRouter}
                    />
                    <Route 
                        exact
                        path="/"
                        component={JournalScreen}
                    />
                    <Redirect to='/auth/register' />
                </Switch>
            </div>
        </Router>
    </div>
  )
}
