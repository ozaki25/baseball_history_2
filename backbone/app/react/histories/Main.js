import React from 'react'
import Header from '../components/Header'
import HistoriesTable from '../components/HistoriesTable'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = { histories: props.histories }
    }
    render() {
        return (
            <div>
              <Header />
              <div className="container">
                <HistoriesTable histories={this.state.histories} />
              </div>
            </div>
        )
    }
}

module.exports = Main
