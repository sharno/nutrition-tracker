import React from 'react'
import { Menu, Container, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import moment from 'moment'

import logo from '../assets/images/meal.png';

const TopMenu = ({ date }) => (
    <Menu fixed='top' inverted>
        <Container>
            <Menu.Item header>
                <Image
                    size='mini'
                    src={logo}
                    style={{ marginRight: '1.5em' }}
                />
                Nutrition Tracker
            </Menu.Item>
            <Menu.Item as={NavLink} exact to='/'>Food Today</Menu.Item>
            <Menu.Item as={NavLink} to='/history'>Your Food History</Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item as='label'>{moment(date).format("LL")}</Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
)

export default TopMenu
