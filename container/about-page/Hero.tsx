"use client";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { Eyes } from "@/components";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x relative">
						<div 
							className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10 z-0"
							style={{
								backgroundImage: "url('/about%20bg.gif')",
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat'
							}}
						/>
						<div className="relative z-10">
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								WE ARE <br />
								<div className="flex items-center gap-[5px]">
									<motion.span
										initial={{ width: 0 }}
										animate={{ width: "auto" }}
										transition={{
											ease: [0.86, 0, 0.07, 0.995],
											duration: 1,
											delay: 1.5,
										}}>
										<Image
											width={200}
											height={80}
											src={logo}
											alt="BrandBoosters Logo"
											className="w-auto h-auto max-h-[100px] object-contain"
										/>
									</motion.span>
									<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
										BRAND BOOSTERS
									</h1>
								</div>
							</h1>
						</div>
					</div>
					<div className="w-full border-t border-[#21212155] pt-[20px]">
						<div className="w-full flex justify-between  padding-x sm:flex-col xm:flex-col gap-[20px]">
							<div className="w-[10%] sm:w-full xm:w-full">
								<h3 className="text-2xl font-bold text-secondry font-NeueMontreal">
									About us:
								</h3>
							</div>
							<div className="w-[48%] flex justify-between sm:w-full xm:w-full sm:flex-col xm:flex-col gap-[20px]">
								<div className="w-[65%] flex flex-col gap-y-[40px] sm:w-full xm:w-full">									
									<div 
										className="bg-white bg-opacity-90 border border-gray-200 rounded-xl p-12 py-8 shadow-md hover:shadow-lg transition-all duration-300 min-h-[100px] cursor-pointer active:shadow-2xl active:shadow-blue-500/50 active:border-blue-300 active:scale-[0.98]"
										onClick={() => {
											// Add glow effect on click
											const element = document.activeElement;
											if (element) {
												element.classList.add('shadow-2xl', 'shadow-blue-500/50', 'border-blue-300');
												setTimeout(() => {
													element.classList.remove('shadow-2xl', 'shadow-blue-500/50', 'border-blue-300');
												}, 500);
											}
										}}
									>
										<p className="paragraph font-NeueMontreal text-secondry text-xl leading-loose">
											At BrandBoosters, we believe in the power of
											<br /> compelling visuals and strategic storytelling.
											<br />
											In today's digital landscape, your brand needs
											<br /> more than just words - it needs an experience <br />
											that captivates and converts.
										</p>
									</div>
									<div 
										className="bg-white bg-opacity-90 border border-gray-200 rounded-xl p-12 py-8 shadow-md hover:shadow-lg transition-all duration-300 min-h-[100px] cursor-pointer active:shadow-2xl active:shadow-blue-500/50 active:border-blue-300 active:scale-[0.98]"
										onClick={() => {
											// Add glow effect on click
											const element = document.activeElement;
											if (element) {
												element.classList.add('shadow-2xl', 'shadow-blue-500/50', 'border-blue-300');
												setTimeout(() => {
													element.classList.remove('shadow-2xl', 'shadow-blue-500/50', 'border-blue-300');
												}, 500);
											}
										}}
									>
										<p className="paragraph font-NeueMontreal text-secondry text-xl leading-loose">
											We believe powerful branding goes beyond logos
											<br />
											and color schemes - it's about creating
											<br /> meaningful connections. That's why we
											<br />
											founded BrandBoosters: to help businesses
											<br /> communicate their unique value through <br />
											memorable and effective marketing
											<br />
											opening presentations.
										</p>
									</div>
								</div>
								<div className="flex w-fit h-fit gap-[5px] group">
									<div className="rounded-[50px] border border-[#21212199] group-hover:bg-secondry  py-[3px] px-[12px] cursor-pointer">
										<Link
											href="/presentation"
											className="paragraph font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all duration-200 ease-in">
											Our Work
										</Link>
									</div>
									<div className="w-[35px] flex items-center justify-center h-[35px] border border-[#21212199] rounded-[50px] p-[12px]  group-hover:bg-secondry transition-all duration-200 ease-in cursor-pointer sm:hidden xm:hidden">
										<p className="paragraph font-normal text-secondry group-hover:text-background">
											<ArrowUpRight strokeWidth={1.25} />
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="padding-y"
				data-scroll
				data-scroll-speed="-.1">
				<Eyes className="w-[300px] h-[300px] md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px] xm:w-[150px] xm:h-[150px] sm:flex-col xm:flex-col" />
			</div>
			<div className="padding-x">
				<h1 className="sub-heading font-medium font-NeueMontreal text-secondry">
					We transform businesses with powerful
					<br className="sm:hidden xm:hidden" /> branding and digital marketing solutions.
				</h1>
			</div>
		</section>
	);
}
