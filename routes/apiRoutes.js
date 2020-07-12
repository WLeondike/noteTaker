const { v1: uuidv1 } = require('uuid');



app.post("/api/notes", (req,res) => {
    let noteID = uuidv1();
    let usrNote = {
        title: req.body.title,
        text: req.body.text,
        id: noteID
    }
    

})

app.delete("/api/notes/:id", (req,res) => {


})