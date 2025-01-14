import { Sun, Blocks, PlugZap, Droplet, HousePlug, Hourglass, Lightbulb, UtilityPole, SlidersHorizontal } from "lucide-react";

import { Benefit } from "./types";

export const benefits: Benefit[] = [
	{
		Icon: PlugZap,
		text: "automatic daylight charging"
	},
	{
		Icon: Lightbulb,
		text: "automatic light at night"
	},
	{
		Icon: Sun,
		text: "100% solar: no electricity needed"
	},
	{
		Icon: Droplet,
		text: "waterproof and dustproof"
	},
	{
		Icon: Hourglass,
		text: "8-12 hours operation time"
	},
	{
		Icon: HousePlug,
		text: "suitable for home, school, streets e.t.c. illumination"
	},
	{
		Icon: Blocks,
		text: "easy setup and installation"
	},
	{
		Icon: SlidersHorizontal,
		text: "remote control module"
	},
	{
		Icon: UtilityPole,
		text: "free installation stand"
	},
];