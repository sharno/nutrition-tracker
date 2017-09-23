import React from 'react'
import PropTypes from 'prop-types'
import { Item, Label } from 'semantic-ui-react'
import moment from 'moment'

import logo from '../assets/images/meal.png';

const Meal = ({ name, img, time, serving }) => (
    <Item>
        <Item.Image src={img || logo} />

        <Item.Content>
            <Item.Header>{name}</Item.Header>
            <Item.Meta>
                <span>{moment(time).fromNow()}</span>
            </Item.Meta>
            <Item.Extra>
                {Object.keys(serving)
                    .filter(s => serving[s])
                    .map(s => <Label key={s}>{serving[s] + " " + s}</Label>)}
            </Item.Extra>
        </Item.Content>
    </Item>
)

Meal.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    serving: PropTypes.object.isRequired,
}

export default Meal