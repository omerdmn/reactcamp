import React from "react";
import { Menu } from 'semantic-ui-react'

export default function Categories() {
  
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item
          name="Anasayfa"
        />
        <Menu.Item
          name="Kategori 1"
        />
        <Menu.Item
          name="Kategori 2"
        />
      </Menu>
    </div>
  );
}
