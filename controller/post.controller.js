const pool = require("../database/index");
const postController = {
    findAll:async (req, res) => {
        try {
            const [rows, fields] = await pool.query('SELECT * FROM berita')
            res.json({
                data: {
                    id:rows.id,
                    judul:rows.judul_berita,
                    foto: rows.foto-berita,
                    deskripsiFoto: rows.deskripsi-foto-berita,
                    deskripsi: rows.deskripsi-berita,
                    penulis: rows.pembuat-berita,
                    tanggal: rows.tanggal-pembuatan-berita, 
                    idKategori: rows.kategori_id,
                }
            })
        } catch (error) {
            console.log(error)
        }
    },
    getById: async(req, res) => {
        try{
            const {id}= req.params;
            const [rows, fields] = await pool.query('SELECT * FROM berita WHERE id=?', [id])
            res.json({
                data: rows
            })
        }catch(error){
            console.log(error)
            res.json({
                status: "error",
            })
        }
    },
    create: async(req, res) => {
        try{
            const { judul,deskripsi,pembuat,tanggalpembuatan,foto,kategori,deskripsifoto } = req.body;
            const sql="INSERT INTO berita (judul-berita,deskripsi-berita,pembuat-berita,tanggal-pembuatan-berita,foto-berita,kategori_id,deskripsi-foto-berita) VALUES (?,?,?,?,?,?,?)";
            const [rows, fields] = await pool.query(sql, [judul,deskripsi,pembuat,tanggalpembuatan,foto,kategori,deskripsifoto])
            res.json({
                status: "success",
                message: "berita berhasil ditambahkan"
            })
        }catch(error){
            console.log(error)
            res.json({
                status: "error",
            })
        }
    },
    update: async(req, res) => {
        try{
            const {id}= req.params;
            const { judul,deskripsi,pembuat,tanggalpembuatan,foto,kategori,deskripsifoto } = req.body;
            const sql="UPDATE berita SET judul-berita=?,deskripsi-berita=?,pembuat-berita=?,tanggal-pembuatan-berita=?,foto-berita=?,kategori_id=?,deskripsi-foto-berita=? WHERE id=?";
            const [rows, fields] = await pool.query(sql, [judul,deskripsi,pembuat,tanggalpembuatan,foto,kategori,deskripsifoto,id])
            res.json({
                status: "success",
                message: "berita berhasil diupdate"
            })
        }catch(error){
            console.log(error)
            res.json({
                status: "error",
            })
        }
    },
    delete: async(req, res) => {
        try{
            const {id}= req.params;
            const sql='DELETE FROM berita WHERE id=?';
            const [rows, fields] = await pool.query(sql, [id])
            res.json({
                status: "success",
                message: "berita berhasil dihapus"
            })
        }catch(error){
            console.log(error)
            res.json({
                status: "error",
            })
        }
    }
}

module.exports = postController;