"use server";

import { getProductList } from "./actions";
import { ProductList } from "./components";

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
					<ProductList products={products} />
				</div>
			</div>
		</section>
	);
}