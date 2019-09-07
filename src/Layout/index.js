import React, { Fragment, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Order from '../View/order/'
import Sidebar from "./Sidebar";
import Header from "./Header";
import Error from '../View/Error/Error'

const Main = () => {
  const [mode, setMode] = useState('center');
  console.log(mode)
  return (
    <Fragment>
      <Header/>
      <main>
        <div className="main">
          <div className={`wrapper ${mode}`}>
            <Sidebar setMode={setMode} />
            <Switch>
              <Route path="/" exact render={(props) => <Redirect to="/order" />} />
              <Route path="/order" component={Order} />
              <Route component={Error} />
            </Switch>
          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default Main;