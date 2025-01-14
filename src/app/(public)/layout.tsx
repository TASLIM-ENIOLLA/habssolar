import { LayoutProps } from "./types";

export default function Layout({ hero, header, footer, benefits, products, children, warning, orderForm, howToOrder }: LayoutProps) {
	return (
		<body>
			<main className="mx-auto max-w-5xl">
				{header}
				{hero}
				{benefits}
				{products}
				{howToOrder}
				{warning}
				{orderForm}
				{footer}
			</main>
		</body>
	);
}