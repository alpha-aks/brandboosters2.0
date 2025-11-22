"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { clientsItem } from "@/constants";
import { Button, Ratings } from "@/components";
import { motion, AnimatePresence } from "framer-motion";

export default function Clients() {
	const items = clientsItem.slice(0, 3);
	const [activeAccordion, setActiveAccordion] = useState(items[0]?.id);
	const toggleAccordion = (itemId: any) => {
		setActiveAccordion((prev) => (prev === itemId ? null : itemId));
	};

	
}
