// const express = require('express');
// const dotenv = require('dotenv').config
// const cors = require('cors');
// const app = express();
// require('dotenv').config();

// const postRouter = require('./routes/post.router');

// app.use(express.urlencoded({ extended: false }));
// app.use(cors());
// app.use(express.json());

// app.use("/api/v1/posts", postRouter);

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}.`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint untuk menangani pengiriman email dari formulir
app.post('/submit-email', (req, res) => {
    const email = req.body.email;

    // Lakukan apa yang diperlukan dengan email (contoh: simpan ke database)
    console.log(`Email yang diterima: ${email}`);

    // Kirim respons ke klien
    res.status(200).json({ message: 'Email berhasil diterima' });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});


// Jalankan server pada port tertentu
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
