import React from 'react'
import Header from '../components/Header'

class Main extends React.Component {
    render() {
        const history = this.props.history
        const teams = this.props.teams
        const locations = this.props.locations
        console.log(history)
        console.log(teams)
        console.log(locations)
        return (
            <div>
                <Header />
                <div className="container">
                    <h1>ReactSample</h1>
                </div>
            </div>
        )
    }
}

module.exports = Main
