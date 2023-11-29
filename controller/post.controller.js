const pool = require('../database/index');
const postController = {
    findAll:async (req, res) => {
        try {
            const [rows, fields] = await pool.query('SELECT * FROM berita')
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = postController;