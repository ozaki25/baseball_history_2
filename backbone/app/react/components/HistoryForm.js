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
    componentDidMount() {
        const inputDateYear  = this.refs.inputDateYear.getDOMNode()
        const inputDateMonth = this.refs.inputDateMonth.getDOMNode()
        const inputDateDay   = this.refs.inputDateDay.getDOMNode()
        const inputTeam      = this.refs.inputTeam.getDOMNode()
        const inputResult    = this.refs.inputResult.getDOMNode()
        const inputStarter   = this.refs.inputStarter.getDOMNode()
        const inputLocation  = this.refs.inputLocation.getDOMNode()
        this.setState({
            inputDateYear: inputDateYear,
            inputDateMonth: inputDateMonth,
            inputDateDay: inputDateDay,
            inputTeam: inputTeam,
            inputResult: inputResult,
            inputStarter: inputStarter,
            inputLocation: inputLocation,
        })
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
                  <input type="text" className="form-control input-sm" ref="inputStarter" defaultValue={history.get('starter')} />
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
                <button type="button" className="btn btn-primary form-control" onClick={this.onSubmit()}>{this.submitBtnLabel()}</button>
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
        const ref = 'inputDateYear'
        const value = (model) => model.year
        const label = (model) => model.year
        return <Selectbox collection={collection} _ref={ref} className={className} value={value} label={label} />
    }
    renderSelectDateMonth() {
        const collection = _.map(_.range(1, 13), (month) => { return { month: month } })
        const className =  'form-control input-sm'
        const ref = 'inputDateMonth'
        const value = (model) => model.month
        const label = (model) => model.month
        return <Selectbox collection={collection} _ref={ref} className={className} value={value} label={label} />
    }
    renderSelectDateDay() {
        const collection = _.map(_.range(1, 32), (day) => { return { day: day } })
        const className =  'form-control input-sm'
        const ref = 'inputDateYear'
        const value = (model) => model.day
        const label = (model) => model.day
        return <Selectbox collection={collection} _ref={ref} className={className} value={value} label={label} />
    }
    renderSelectTeam() {
        const collection = this.state.teams.toJSON()
        const className =  'form-control input-sm'
        const ref = 'inputTeam'
        const value = (model) => model.id
        const label = (model) => model.short_name
        return <Selectbox collection={collection} _ref={ref} className={className} value={value} label={label} />
    }
    renderSelectResult() {
        const collection = [
            { label: '勝ち', value: 'win' },
            { label: '負け', value: 'lose' },
            { label: '引き分け', value: 'draw' },
        ]
        const ref = 'inputResult'
        const className =  'form-control input-sm'
        const value = (model) => model.value
        const label = (model) => model.label
        return <Selectbox collection={collection} _ref={ref} className={className} value={value} label={label} />
    }
    renderSelectLocation() {
        const collection = this.state.locations.toJSON()
        const ref = 'inputLocation'
        const className =  'form-control input-sm'
        const value = (model) => model.ref
        const label = (model) => model.short_name
        return <Selectbox collection={collection} _ref={ref} className={className} value={value} label={label} />
    }
    onSubmit() {
        console.log(this.refs)
        console.log(this.refs.inputStarter)
        console.log(this.state)
/*        const inputDateYear  = React.findDOMNode(this.refs.inputDateYear).value
        const inputDateMonth = React.findDOMNode(this.refs.inputDateMonth).value
        const inputDateDay   = React.findDOMNode(this.refs.inputDateDay).value
        const inputDate      = moment([inputDateYear, inputDateMonth - 1, inputDateDay])
        const inputTeam      = React.findDOMNode(this.refs.inputTeam).value
        const inputResult    = React.findDOMNode(this.refs.inputResult).value
        const inputStarter   = React.findDOMNode(this.refs.inputStarter).value
        const inputLocation  = React.findDOMNode(this.refs.inputLocation).value

        const history = this.state.history
        history.save({
            date       : inputDate,
            team_id    : inputTeam,
            result     : inputResult,
            starter    : inputStarter,
            location_id: inputLocation,
        }, { wait: true }).done(() => {
            console.log(history)
            this.setState({ history: history })
        })*/
    }
    submitBtnLabel() {
        return this.state.history.isNew() ? '作成' : '更新'
    }
}

module.exports = HistoryForm
