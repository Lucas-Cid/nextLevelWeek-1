import express  from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json({
        user: "Lucas Cid"
    });
})

app.listen(3333);