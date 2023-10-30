const dbHelper = require('./dbhelper')

async function createUser(email, username, password){
    await dbHelper.makeDbQuery('INSERT INTO users (email, username, password) VALUES (?, ?, ?)', [email, username, password]);
}

async function deleteUser(username){
    await dbHelper.makeDbQuery('DELETE FROM users WHERE username = ?', [username]);
}


module.exports = {
    createUser,
    deleteUser
}   