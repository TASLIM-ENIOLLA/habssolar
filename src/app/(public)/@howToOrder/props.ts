import { Sun, Blocks, PlugZap, Droplet, HousePlug, Hourglass, Lightbulb, UtilityPole, SlidersHorizontal } from "lucide-react";

import { Instruction } from "./types";

export const instructions: Instruction[] = [
	{
		Icon: PlugZap,
		text: "fill the form with accurate information"
	},
	{
		Icon: Lightbulb,
		text: "our customer support will contact you via phone call/whatsapp to confirm your order"
	},
	{
		Icon: Sun,
		text: "our delivery agents near your location then contacts you to make delivery arrangement"
	},
	{
		Icon: Droplet,
		text: "the product is delivered to your doorstep"
	},
	{
		Icon: Hourglass,
		text: "we accept payment after product confirmation/testing"
	},
];