const axios = require('axios');
axios.post('https://app.asana.com/api/1.0/tasks/1200253867506337/subtasks', {
	headers: {'Authorization': 'Bearer 1/1200228616714358:420c89e29f17c8489c327f2ad9d2fac2'},
data: {
    "approval_status": "pending",
    "assignee": "1200155138602595",
    "completed": false,

    "due_on": "2021-05-01",
    "external": {
      "data": "A blob of information",
      "gid": "my_gid"
    },
    "html_notes": "<body>Hit</body>",
    "liked": true,
    "name": "Did I do that?",
    "notes": "Yes",
    "projects": [
      "1200253867506304"
    ],
    "resource_subtype": "default_task",
    "start_on": "2021-04-27",
    "workspace": "1200155138602595"
  }
})
.then((response) => {
 console.log((response.data));
}, (error) => {
  console.log(error + 'This did not go as planned');
});   
