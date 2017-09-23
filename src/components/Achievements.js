import React from 'react'
import { Header, List, Icon, Label } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const achievementsDesc = {
    meal: "Eat 6 meals.",
    vegetable: "Eat at least 6 servings of Vegetable",
    protein: "Eat at most 3 servings of Protein",
    fat: "Eat at most 2 servings of Fat",
    carb: "Eat at most 2 servings of Carb",
    drink: "Have 4 drinks",
}

const Achievemnets = ({ achievements }) => (
    <div>
        <Header as='h3'>Achievemnets</Header>
        <List divided>
            {achievements.map(a => (
                <List.Item key={a.name}>
                    <Icon color={a.consumed >= a.target ? ((a.consumed > a.target && a.warn) ? 'yellow' : 'green') : 'grey'} name='trophy' size='large' />
                    <List.Content>
                        {a.consumed > a.target && a.warn ? (<Label color="red" tag size="small" style={{marginLeft: "2em"}}>You had so much {a.name} today</Label>) : ""}
                        <List.Header as='h5'>{a.name}</List.Header>
                        <List.Description>{achievementsDesc[a.name]}</List.Description>
                    </List.Content>
                </List.Item>
            ))}
        </List>
    </div>
)

Achievemnets.propTypes = {
    achievements: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            consumed: PropTypes.number.isRequired,
            target: PropTypes.number.isRequired,
            warn: PropTypes.bool.isRequired,
        }).isRequired
    ).isRequired
}

export default Achievemnets
