import React from 'react'
import { Link } from 'react-router-dom';
import { Menu, Header } from 'semantic-ui-react'

const Nav = () =>
  <Menu>
   	<Link to="/" ><Menu.Item>Home</Menu.Item></Link>
   	<Link to="/" ><Menu.Item>Pick A List</Menu.Item></Link>
   		<Link to="/new" ><Menu.Item>Create A List</Menu.Item></Link>
    <Link to="/all" ><Menu.Item>All Quotes</Menu.Item></Link>
    <Link to="/favorites" ><Menu.Item>Favorites</Menu.Item></Link>
     <Menu.Menu position='right'>
            <Menu.Item><Link to="/" > <Header as='h4'>Quotalicious</Header></Link></Menu.Item>
     </Menu.Menu>
  </Menu>

export default Nav