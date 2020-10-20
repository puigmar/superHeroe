import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen";
import HeroScreen from "../components/heroes/HeroScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import { Search } from "../components/search/Search";
import { Navbar } from "../components/ui/NavBar";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/dc' component={DcScreen} />
          <Route exact path='/marvel' component={MarvelScreen} />
          <Route exact path='/hero/:heroID' component={HeroScreen} />
          <Route exact path='/search' component={Search} />
          <Redirect to='/marvel' />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;
