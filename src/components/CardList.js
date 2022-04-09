import React from 'react'
import Card from './Card'

//because we passed {robots} as props to the Component in the App.js file we can pass the data here as input
//this is a pure/deterministic function -> they return always the same result
const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={robots[i].id}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    )
                })
            }
        </div>
    )
}
export default CardList;