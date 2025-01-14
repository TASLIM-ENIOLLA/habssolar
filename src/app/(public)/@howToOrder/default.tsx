"use client";

import { Fragment } from "react";

import { Instruction } from "./types";
import { instructions } from "./props";
import { InstructionItem } from "./components";

export default function Page() {
	return (
		<section className="py-20">
			<div className="container">
				<div className="space-y-20">
					<div className="text-center">
						<h4 className="text-2xl font-bold">
							<span className="capitalize text-foreground dark:text-background">
								how to order
							</span>
						</h4>
						<p className="text-lg font-medium">
							<span className="sentence text-slate-600">
								we&apos;re exited your going to make an order
							</span>
						</p>
					</div>
					<div className="grid gap-10 grid-cols-12">
						{instructions.map((props: Instruction, index: number) => (
							<Fragment key={index}>
								<div className="col-span-12 md:col-span-6w">
									<InstructionItem {...props} />
								</div>
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}