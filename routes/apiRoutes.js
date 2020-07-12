const { v1: uuidv1 } = require('uuid');

app.post("/api/notes", (req,res) => {
    const usrNote = req.body;

    usrNote.id = uuidv1();

})

app.delete("/api/notes/:id", (req,res) => {


})