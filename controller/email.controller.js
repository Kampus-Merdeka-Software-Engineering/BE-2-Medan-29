const EmailUserModel = require("../model/emailUserModel");
const nodeMailer = require("nodemailer");

class SubscriptionController{
    static async subscribe(req, res){
      const {email} = req.body;
      try {
        const [hasil] = await EmailUserModel.chekEmail(email);
        if (hasil.length > 0) {
          res.json({
            status: "error",
            message: "Email sudah terdaftar",
          });
        } else {
          await EmailUserModel.subscribeEmail(email);
          res.json({
            status: "success",
            message: "Email berhasil ditambahkan",
          });
        }
      } catch (error) {
        console.log(error);
        res.json({
          status: "error",
        });
      }
    }

    static async sendBerita(req, res){
      try{
        const [hasilBerita] = await EmailUserModel.getNews();
        const mengirimBerita = hasilBerita;

        const [hasilEmail] = await EmailUserModel.getEmailSubscribe();
        const mengirimEmail = hasilEmail.map(hasil => hasil.email);

        SubscriptionController.sendBeritaEmail(mengirimEmail, mengirimBerita);

        for (const berita of mengirimBerita) {
          await EmailUserModel.updateBerita(berita.id);
        }
        res.status(200).json({
          status: "success",
          message: "Berhasil mengirim berita",
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          status: "error",
        });
      }
    }

    static async getEmailSubscibe(){
      try {
        const [hasil] = await EmailUserModel.subscribeEmail();
        return hasil;
      }catch (error) {
        console.log(error);
      }
    }

    static async sendBeritaEmail(email, berita){
      const transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
          user: 'owenkalumata46@gmail.com',
          pass: '28oktober2003',
        },
      });

      email.forEach(email => {
        const mailOptions = {
          from: 'owenkalumata46@gmail.com',
          to: email,
          subject: 'Berita Terbaru',
          text: `Berita terbaru dari \n\n${berita.judul}`,
        }; 
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log(`Email sent: ${info.response}`);
          }
        }); 
      });
    }
  }
module.exports = SubscriptionController;  