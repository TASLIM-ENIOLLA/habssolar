"use server";

import { Suspense } from "react";

import { Form } from "./components";
import { getWattageNPrice } from "./actions";

export default async function Page() {
	const wattageNPrice = await getWattageNPrice();

	return (
		<section id="order-form" className="py-20">
			<div className="container">
				<div className="space-y-20">
					<div className="text-center">
						<h4 className="text-2xl font-bold">
							<span className="capitalize text-foreground dark:text-background">
								customer information
							</span>
						</h4>
						<p className="text-lg font-medium">
							<span className="sentence text-slate-600">
								kinldy fill the form below to place your order
							</span>
						</p>
					</div>
					<Suspense fallback={null}>
						<Form wattageNPrice={wattageNPrice} />
					</Suspense>
				</div>
			</div>
		</section>
	);
}