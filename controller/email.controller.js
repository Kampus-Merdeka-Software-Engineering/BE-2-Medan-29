const emailController = {
    sendEmail: async (req, res) => {
        try {
            // Ambil data email dari body request
            const { email } = req.body;

            // Lakukan apa yang diperlukan dengan email, misalnya, kirim ke console
            console.log('Email received:', email);

            // Kirim respons ke frontend
            res.json({ status: 'success', message: 'Email received successfully.' });
        } catch (error) {
            console.error('Error processing email:', error);
            res.status(500).json({ status: 'error', message: 'Internal Server Error' });
        }
    },
};

module.exports = emailController;
