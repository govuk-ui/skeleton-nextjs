const sqlite3 = require('sqlite3').verbose();

export async function connectSQLite() {
  return await new Promise((resolve, reject) => {
    const db = new sqlite3.Database('./session.db');
    db.run("CREATE TABLE IF NOT EXISTS session (session VARCHAR(255) PRIMARY KEY, data TEXT)", (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve();
      }
    });
    db.close();
  });
}

export async function getSQLite(sessionId) {
  await connectSQLite();
  return await new Promise((resolve, reject) => {
    const db = new sqlite3.Database('./session.db');
    const sql = 'SELECT * FROM session WHERE session = ?';
    db.get(sql, [sessionId], (err, row) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(row?.data);
    });
    db.close();
  });
}

export async function setSQLite(sessionId, data) {
  await connectSQLite();
  return await new Promise((resolve, reject) => {
    const db = new sqlite3.Database('./session.db');
    db.run(`INSERT OR REPLACE INTO session (session, data) VALUES ('${sessionId}', '${data}')`, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
    db.close();
  });
}
