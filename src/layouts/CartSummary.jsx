import React from 'react'
import {  NavLink } from 'react-router-dom';
import { Dropdown,Label } from "semantic-ui-react";



export default function CartSummary() {

    return (
        <div>
            <Dropdown item text="Sepetiniz">
              <Dropdown.Menu>
                <Dropdown.item>Acer laptop</Dropdown.item>
                <Dropdown.item>Asus laptop</Dropdown.item>
                <Dropdown.Divider/>
                <Dropdown.Item as={NavLink} to="/cart">Sepete git</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
