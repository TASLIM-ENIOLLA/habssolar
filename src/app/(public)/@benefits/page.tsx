"use client";

import { Fragment } from "react";

import { Benefit } from "./types";
import { benefits } from "./props";
import { BenefitItem } from "./components";

export default function Page() {
	return (
		<section className="py-20">
			<div className="container">
				<div className="space-y-20">
					<div className="text-center">
						<h4 className="text-2xl font-bold">
							<span className="capitalize text-foreground dark:text-background">
								product benefits
							</span>
						</h4>
						<p className="text-lg font-medium">
							<span className="sentence text-slate-600">
								priviledge you get to enjoy while shopping with us
							</span>
						</p>
					</div>
					<div className="grid gap-10 grid-cols-12">
						{benefits.map((props: Benefit, index: number) => (
							<Fragment key={index}>
								<div className="col-span-12 md:col-span-6">
									<BenefitItem {...props} />
								</div>
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}