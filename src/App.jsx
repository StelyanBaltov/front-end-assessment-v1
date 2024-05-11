import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Main} from './components/Main/Main'
import ProductsContainer from './components/Products/ProductsContainer'
import NotFound from './components/NotFound/NotFound'
import UpdateFormContainer from './components/Products/Update/UpdateFormContainer';
import AddFormContainer from './components/Products/Add/AddFormContainer';

export const App = () => (
    <Main>
        <Switch>
            <Route exact path="/" component={ProductsContainer}/>,
            <Route
                path="/edit/:productId"
                render={({match}) => (<UpdateFormContainer productId={parseInt(match.params.productId)}/>)}
            />,
            <Route path="/add" render={() => (<AddFormContainer />) } />,
            <Route path="*" component={NotFound}/>,
        </Switch>
    </Main>
);
