import React from 'react'
import styled from 'styled-components'

//Components
import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'

const Container = styled.div`

`

const Meals = () => {
    return(
        <Container>
            <MealsSummary/>
            <AvailableMeals/>
        </Container>
    )
}

export default Meals