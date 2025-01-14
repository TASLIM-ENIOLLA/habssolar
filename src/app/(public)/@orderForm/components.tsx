"use client";

import { Fragment, useState, useEffect, useActionState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { postOrder } from "./actions";

export function Form({ wattageNPrice }: any) {
	const router = useRouter();

	const searchParams = useSearchParams();
	const productID = searchParams.get("productID") || "";

	const [formState, formAction, isPending] = useActionState(postOrder, null);

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
						onChange={() => null}
						name="productNPrice"
						value={productID || formState?.formData.get("productNPrice") as string}
						className="p-3 w-full block border rounded-lg bg-transparent"
					>
						<option value="">Select wattage and price</option>
						{wattageNPrice.map(({ value, option }: any, index: number) => (
							<Fragment key={value}>
								<option value={value}>{option}</option>
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