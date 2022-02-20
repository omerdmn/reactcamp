import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";
import CartSummary from "./CartSummary"
import { useSelector } from "react-redux";


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
        <Container>
          <Menu.Item name="anasayfa" />
          <Menu.Item name="mesaj" />
          <Menu.Menu position="right">
            {isAuthenticated ? <SignedIn signOut={handleSignOut} bisey="1" /> : <SignedOut signIn={handleSignIn} />}
            {cartItems.length>0&&<CartSummary />}

          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}