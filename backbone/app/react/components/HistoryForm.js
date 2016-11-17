import React from 'react'
import _ from 'underscore'
import moment from 'moment'
import Selectbox from './Selectbox'

class HistoryForm extends React.Component {
    constructor(props) {
        super(props)
        const history = props.history
        const tmpDate = new Date(history.get('date'))
        const date = tmpDate.toString() === 'Invalid Date' ? moment() : moment(tmpDate)
        const results = [
            { label: '勝ち', value: 'win' },
            { label: '負け', value: 'lose' },
            { label: '引き分け', value: 'draw' },
        ]
        this.state = {
            history: history,
            teams: props.teams,
            locations: props.locations,
            results: results,
            inputDateYear: date.year(),
            inputDateMonth: date.month() + 1,
            inputDateDay: date.date(),
            inputTeam: history.get('team_id') || props.teams.first().id,
            inputResult: history.get('result') || _(results).first().value,
            inputStarter: history.get('starter'),
            inputLocation: history.get('location_id') || props.locations.first().id,
        }
    }
    render() {
        const history = this.props.history
        return (
            <form className="form-horizontal">
              <div className="form-group">
                <label className="col-sm-2 control-label">試合日</label>
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
                <label className="col-sm-2 control-label">対戦相手</label>
                <div className="col-sm-10">
                  {this.renderSelectTeam()}
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">結果</label>
                <div className="col-sm-10">
                  {this.renderSelectResult()}
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">先発</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control input-sm" defaultValue={this.state.inputStarter} onChange={(e) => this.setState({ inputStarter: e.target.value })} />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">球場</label>
                <div className="col-sm-10">
                  {this.renderSelectLocation()}
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-12 col-sm-offset-2 col-sm-2">
                  <button type="button" className="btn btn-primary form-control" onClick={this.onSubmit.bind(this)}>{this.submitBtnLabel()}</button>
                </div>
              </div>
            </form>
        )
    }
    renderSelectDateYear() {
        const year = moment(new Date()).year()
        const latestTenYears = _.range(year, year - 10, -1)
        const collection = _.map(latestTenYears, (year) => { return { year: year } })
        const className =  'form-control input-sm'
        const selected = this.state.inputDateYear
        const value = (model) => model.year
        const label = (model) => model.year
        const onChange = (e) => this.setState({ inputDateYear: e.target.value })
        return <Selectbox collection={collection} className={className} selected={selected} value={value} label={label} onChange={onChange} />
    }
    renderSelectDateMonth() {
        const collection = _.map(_.range(1, 13), (month) => { return { month: month } })
        const className =  'form-control input-sm'
        const selected = this.state.inputDateMonth
        const value = (model) => model.month
        const label = (model) => model.month
        const onChange = (e) => this.setState({ inputDateMonth: e.target.value })
        return <Selectbox collection={collection} className={className} selected={selected} value={value} label={label} onChange={onChange} />
    }
    renderSelectDateDay() {
        const collection = _.map(_.range(1, 32), (day) => { return { day: day } })
        const className =  'form-control input-sm'
        const selected = this.state.inputDateDay
        const value = (model) => model.day
        const label = (model) => model.day
        const onChange = (e) => this.setState({ inputDateDay: e.target.value })
        return <Selectbox collection={collection} className={className} selected={selected} value={value} label={label} onChange={onChange} />
    }
    renderSelectTeam() {
        const collection = this.state.teams.toJSON()
        const className =  'form-control input-sm'
        const selected = this.state.inputTeam
        const value = (model) => model.id
        const label = (model) => model.short_name
        const onChange = (e) => this.setState({ inputTeam: e.target.value })
        return <Selectbox collection={collection} className={className} selected={selected} value={value} label={label} onChange={onChange} />
    }
    renderSelectResult() {
        const collection = this.state.results
        const className =  'form-control input-sm'
        const selected = this.state.inputResult
        const value = (model) => model.value
        const label = (model) => model.label
        const onChange = (e) => this.setState({ inputResult: e.target.value })
        return <Selectbox collection={collection} className={className} selected={selected} value={value} label={label} onChange={onChange} />
    }
    renderSelectLocation() {
        const collection = this.state.locations.toJSON()
        const className =  'form-control input-sm'
        const selected = this.state.inputLocation
        const value = (model) => model.id
        const label = (model) => model.short_name
        const onChange = (e) => this.setState({ inputLocation: e.target.value })
        return <Selectbox collection={collection} className={className} selected={selected} value={value} label={label} onChange={onChange} />
    }
    onSubmit() {
        let history = this.state.history
        const inputDate = moment([this.state.inputDateYear, this.state.inputDateMonth - 1, this.state.inputDateDay])
        history.save({
            date       : inputDate.format('YYYY-MM-DD'),
            team_id    : this.state.inputTeam,
            result     : this.state.inputResult,
            starter    : this.state.inputStarter,
            location_id: this.state.inputLocation,
        }, { wait: true }).done(() => {
            location.href = `${location.origin}/#react/histories`
        })
    }
    submitBtnLabel() {
        return this.state.history.isNew() ? '作成' : '更新'
    }
}

module.exports = HistoryForm
