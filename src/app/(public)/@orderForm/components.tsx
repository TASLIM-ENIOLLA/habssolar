"use client";

import { Fragment, useContext, useEffect, useActionState } from "react";

import { useRouter } from "next/navigation";

import { postOrder } from "./actions";

import { OrderContext } from "../context";

export function Form({ wattageNPrice }: { wattageNPrice: null | { value: string; option: string, price: number }[]}) {
	const router = useRouter();

	const [formState, formAction, isPending] = useActionState(postOrder, null);

	const [priceTotalParams, updateTotalParams]: any = useContext(OrderContext);

	useEffect(() => {
		if(formState) {
			const { success, message } = formState;

			alert(message);

			if(success) {
				router.refresh();
			}
		}
	}, [router, formState]);

	return (
		<form action={formAction} className="grid gap-x-5 gap-y-5 grid-cols-12">
			<div className="col-span-12 md:col-span-6">
				<div className="space-y-2">
					<p className="text-base font-semibold">
						<span className="capitalize">
							first name *
						</span>
					</p>
					<input required
						type="text"
						name="firstName"
						defaultValue={formState?.formData.get("firstName") as string || ""}
						className="p-3 w-full block border rounded-lg"
					/>
				</div>
			</div>
			<div className="col-span-12 md:col-span-6">
				<div className="space-y-2">
					<p className="text-base font-semibold">
						<span className="capitalize">
							last name *
						</span>
					</p>
					<input required
						type="text"
						name="lastName"
						defaultValue={formState?.formData.get("lastName") as string || ""}
						className="p-3 w-full block border rounded-lg"
					/>
				</div>
			</div>
			<div className="col-span-12">
				<div className="space-y-2">
					<p className="text-base font-semibold">
						<span className="capitalize">
							address *
						</span>
					</p>
					<input required
						type="text"
						name="address"
						defaultValue={formState?.formData.get("address") as string || ""}
						className="p-3 w-full block border rounded-lg"
					/>
				</div>
			</div>
			<div className="col-span-12 md:col-span-6">
				<div className="space-y-2">
					<p className="text-base font-semibold">
						<span className="capitalize">
							city *
						</span>
					</p>
					<input required
						type="text"
						name="city"
						defaultValue={formState?.formData.get("city") as string || ""}
						className="p-3 w-full block border rounded-lg"
					/>
				</div>
			</div>
			<div className="col-span-12 md:col-span-6">
				<div className="space-y-2">
					<p className="text-base font-semibold">
						<span className="capitalize">
							state / province *
						</span>
					</p>
					<input required
						type="text"
						name="state"
						defaultValue={formState?.formData.get("state") as string || ""}
						className="p-3 w-full block border rounded-lg"
					/>
				</div>
			</div>
			<div className="col-span-12">
				<div className="space-y-2">
					<p className="text-base font-semibold">
						<span className="capitalize">
							phone number *
						</span>
					</p>
					<input required
						type="text"
						name="phone"
						defaultValue={formState?.formData.get("phone") as string || ""}
						className="p-3 w-full block border rounded-lg"
					/>
				</div>
			</div>
			<div className="col-span-12">
				<div className="space-y-2">
					<p className="text-base font-semibold">
						<span className="capitalize">
							whatsapp number *
						</span>
					</p>
					<input required
						type="text"
						name="whatsAppNo"
						defaultValue={formState?.formData.get("whatsAppNo") as string || ""}
						className="p-3 w-full block border rounded-lg"
					/>
				</div>
			</div>
			<div className="col-span-12">
				<div className="space-y-2">
					<p className="text-base font-semibold">
						<span className="capitalize">
							wattage and price *
						</span>
					</p>
					<select
						name="productNPrice"
						value={priceTotalParams.id || formState?.formData.get("productNPrice") as string}
						className="p-3 w-full block border rounded-lg bg-transparent"
						onChange={(event: any) => {
							event.preventDefault();

							const select = event.target;
							const selectIndex = select.selectedIndex;
							const selectOption = select.options[selectIndex];

							updateTotalParams("id", select.value);
							updateTotalParams("price", selectOption.dataset.price);
						}}
					>
						<option value="">Select wattage and price</option>
						{wattageNPrice?.map(({ value, option, price }: { value: string, option: string, price: number }, index: number) => (
							<Fragment key={index}>
								<option data-price={price} value={value}>{option}</option>
							</Fragment>
						))}
					</select>
				</div>
			</div>
			<div className="col-span-12">
				<div className="space-y-2">
					<p className="text-base font-semibold">
						<span className="capitalize">
							quantity (minimum of 2 pcs) *
						</span>
					</p>
					<select
						required
						name="quantity"
						defaultValue={formState?.formData.get("quantity") as string || "2"}
						className="p-3 w-full block border rounded-lg bg-transparent"
						onChange={(event: any) => {
							event.preventDefault();

							updateTotalParams("quantity", event.target.value);
						}}
					>
						<option value="">Select product quantity</option>
						{getQuantityRange(2, 10).map((quantity: number) => (
							<Fragment key={quantity}>
								<option value={quantity}>{quantity}</option>
							</Fragment>
						))}
					</select>
				</div>
			</div>
			<div className="col-span-12">
				<div className="space-y-2">
					<p className="text-base font-semibold">
						<span className="capitalize">
							Price total
						</span>
					</p>
					<input required
						disabled
						type="text"
						name="priceTotal"
						defaultValue={new Intl.NumberFormat("en-NG", {
							style: "currency",
							currency: "NGN",
							minimumFractionDigits: 2,
							maximumFractionDigits: 2,
						}).format(priceTotalParams.price * priceTotalParams.quantity)}
						className="p-3 w-full block border rounded-lg"
					/>
				</div>
			</div>
			<div className="col-span-12">
				<div className="space-y-2">
					<p className="text-base font-semibold">
						<span className="capitalize">
							additional information
						</span>
					</p>
					<textarea
						rows={5}
						name="additionalInfo"
						defaultValue={formState?.formData.get("additionalInfo") as string || ""}
						className="p-3 w-full block border rounded-lg resize-none"
					></textarea>
				</div>
			</div>
			<div className="col-span-12">
				<div className="pt-10">
					<button type="submit" className="py-5 px-10 rounded-lg bg-green-600">
						<span className="font-bold text-white uppercase">
							{isPending ? "sending order..." : "place order"}
						</span>
					</button>
				</div>
			</div>
		</form>
	);
}

export function getQuantityRange(start: number, end: number): number[] {
	return Array.from({ length: end - start + 1 }, (_: number, index: number) => {
		return start + index;
	})
}