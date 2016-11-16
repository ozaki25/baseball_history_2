import React from 'react'
import _ from 'underscore'

class HistoriesTableRow extends React.Component {
    render() {
        const history = this.props.history
        return (
            <tr>
              <td>{history.get('date')}</td>
              <td>{history.resultAndTeam()}</td>
              <td>{history.get('starter')}</td>
                <td>{history.shortLocationName()}</td>
                <td>
                  <a href={history.detailUrl()}>詳細</a>
                </td>
                <td>
                  <button className="btn btn-default btn-xs">
                    <i className="fa fa-wrench control-history" />
                  </button>
                </td>
            </tr>
        )
    }
}

module.exports = HistoriesTableRow
