export default function Layout({ hero, header, footer, benefits, products, warning, orderForm, howToOrder }: any) {
	return (
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
	);
}