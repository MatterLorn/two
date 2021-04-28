const axios = require('axios');
axios.get('https://app.asana.com/api/1.0/projects/1200253867506304/tasks?limit=10', {headers: 
	{'Authorization': 'Bearer 1/1200228616714358:5f5281e28bb90ccfc994cec0f7ddeabf'}})
.then((response) => {
  console.log((response.data));
}, (error) => {
  console.log(err + 'This did not go as planned');
});
