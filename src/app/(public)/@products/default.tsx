"use server";

import { Fragment } from "react";

import Product from "@/components/Shop/Product";

import { GetProduct } from "./types";
import { getProductList } from "./actions";

export default async function Page() {
	const products = await getProductList();

	return (
		<section className="py-20">
			<div className="container">
				<div className="space-y-20">
					<div className="text-center">
						<h4 className="text-2xl font-bold">
							<span className="capitalize text-foreground dark:text-background">
								our products
							</span>
						</h4>
						<p className="text-lg font-medium">
							<span className="sentence text-slate-600">
								checkout our products and prices
							</span>
						</p>
					</div>
					<div className="space-y-10">
						{products.map((props: GetProduct, index: number) => (
							<Fragment key={index}>
								<Product {...props} />
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}