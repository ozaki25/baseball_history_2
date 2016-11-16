import React from 'react'
import Header from '../components/Header'
import HistoryForm from '../components/HistoryForm'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: props.history,
            teams: props.teams,
            locations: props.locations
        }
    }
    render() {
        return (
            <div>
              <Header />
              <div className="container">
                <HistoryForm history={this.state.history} teams={this.state.teams} locations={this.state.locations} />
              </div>
            </div>
        )
    }
}

module.exports = Main
