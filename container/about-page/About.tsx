import { backgroundAbout, sunlight, ry, om, atharva, nishant } from "@/public";
import { BackgroundImg } from "@/components";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function About() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	const teamMembers = [
		{
			id: 1,
			name: 'Ladkibazz',
			role: 'Raat ko ladkiyo ko message karne wala',
			image: sunlight
		},
		
		{
			id: 2,
			name: 'Atharva',
			role: 'Grapic designer/Web developer',
			image: atharva
		},
		{
			id: 3,
			name: 'Nishant',
			role: 'Web developer',
			image: nishant
		},
		{
			id: 4,
			name: 'Rishabh',
			role: 'Email marketing',
			image: ry
		},
		{
			id: 5,
			name: 'Om',
			role: 'Video editor/motion grapic ',
			image: om
		}
	];

	// Auto-advance the carousel
	useEffect(() => {
		if (!isAutoPlaying) return;
		
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
		}, 4000);
		
		return () => clearInterval(interval);
	}, [isAutoPlaying]);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
		setIsAutoPlaying(false);
		setTimeout(() => setIsAutoPlaying(true), 8000);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
		setIsAutoPlaying(false);
		setTimeout(() => setIsAutoPlaying(true), 8000);
	};
	return (
		<section className="w-full padding-y">
			<div className="w-full flex flex-col bg-background">
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
						<div>
							<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
								We are BrandBoosters:
							</h3>
						</div>
						<div className="w-[48%] sm:w-full xm:w-full flex justify-between">
							<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-y-[40px]">
								<div className="flex flex-col gap-y-[20px]">
									<p className="paragraph font-NeueMontreal text-secondry">
										A team of creative visionaries, strategists, and
										<br /> marketing experts who collaborate to build
										<br /> powerful brand identities and digital <br />
										experiences that connect with audiences
										<br />
										and drive real results.
									</p>
								</div>
								<div className="flex flex-col gap-y-[20px]">
									<p className="paragraph font-NeueMontreal text-secondry">
										We're on a mission to become the most
										<br />
										trusted and results-driven marketing
										<br /> partner for businesses looking to make
										<br />
										a lasting impact.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Team Slider Section */}
			<div className="padding-x pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[40px] xm:pt-[40px]">
				<div className="relative w-full max-w-7xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#212121] font-FoundersGrotesk">Meet Our Team</h2>
					
				<div className="relative h-[500px] w-full overflow-hidden">
					{/* Circular Progress Indicator */}
					<div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
						<div className="relative w-16 h-16">
							{/* Background Circle */}
							<svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
								<circle
									cx="32"
									cy="32"
									r="28"
									stroke="#e5e7eb"
									strokeWidth="4"
									fill="none"
								/>
								{/* Progress Circle */}
								<motion.circle
									cx="32"
									cy="32"
									r="28"
									stroke="#212121"
									strokeWidth="4"
									fill="none"
									strokeLinecap="round"
									initial={{ strokeDasharray: "0 176" }}
									animate={{ 
										strokeDasharray: `${(currentIndex + 1) / teamMembers.length * 176} 176`
									}}
									transition={{ duration: 0.6, ease: "easeInOut" }}
								/>
							</svg>
							{/* Counter Text */}
							<div className="absolute inset-0 flex items-center justify-center">
								<span className="text-sm font-bold text-[#212121]">
									{currentIndex + 1}/{teamMembers.length}
								</span>
							</div>
						</div>
					</div>

					<div className="absolute inset-0 flex items-center justify-center gap-6 p-6">
						{/* Show 3 images with position-based transitions */}
						<AnimatePresence mode="popLayout">
							{[-1, 0, 1].map((offset) => {
								const memberIndex = (currentIndex + offset + teamMembers.length) % teamMembers.length;
								const member = teamMembers[memberIndex];
								const isCenter = offset === 0;
								const isLeft = offset === -1;
								const isRight = offset === 1;
								
								return (
									<motion.div 
										key={memberIndex}
										layout
										initial={isRight ? { opacity: 0, x: 200, scale: 0.8 } : undefined}
										animate={{ 
											opacity: isLeft ? 0.5 : 1, 
											x: 0, 
											scale: isCenter ? 1.25 : 1,
											transition: { duration: 0.6, ease: "easeInOut" }
										}}
										exit={isLeft ? { opacity: 0, x: -200, scale: 0.8 } : undefined}
										transition={{ duration: 0.6, ease: "easeInOut" }}
										className={`flex flex-col items-center cursor-pointer ${
											isCenter ? 'z-10' : 'opacity-75 hover:opacity-90'
										}`}
										onClick={() => {
											if (isRight) {
												nextSlide();
											} else if (isLeft) {
												prevSlide();
											}
										}}
									>
										{/* Image */}
										<div className={`rounded-full overflow-hidden border-4 shadow-lg transition-all duration-300 ${
											isCenter 
												? 'w-80 h-80 border-[#212121]' 
												: 'w-60 h-60 border-gray-200 hover:border-gray-300'
										}`}>
											<Image 
												src={member.image} 
												alt={member.name}
												width={320}
												height={320}
												className="w-full h-full object-cover object-[center_10%] scale-135"
											/>
										</div>
										
										{/* Name and Role - Only show for center image */}
										{isCenter && (
											<div className="text-center mt-6">
												<h3 className="text-2xl font-bold text-[#212121] font-FoundersGrotesk">
													{member.name}
												</h3>
												<p className="text-lg font-medium text-secondry font-NeueMontreal">
													{member.role}
												</p>
											</div>
										)}
									</motion.div>
								);
							})}
						</AnimatePresence>
					</div>						{/* Navigation Arrows */}
						<button 
							onClick={prevSlide}
							className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#212121] p-3 rounded-full shadow-lg z-10 transition-all hover:scale-110 border border-gray-200"
							aria-label="Previous team members"
						>
							<ChevronLeft size={24} />
						</button>
						<button 
							onClick={nextSlide}
							className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#212121] p-3 rounded-full shadow-lg z-10 transition-all hover:scale-110 border border-gray-200"
							aria-label="Next team members"
						>
							<ChevronRight size={24} />
						</button>

					</div>
				</div>
			</div>
		</section>
	);
}
