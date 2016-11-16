import React from 'react'
import Selectbox from './Selectbox'

class HistoryForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: props.history,
            teams: props.teams,
            locations: props.locations
        }
    }
    render() {
        const history = this.props.history
        return (
            <form className="form-horizontal">
              <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="input_date">試合日</label>
                <div className="form-inline col-sm-10">
                  &nbsp;年&nbsp;
                  <select className="form-control input-sm">
                      <option>1</option>
                  </select>
                  &nbsp;月&nbsp;
                  <select className="form-control input-sm">
                    <option>1</option>
                  </select>
                  &nbsp;日&nbsp;
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="input_team">対戦相手</label>
                <div className="col-sm-10">
                  {this.renderSelectTeam()}
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="input_result">結果</label>
                <div className="col-sm-10">
                  <select className="form-control input-sm">
                    <option>勝ち</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="input_starter">先発</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control input-sm" id="input_starter" defaultValue={history.get('starter')} />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="input_location">球場</label>
                <div className="col-sm-10">
                  <select className="form-control input-sm">
                    <option>札幌ドーム</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-12 col-sm-offset-2 col-sm-2">
                  <button type="button" className="btn btn-primary form-control" id="submit_history">{history.isNew() ? '作成' : '更新'}</button>
                </div>
              </div>
            </form>
        )
    }
    renderSelectTeam() {
        const collection = this.state.teams.toJSON()
        const id = 'input_team'
        const className =  'form-control input-sm'
        const value = (model) => model.id
        const label = (model) => model.short_name
        return <Selectbox collection={collection} id={id} className={className} value={value} label={label} />
    }
}

module.exports = HistoryForm
