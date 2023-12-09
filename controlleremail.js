import config from "../config.js";
import EmailsDB from "../models/EmailsDB.js";
import SendEmail from "../services/sendEmail.js";

export async function handlePost(req, res) {
	if (req.headers.authorization !== config.API_ACCESS_TOKEN) {
		return res.status(401).json({ message: "Access denied" });
	}

	const emailData = {
		status: "pending",
		from: req.body.From, // String
		to: req.body.To, // Array of objects [{name, email}]
		subject: req.body.Subject, // String
		text: req.body.Text, // String
	};

	const result = await SendEmail(emailData);
	let responseInfo = { status: 0, message: "" };

	if (!result) {
		// Kalo ada email gagal terkirim
		emailData.status = "failed";
		responseInfo.status = 500;
		responseInfo.message = "Failed sending email";
	} else {
		// Kalo email sukses kekirim
		emailData.status = "sent";
		responseInfo.status = 200;
		responseInfo.message = "Email sent successfully";
	}

	// Add a date to the email data (pt-PT, dd-mm-yyyy hh:mm:ss)
	emailData.date = new Date().toLocaleString("pt-PT", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	});

	// Store the information related to the email sent in the database
	const db = new EmailsDB();
	await db.storeEmail(emailData);
	return res.status(responseInfo.status).json({ message: responseInfo.message });
}
