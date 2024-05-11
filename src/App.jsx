import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {
    Main,
    UpdateFormContainer,
    AddFormContainer,
    ProductsContainer,
    NotFound 
} from './components/'

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
