"use server";

import { getProducts } from "@/libs/products";

import { GetProduct } from "./types";

// import Pocketbase from "@/libs/pocketbase";

// export async function getProducts(): Promise<GetProduct[]> {
// 	return (await Pocketbase.collection("products").getFullList({ sort: "-updated" }))
// 	.map((product: any) => {
// 		const { id, images, collectionId, ...otherProps } = product;

// 		return {
// 			...otherProps,

// 			id, collectionId,
// 			images: images.map((fileName: string) => {
// 				return `${Pocketbase.baseURL}/api/files/${collectionId}/${id}/${fileName}`;
// 			})
// 		}
// 	});
// }

export async function getProductList(): Promise<GetProduct[]> {
	return getProducts();
}