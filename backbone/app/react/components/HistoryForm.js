import React from 'react'
import _ from 'underscore'
import moment from 'moment'
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
                  {this.renderSelectDateYear()}
                  &nbsp;年&nbsp;
                  {this.renderSelectDateMonth()}
                  &nbsp;月&nbsp;
                  {this.renderSelectDateDay()}
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
                  {this.renderSelectResult()}
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
                  {this.renderSelectLocation()}
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
    renderSelectDateYear() {
        const year = moment(new Date()).year()
        const latestTenYears = _.range(year, year - 10, -1)
        const collection = _.map(latestTenYears, (year) => { return { year: year } })
        const id = 'input_date_year'
        const className =  'form-control input-sm'
        const value = (model) => model.year
        const label = (model) => model.year
        return <Selectbox collection={collection} id={id} className={className} value={value} label={label} />
    }
    renderSelectDateMonth() {
        const collection = _.map(_.range(1, 13), (month) => { return { month: month } })
        const id = 'input_date_month'
        const className =  'form-control input-sm'
        const value = (model) => model.month
        const label = (model) => model.month
        return <Selectbox collection={collection} id={id} className={className} value={value} label={label} />
    }
    renderSelectDateDay() {
        const collection = _.map(_.range(1, 32), (day) => { return { day: day } })
        const id = 'input_date_year'
        const className =  'form-control input-sm'
        const value = (model) => model.day
        const label = (model) => model.day
        return <Selectbox collection={collection} id={id} className={className} value={value} label={label} />
    }
    renderSelectTeam() {
        const collection = this.state.teams.toJSON()
        const id = 'input_team'
        const className =  'form-control input-sm'
        const value = (model) => model.id
        const label = (model) => model.short_name
        return <Selectbox collection={collection} id={id} className={className} value={value} label={label} />
    }
    renderSelectResult() {
        const collection = [
            { label: '勝ち', value: 'win' },
            { label: '負け', value: 'lose' },
            { label: '引き分け', value: 'draw' },
        ]
        const id = 'input_result'
        const className =  'form-control input-sm'
        const value = (model) => model.value
        const label = (model) => model.label
        return <Selectbox collection={collection} id={id} className={className} value={value} label={label} />
    }
    renderSelectLocation() {
        const collection = this.state.locations.toJSON()
        const id = 'input_location'
        const className =  'form-control input-sm'
        const value = (model) => model.id
        const label = (model) => model.short_name
        return <Selectbox collection={collection} id={id} className={className} value={value} label={label} />
    }
}

module.exports = HistoryForm
