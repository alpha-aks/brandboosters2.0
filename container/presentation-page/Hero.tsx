import { Eyes } from "@/components";

export default function Hero() {
	return (
		<section className="w-full padding-x bg-about h-[80vh] flex flex-col justify-between">
			<div className="w-full pt-[100px] pb-[20px]">
				<div className="w-fit relative">
					<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
						Service
						<sup className="paragraph font-normal absolute top-[20px] ml-[10px] font-NeueMontreal">
							(9)
						</sup>
					</h1>
				</div>
			</div>

			<div className="flex-1 flex items-center justify-center pb-8 relative z-10">
				<div className="flex items-center justify-center">
					<Eyes className="w-[300px] h-[300px] md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px] xm:w-[150px] xm:h-[150px] sm:flex-col xm:flex-col relative z-10" />
				</div>
			</div>
		</section>
	);
}
