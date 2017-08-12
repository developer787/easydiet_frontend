const GetReporteSemanal = (form)=>{
  const self = form
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
export default GetReporteSemanal
