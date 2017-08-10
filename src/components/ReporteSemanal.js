import React from 'react'
import head from './reportes/head'
import body from './reportes/body'

class ReporteSemanal extends React.Component {
  componentDidMount(){
    const self = this
    const url = 'https://easydiet-backend-developer787.c9users.io/api/reportes'
    console.log('MOUNTED')
    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      self.setState({ 
        response: data
        });
    }).then(()=> {
    console.log("hello: "+ self.state.response)
    });

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
