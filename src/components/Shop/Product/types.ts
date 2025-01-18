export type Product = {
	id: string;
	name: string;
	price: number;
	images: string[];
	description: string;
	
	rating?: number;
	quantity?: number;
}

export type ProductProps = Product & {
	onSelect?: (props: Product) => void;
}