"use client";

import { OrderContext } from "./context";

import { useState } from "react";

export default function Layout({ hero, header, footer, benefits, products, warning, orderForm, howToOrder }: any) {
	const [priceTotalParams, setPriceTotalParams] = useState <{
		id: string;
		price: number;
		quantity: number;
	}> ({
		id: "",
		price: 0,
		quantity: 2,
	});

	function updateTotalParams(param: string, value: number): void {
		setPriceTotalParams((priceTotalParams) => ({
			...priceTotalParams,
			[param]: value
		}));
	}

	return (
		<OrderContext.Provider value={[priceTotalParams, updateTotalParams]}>
			<main className="mx-auto max-w-5xl">
				{header}
				{hero}
				{benefits}
				{products}
				{howToOrder}
				{warning}
				{orderForm}
				{footer}
			</main>
		</OrderContext.Provider>
	);
}