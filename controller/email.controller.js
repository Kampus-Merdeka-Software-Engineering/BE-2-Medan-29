const emailController = {
    subscribeToNewsletter: async (req, res) => {
        try {
            // Ambil data email dari body request
            const { email } = req.body;

            // Lakukan apa yang diperlukan dengan email, misalnya, simpan ke database
            // atau kirim ke layanan email seperti Mailchimp
            console.log('Email received:', email);

            // Kirim respons ke frontend
            res.json({ status: 'success', message: 'Berhasil berlangganan newsletter.' });
        } catch (error) {
            console.error('Error processing email:', error);
            res.status(500).json({ status: 'error', message: 'Internal Server Error' });
        }
    },
};

module.exports = emailController;
