const pool = require("../database/index");

class EmailUserModel {
    static chekEmail(email) {
        return pool.query("SELECT * FROM user_berita WHERE email_user = ?", [email]);
    }

    static subscribeEmail(email) {
        return pool.query("INSERT INTO user_berita (email_user) VALUES (?)", [email]);
    }

    static getNews() {
        return pool.query("SELECT * FROM berita");
    }

    static updateBerita(beritaId){
        return Promise.resolve();
    }

    static getEmailSubscribe(){
        return pool.query("SELECT user_berita FROM email_user");
    }
}

module.exports = EmailUserModel;