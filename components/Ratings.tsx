import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Rounded } from "@/components";
import { brand01, brand02, brand03 } from "@/public";

export default function Ratings() {
	const [open, setOpen] = useState(false);

	return (
		<div className="w-full flex justify-between sm:flex-col xm:flex-col gap-[20px]">
			<div className="w-[49.5%] sm:w-full xm:w-full justify-between h-[60vh] sm:h-[50vh] xm:h-[50vh] gap-[10px]">
				<div className="w-full h-full flex items-center justify-center rounded-[10px] bg-marquee relative">
					<Image
						src=""
						alt="brandImg"
						fill
						className="object-cover"
					/>
					<div className="absolute bottom-[35px] left-[25px] flex items-center justify-center border border-about px-[12px] py-[8px] cursor-pointer rounded-full">
						<Link
							className="xl:text-[18px] xl:leading-[18px] text-[14px] leading-[14px] text-about uppercase font-normal font-NeueMontreal tracking-wider"
							href={"/"}>
							team
						</Link>
					</div>
				</div>
			</div>
			<div className="w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col flex gap-[15px]">
				<div className="w-full flex items-center justify-center rounded-[10px] bg-secondry relative h-[60vh] sm:h-[50vh] xm:h-[50vh]">
					<Image
						src=
						alt="brandImg"
						width={150}
						height={150}
					/>
					<div className="absolute left-[25px] bottom-[35px] w-fit rounded-[50px] border border-white cursor-pointer">
						<Link
							className="xl:text-[18px] xl:leading-[18px] text-[14px] leading-[14px] font-NeueMontreal text-white uppercase tracking-wider"
							href="/services">
							<Rounded
								backgroundColor="#fff"
								className="">
								<p className="z-10 px-[12px] py-[8px] hover:text-black">
									rating 5.0 on clutch
								</p>
							</Rounded>
						</Link>
					</div>
				</div>
				<div className="w-full flex items-center justify-center rounded-[10px] bg-secondry relative h-[60vh] sm:h-[50vh] xm:h-[50vh] overflow-hidden" onClick={() => setOpen(true)}>
					<video
						className="w-full h-full object-cover"
						autoPlay
						loop
						muted
						playsInline
					>
						<source src="https://alphas.cdn.prismic.io/alphas/aRNmdbpReVYa4WYB_INTROVIDEO.mp4" type="video/mp4" />
					</video>
					<div className="absolute left-[25px] bottom-[35px] w-fit rounded-[50px] border border-white cursor-pointer">
						<Link
							className="xl:text-[18px] xl:leading-[18px] text-[14px] leading-[14px] font-NeueMontreal text-white uppercase tracking-wider"
							href="/services">
							<Rounded
								backgroundColor="#fff"
								className="">
								<p className="z-10 px-[12px] py-[8px] hover:text-black">
									buisness bootcamp alumini
								</p>
							</Rounded>
						</Link>
					</div>
				</div>

				{open && (
					<div className="fixed inset-0 z-50 backdrop-blur-md bg-black/60 flex items-center justify-center" onClick={() => setOpen(false)}>
						<div className="relative w-[92vw] max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
							<video className="w-full h-full object-contain" autoPlay loop controls playsInline>
								<source src="https://alphas.cdn.prismic.io/alphas/aRNmdbpReVYa4WYB_INTROVIDEO.mp4" type="video/mp4" />
							</video>
							<button
								onClick={() => setOpen(false)}
								className="absolute top-3 right-3 bg-white/80 text-black rounded-full px-3 py-1 text-sm">
								Close
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
