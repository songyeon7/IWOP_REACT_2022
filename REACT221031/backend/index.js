const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
const list = [];
let id = 1;

app.get('/', (req, res) => {
    return res.status(200).json({ result: list });
});

app.get('/:id', (req, res) => {
    if (!list.find((e) => e.id == req.params.id))
        return res.status(400).json({
            result: 'Data for this id does not exist.',
        });
    return res.status(200).json({
        result: list[list.findIndex((e) => e.id == req.params.id)],
    });
})

app.post('/', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content)
        return res.status(400).json({
            result: 'There is no value for title or content.',
        });
    list.push({ id, title, content });
    return res.status(200).json({
        result: {
            id: id++,
            title,
            content,
        }
    });
});

app.patch('/:id', (req, res) => {
    if (!list.find((e) => e.id == req.params.id))
        return res.status(400).json({
            result: 'Data for this id does not exist.',
        });
    const { title, content } = req.body;
    if (!title && !content)
         return res.status(400).json({
            result: 'There is no value for title or content.',
        });
    const data = list[list.findIndex((e) => e.id == req.params.id)];
    if (title) data.title = title;
    if (content) data.content = content;
    return res.status(200).json({
        result: list[list.findIndex((e) => e.id == req.params.id)],
    });
})

app.delete('/:id', (req, res) => {
    if (!list.find((e) => e.id == req.params.id))
        return res.status(400).json({
            result: 'Data for this id does not exist.',
        });
    list.splice(list.findIndex((e) => e.id == req.params.id), 1);
    return res.sendStatus(200);
});

app.listen(8000, () => console.log("Server Started!"));