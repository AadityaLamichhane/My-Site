import { NavigationBar } from "./NavBar";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import aaditya from "../assets/nnn.png"
export const HeaderComponent = () => {
	const container = useRef<HTMLElement | null>(null);
	const { scrollYProgress } = useScroll({
		//@ts-ignore
		target: container.current,
		offset: ['start start', 'end start']
	});
	const y = useTransform(scrollYProgress, [0, 1], ["01vh", "10vh"]);
	const scale = useTransform(scrollYProgress, [0, 1], ["1", "1.2"])
	return <>
		<div className='h-[100vh] w-full  overflow-hidden '>
			<div className="relative font-display h-full overflow-y-clip overflow-x-hidden bg-amber-100 pt-9"  >
				<nav className='flex flex-col justify-center items-center px-4 mt-5 gap-[71px] max-w-6xl mx-auto'>
					<NavigationBar />
					<div className='flex flex-col gap-[21px] w-full px-10  md:px-20'>
						<div className='w-full flex justify-center items-center'>
							<span className='border border-black rounded-full px-2 hover:bg-black hover:text-amber-50 cursor-pointer transition-all duration-200  text-2xl lg:text-2xl '>
								Hello
							</span>
						</div>

						<div className='text-center px-4'>
							<div className='text-4xl md:text-5xl lg:text-[65px] font-semibold leading-tight transition-all duration-300 ease-in-out '>
								<span>
									I am <span className='text-[#FD853A]'>Aaditya lamichhane</span>,
								</span><br />Web developer
							</div>
						</div>

						{/* Fixed positioning for image and background */}
						<div className='  flex justify-center  relative min-h-[400px] items-center  translate-y-6 container' style={{

						}}>
							{/* Fixed semi-circle positioning */}
							<motion.div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[550px] h-[300px] bg-[#FD853A] rounded-t-full z-0 ' style={
								{
									y
								}
							}></motion.div>

							{/* Fixed image positioning */}
							< motion.div
								className="absolute h-[400px] w-[470px] bg-left bg-cover rounded-lg  z-10"
								style={{
									backgroundImage: `url(${aaditya})`,
									y,
									scale
								}}
							>
							</motion.div>
						</div>
					</div>
				</nav>
			</div>

		</div>

	</>
}
