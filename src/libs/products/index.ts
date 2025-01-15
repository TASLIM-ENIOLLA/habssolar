import { data } from "./data";

export function getProducts() {
	return data;
}

export function getProduct(id: string) {
	return data.reduce((accumulator: any, current: any) => {
		if(current.id === id) {
			return current;
		}

		return null;
	}, null);
}