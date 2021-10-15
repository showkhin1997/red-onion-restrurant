import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BreakFastItems from './BreakFast/BreakFastItems/BreakFastItems';
import DinnerItems from './Dinner/DinnerItems';
import LunchItems from './Lunch/LunchItems';
import MealsHeader from './MealsHeader/MealsHeader';

const Meals = () => {
    return (
        <div>
            <Router>
                <MealsHeader></MealsHeader>
                <Switch>
                    <Route exact path="/">
                        <LunchItems></LunchItems>
                    </Route>
                    <Route exact path="/lunch">
                        <LunchItems></LunchItems>
                    </Route>
                    <Route path="/breakfast">
                        <BreakFastItems></BreakFastItems>
                    </Route>
                    <Route path="/dinner">
                        <DinnerItems></DinnerItems>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Meals;