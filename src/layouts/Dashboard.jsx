import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import {  Grid } from "semantic-ui-react";
import { Route } from "react-router";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";
import ProductSearch from "./ProductSearch"



export default function Dashboard() {

  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Route exact path="/" component={Categories} />
          </Grid.Column>
          <Grid.Column width={13}>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route path="/products/:name" component={ProductDetail} />
            <Route exact path="/cart" component={CartDetail} />
            <Route path="/product/add" component={ProductAdd} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Route path="/filter/:search" component={ProductSearch} />
    </div>
  );
} 