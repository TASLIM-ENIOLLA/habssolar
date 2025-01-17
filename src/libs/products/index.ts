import { data } from "./data";

export function getProducts() {
	return data;
}

export function getProduct(id: string) {
	return data.find((product) => {
		return product?.id === id;
	});
}