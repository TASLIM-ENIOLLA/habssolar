import Link from "next/link";
import Image from "next/image";

import { ShoppingCart } from "lucide-react";

import { ProductProps } from "./types";

export default function Product({ id, name, images, price, description }: ProductProps) {
	const currencyFormat = new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: "NGN",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	return (
		<article className="border rounded-lg overflow-hidden">
			<div className="h-96 relative">
				<Image
					fill={true}
					src={images[0]}
					alt={description}
					style={{
						objectFit: "cover",
						// objectContain: "center",
					}}
				/>
			</div>
			<div className="p-5 border-t">
				<p className="text-3xl font-bold">
					<span className="sentence">
						{name}
					</span>
				</p>
				<h4 className="text-lg font-semibold">
					<span className="sentence text-green-600">
						{currencyFormat.format(price)}
					</span>
					&nbsp;-&nbsp;
					<span className="sentence text-red-600 line-through">
						{currencyFormat.format(price * 1.25)}
					</span>
				</h4>
				<div className="pt-7">
					<Link href={`?productID=${id}#order-form`} className="p-3 w-full block rounded-lg bg-green-600">
						<div className="flex gap-3 items-center justify-center">
							<div className="flex-none">
								<ShoppingCart
									size={20}
									strokeWidth={2}
									className="text-white"
								/>
							</div>
							<div className="flex-none">
								<p className="text-lg font-bold">
									<span className="capitalize text-white">
										buy now
									</span>
								</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</article>
	);
}