import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

class Clock extends Component {

    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        setInterval(
            () => this.tick(), 1000)
    }

    tick() {
        this.setState(
            { date: new Date() }
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    render() {
        return (
            <div>
                <Card style={{ width: '18rem'}} className="bg-success">
                    <Card.Body >
                        <Card.Title><h1>The Time Is</h1></Card.Title>
                        <Card.Text>
                        <h2> {this.state.date.toLocaleTimeString()} </h2>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default Clock