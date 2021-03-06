import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BreakFastItems from './BreakFast/BreakFastItems/BreakFastItems';
import DinnerItems from './Dinner/DinnerItems/DinnerItems';
import LunchItems from './Lunch/LunchItems/LunchItems';
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
            <button type="button" class="btn btn-danger m-5" disabled>Check Out Your Food</button>
        </div>
    );
};

export default Meals;