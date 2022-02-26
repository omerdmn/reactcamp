import React, { useState } from "react";
import {  Container,  Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";
import CartSummary from "./CartSummary"
import { useSelector } from "react-redux";
import SearchForm from "./SearchForm";


export default function Navi() {
  const { cartItems } = useSelector(state => state.cart)
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history = useHistory()

  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container  >
          <Menu.Item href="http://localhost:3000/" icon="home" name="anasayfa" />
          <Menu.Item icon="mail" name="mesaj" />
          <Menu.Item ><SearchForm /></Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item >
              {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
              {cartItems.length > 0 && <CartSummary />}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}