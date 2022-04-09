import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'

// PROPS
//you pass {robots} - array as PROPS to the Component
//PROPS never change, they are always just inputs
// STATE
//if we want to change/update sth we need STATE 
//STATE is an object that describes your application and this object is changeable
// STATE >> props 


//smart Components are classComponents and have the STATE
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    //React LifecycleMethod which gets called when the component is 'mounted' on the DOM
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))

    }

    /*everyTime an input changes we get an event(listens from the onChange property of the inputfield*/
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        //destructuring to remove this.state when we refer to this.state.robots /searchfield
        const { robots, searchfield } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        //checks if data did load
        return !robots.length
            ? <h1>Loading...</h1>
            : (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
    }
}


export default App;