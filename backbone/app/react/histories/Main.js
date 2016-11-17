import React from 'react'
import Header from '../components/Header'
import HistoriesTable from '../components/HistoriesTable'
import HistoryForm from '../components/HistoryForm'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: props.history,
            histories: props.histories,
            teams: props.teams,
            locations: props.locations
            route: 'index'
        }
    }
    render() {
        return (
            <div>
              <Header />
              <div className="container">
                {this.renderMain.bind(this)}
              </div>
            </div>
        )
    }
    renderMain() {
        return this.state.route === 'index' ? this.renderTable() :
               this.state.route === 'new' ? this.renderNewForm() :
               this.state.route === 'edit' ? this.renderEditForm() : {}
    }
    renderTable() {
        let histories = this.state.histories
        histories.fetch().bone(() => {
            this.setState({ histories: histories })
            return <HistoriesTable histories={this.state.histories} />
        })
    }
    renderNewForm() {
        
        return <HistoryForm history={this.state.history} teams={this.state.teams} locations={this.state.locations} />
    }
}

module.exports = Main
