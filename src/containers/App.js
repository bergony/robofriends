import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll"
import './App.css'
import ErrorBoundry from "../components/ErrorBoundry";


function App() {

    /*     constructor() {
            super()
            this.state = {
                robots: [],
                searchField: ''
            }
        } 
    */
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [count, setCount] = useState(0);

    /* 
        componentDidMount() {
    
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(users => { this.setState({ robots: users }) });
        } 
    */

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { setRobots(users) });
    },[count])


    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return !robots.length ?
        <h1>Loading</h1>
        :
        (
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>
                <button onClick={() => setCount(count + 1)}>Click me</button>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filterRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )

}

export default App