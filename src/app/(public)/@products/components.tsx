"use client";

import { Fragment, useContext } from "react";

import { useRouter } from "next/navigation";

import Product from "@/components/Shop/Product";

import { OrderContext } from "../context";

import { GetProduct } from "./types";

export function ProductList({ products }: { products: GetProduct[] }) {
	const router = useRouter();

	const [_, updateTotalParams]: any = useContext(OrderContext);

	console.log(_);
	
	return (
		<div className="space-y-10">
			{products.map((props: GetProduct, index: number) => (
				<Fragment key={index}>
					<Product
						{...props}

						onSelect={({ id, price }) => {
							updateTotalParams("id", id);
							updateTotalParams("price", price);

							router.push("#order-form");
						}}
					/>
				</Fragment>
			))}
		</div>
	);
}