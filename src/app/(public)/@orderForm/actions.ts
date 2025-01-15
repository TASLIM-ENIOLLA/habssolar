"use server";

import Pocketbase from "@/libs/pocketbase";
import { transporter } from "@/libs/mailer";

import { MakeOrder } from "./types";

export async function getWattageNPrice(): Promise<null | { value: string; option: string }[]> {
	const currencyFormat = new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: "NGN",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	try {
		const data = await Pocketbase.collection("products").getFullList({ sort: "-updated" });

		return data.map(({ id, name, price }) => {
			return {
				value: id,
				option: `${name} - ${currencyFormat.format(price)}`
			}
		});
	}
	catch(error: unknown) {
		console.error(error);

		return null;
	}
}

export async function postOrder(currentState: MakeOrder, formData: FormData): Promise<MakeOrder> {
	const formObject = Object.fromEntries(formData);

	try {
		console.log({ formObject });

		await transporter.sendMail({
			from: "Habs E-commerce <Automated Ordering System>",
			to: process.env.GMAIL_ADDRESS,
			subject: "New Order!",
			html: `
				<html>
					<head>
					</head>
					<body style="max-width:600px; margin: auto;">
						<h1>You have a new order!</h1>
						<h5>
							${formObject.firstName} ${formObject.lastName} placed an order for a product listed below.<br />
							Delivery address:- ${formObject.address}, ${formObject.city} ${formObject.state}.<br />
							Phone number:- ${formObject.phone}.<br />
							WhatsApp number:- ${formObject.whatsAppNo}.<br />
							<hr />
						</h5>
					</body>
				</html>
			`
		});

		return {
			formData,
			success: true,
			message: "All went well"
		}
	}
	catch(error: unknown) {
		console.error(error);

		return {
			formData,
			success: false,
			message: "An error occured, please try again",
		};
	}
}