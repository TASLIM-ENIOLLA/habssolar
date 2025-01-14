"use client";

import { BenefitItemProps } from "./types";

export function BenefitItem({ Icon, text }: BenefitItemProps) {
	return (
		<article className="flex gap-5 items-center">
			<div className="flex-none">
				<div className="p-5 bg-red-100 rounded-lg">
					<Icon size={25} strokeWidth={1.5} className="mx-auto" />
				</div>
			</div>
			<div className="flex-1">
				<p className="text-lg font-medium">
					<span className="sentence text-slate-600">
						{text}
					</span>
				</p>
			</div>
		</article>
	);
}