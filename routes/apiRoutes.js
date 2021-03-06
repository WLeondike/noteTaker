const fs = require("fs");
const { v1: uuidv1 } = require("uuid");


module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    const noteData = JSON.parse(
      fs.readFileSync(`${__dirname}/../db/db.json`, "utf8")
    );
    res.json(noteData);
  });

  app.post("/api/notes", (req, res) => {
    const data = fs.readFileSync(`${__dirname}/../db/db.json`, "utf8");
    let notesArr = JSON.parse(data);
    const usrNote = req.body;
    usrNote.id = uuidv1();
    notesArr.push(usrNote);
    fs.writeFileSync(`${__dirname}/../db/db.json`, JSON.stringify(notesArr));
    res.send("Success!");
  });

  app.delete("/api/notes/:id", (req, res) => {
    let noteData = JSON.parse(fs.readFileSync(`${__dirname}/../db/db.json`, "utf8"));
    const deleteNotes = noteData.filter( function (usrNote) {
      return usrNote.id !== req.params.id;
    });
    fs.writeFileSync(`${__dirname}/../db/db.json`, JSON.stringify(deleteNotes));
    res.json(deleteNotes)
  });
};
