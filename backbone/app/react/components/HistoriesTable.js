import React from 'react'
import _ from 'underscore'
import HistoriesTableRow from './HistoriesTableRow'

class HistoriesTable extends React.Component {
    render() {
        return (
            <table className="table table-hover">
              <tbody>
                {this.renderHistories()}
              </tbody>
            </table>
        )
    }
    renderHistories() {
        return this.props.histories.map((history, i) => <HistoriesTableRow key={i}  history={history} />)
    }
}

module.exports = HistoriesTable
