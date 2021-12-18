const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// const handler = (req, res)=>{
//     res.send('Hello form node');
// }
// app.get('/',handler);
const users = [
    { id: 0, name: "jayed" },
    { id: 1, name: "arif" },
    { id: 2, name: "borhan" },
    { id: 3, name: "rakesh" }
]

app.get('/', (req, res) => {
    res.send('Hello from the otherside and');
})
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})
app.listen(port, () => {
    console.log('listening to port', port);
})