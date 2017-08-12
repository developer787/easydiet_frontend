import React from 'react'
import body from './reportes/body'
import GetReporteSemanal from './GetReporteSemanal'

class ReporteSemanal extends React.Component {
  componentDidMount(){
    GetReporteSemanal(this)
  }
  render(){
    return (
      <div>
        {body(this.state)}
      </div>
    )
  }
}
export default ReporteSemanal
