import React from 'react'
import { Container, Accordion, List, Image } from 'semantic-ui-react'
import moment from 'moment'

const NutritionHistory = ({ prevDaysMeals }) => {
    return (
        <div>
            <Container text textAlign='center' style={{ marginTop: '7em' }}>
                <Accordion styled panels={preparePanels(prevDaysMeals)} />
            </Container>
        </div>
    )
}

const preparePanels = (prevDaysMeals) => {
    return prevDaysMeals.slice(0).reverse().map(d => ({
        title: moment(d.date).format("LL"),
        content: (
            <List divided horizontal>
                {d.meals.map(m => <List.Item key={m.time}>
                    <Image avatar src={m.img || "/assets/images/meal.png"} />
                    <List.Content>
                        {m.name}
                    </List.Content>
                </List.Item>)}
            </List>
        )
    }))
}

export default NutritionHistory