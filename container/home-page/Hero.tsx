"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { awwwards, brandLogo } from "@/public";

export default function Hero() {
	return (
		<section
			className="w-full h-screen sm:mb-[-10px] xm:mb-[-10px]"
			data-scroll
			data-scroll-speed="-.3">
			<div className="w-full h-full flex flex-col justify-between">
				<div />
				<div className="w-full flex flex-col justify-between h-[75vh] sm:h-[85vh] xm:h-[85vh]">
					<div className="w-full flex justify-between gap-[20px] pl-[50px] md:pl-[30px] sm:pl-[20px] xm:pl-[20px]">
						<div className="flex-1">
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								We Boost <br />
								<div className="flex items-baseline gap-2">
									<motion.span
										initial={{ width: 0 }}
										animate={{ width: "auto" }}
										transition={{
											ease: [0.86, 0, 0.07, 0.995],
											duration: 1,
											delay: 1.5,
										}}
										className="leading-[130px]">
										<Image
											src={brandLogo}
											alt="Brand Boosters logo"
											className="w-[80px] h-auto object-contain mt-2"
											sizes="(max-width: 768px) 60px, 80px"
										/>
									</motion.span>
									<motion.span
										className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: 0.3 }}
									>
										YOUR Brand's
									</motion.span>
								</div>
								SOCIAL PRESENT
							</h1>
						</div>
						<div className="flex w-[550px] items-center justify-center ml-8">
							<video
								autoPlay
								loop
								muted
								playsInline
								className="max-w-full max-h-[420px] object-contain"
							>
								<source
									src="https://alphas.cdn.prismic.io/alphas/aRYZp7pReVYa4cec_Untitleddesign-5.mp4"
									type="video/mp4"
								/>
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
					<div className="w-full flex flex-col h-[22vh] border-t border-[#21212155] py-[20px] sm:mb-[80px] xm:mb-[80px] gap-[30px]">
						<div className="flex justify-between items-center padding-x gap-[20px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
							<div className="w-[50%] xm:w-full sm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry">
									WE HELP YOU BUILD YOUR BRAND
								</p>
							</div>
							<div className="w-[50%] xm:w-full sm:w-full flex justify-between xm:flex-col xm:items-start sm:flex-col sm:items-start gap-[20px]">
								<div>
									<p className="paragraph font-NeueMontreal text-secondry">
										WE BOOST YOUR BUSINESS
									</p>
								</div>
								<div className="flex items-center gap-[5px] group">
									<div className="rounded-[50px] border border-[#21212199] group-hover:bg-secondry  py-[3px] px-[12px] cursor-pointer">
										<Link
											className="paragraph font-NeueMontreal text-secondry uppercase group-hover:text-background transition-all  transform duration-[0.3s] ease-[.215,.61,.355,1]"
											href="/contact">
											CONNECT US
										</Link>
									</div>
									<div className="w-[33px] flex items-center justify-center h-[33px] border border-[#21212199] rounded-full p-[1px] sm:p-[30px] xm:pb-[30px]  group-hover:bg-secondry transition-all transform duration-[0.3s] ease-[.215,.61,.355,1] cursor-pointer xm:hidden sm:hidden">
										<p className="font-normal text-secondry group-hover:text-background">
											<ArrowUpRight
												size={24}
												strokeWidth={1.25}
											/>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full flex items-center overflow-hidden justify-center xm:hidden sm:hidden">
							<motion.p
								initial={{ y: "-100%", opacity: 0 }}
								animate={{ y: "100%", opacity: 0.5 }}
								transition={{
									duration: 1.8,
									repeat: Infinity,
									ease: [0.3, 0.86, 0.36, 0.95],
								}}
								className="paragraph opacity-50 font-NeueMontreal text-secondry">
								scroll down
							</motion.p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}