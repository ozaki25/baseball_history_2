import React from 'react'
import _ from 'underscore'

class HistoriesTableRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = { history: props.history }
    }
    render() {
        const history = this.state.history
        return (
            <tr>
              <td>{history.get('date')}</td>
              <td>{history.resultAndTeam()}</td>
              <td>{history.get('starter')}</td>
                <td>{history.shortLocationName()}</td>
                <td>
                  <a href={history.detailUrl()} onClick={this.onClickDetailLink.bind(this)} >詳細</a>
                </td>
                <td>
                  <button className="btn btn-default btn-xs">
                    <i className="fa fa-wrench control-history" onClick={this.onClickEditIcon.bind(this)} />
                  </button>
                </td>
            </tr>
        )
    }
    onClickDetailLink(e) {
        e.preventDefault()
        open(this.state.history.detailUrl(), '_blank');
    }
    onClickEditIcon(e) {
        e.preventDefault()
        location.href = `${location.origin}/#react/histories/${this.state.history.id}/edit`
    }
}

module.exports = HistoriesTableRow
