import Database from "better-sqlite3";

const db = new Database("omy.db");

db.pragma("journal_mode = WAL");

// const statement = db.prepare("SELECT * FROM watching_list");

// const insert = db.prepare(
//   "INSERT INTO watching_list (movie_title,movie_description,movie_release,movie_rating) VALUES(?,?,?,?)"
// );

// insert.run("Omar", ";lskdf;slfk", "12/02/2020", 6);

// const deleteRow = db.prepare("DELETE FROM watching_list WHERE id=?");

// deleteRow.run(20);
// deleteRow.run(17);

// const update = db.prepare(
//   "UPDATE watching_list SET movie_rating=? WHERE movie_id=?"
// );
// update.run(7.5, 19);

// const change = db.prepare(
//   "ALTER TABLE watching_list RENAME COLUMN movie_id TO id"
// );
// change.run();
// console.log(statement.all());

export default db;
