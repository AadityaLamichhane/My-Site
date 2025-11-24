import oneClockArrow from "../assets/up right.png"
export const Component =
	({
		size = "300px"
		, circleSize = "64px"
		, circleright = ""
		, circlebottom = "",
		projectInfo = {
			title: "string",
			url: "string"
		},
		className
	}: {
		size?: string;
		circleSize: string;
		circleright: string;
		circlebottom: string;
		projectInfo: {
			title: string,
			url: string
		}
		,
		className: string
	}) => {
		return <>
			<div className={`relative flex  justify-center items-center group/aadi w-full h-full  ${className}`} style={{
				width: `${size}`,
				height: `${size}`
			}}>
				<div className={`absolute z-50 flex justify-center items-center    bg-[#1D2939] group-hover/aadi:bg-[#FD853A] right-7 bottom-1 rounded-full    transition-all duration-300 hover:shadow-[0_0_0_4px_rgba(165,180,252,0.9)] ease-out cursor-pointer `}
					style={{
						width: `${circleSize}`,
						height: `${circleSize}`,
						right: `${circleright}`,
						bottom: `${circlebottom}`
					}}
					onClick={(e) => {
						const target = e.currentTarget as HTMLElement;
						target.style.scale = "0.9"


						setTimeout(() => {
							console.log("The scaling up ");
							target.style.scale = "1"
						}, 150)
					}}
				>
					<div className="p-3 flex  w-1/2 h-1/2" style={{
						backgroundImage: `url(${oneClockArrow})`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
					}}>

					</div>
				</div>

				<div

					className="w-full h-full flex flex-col justify-end relative  hover:bg-[#FD853A] bg-[#68686833] backdrop-blur-lg hover:backdrop-blur-md "
					style={{

						WebkitMaskImage: `url("data:image/svg+xml,${encodeURIComponent(`
                        <svg viewBox='0 0 162 195' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M0 14C0 6.26801 6.26801 0 14 0H150C156.627 0 162 5.37258 162 12V134C162 139.523 157.523 144 152 144H0V14Z'/>
                            <path d='M139 144C123.536 144 111 156.536 111 172V188C111 191.866 107.866 195 104 195H12C5.37258 195 2.41604e-08 189.627 0 183V151C0 147.134 3.13401 144 7 144H139Z'/>
                            <path d='M0 144H16V159H0V144Z'/>
                        </svg>
                    `)}")`,
						WebkitMaskSize: '100% 100%',
						WebkitMaskRepeat: 'no-repeat',
						WebkitMaskPosition: 'center',
						maskImage: `url("data:image/svg+xml,${encodeURIComponent(`
                        <svg viewBox='0 0 162 195' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M0 14C0 6.26801 6.26801 0 14 0H150C156.627 0 162 5.37258 162 12V134C162 139.523 157.523 144 152 144H0V14Z'/>
                            <path d='M139 144C123.536 144 111 156.536 111 172V188C111 191.866 107.866 195 104 195H12C5.37258 195 2.41604e-08 189.627 0 183V151C0 147.134 3.13401 144 7 144H139Z'/>
                            <path d='M0 144H16V159H0V144Z'/>
                        </svg>
                    `)}")`,
						maskSize: 'contain',
						maskRepeat: 'no-repeat',
						maskPosition: 'center',
					}}
				>
					<div className="h-[25%] bg-red-500/20 flex items-center justify-center border-b-2 border-white/25 ">
						<span className="text-white font-bold text-md">{projectInfo.title}</span>
					</div>

					<div className=" relative  h-[75%] w-full  flex flex-col items-center justify-center p-6 group transition-all duration-300 bg-transparent hover:bg-whoye500/10 group/crazy ">

						{/* This creates a shadow/depth effect */}

						<div className=" relative  translate-y-6   group-hover/crazy:scale-105  mt-12 items-end  w-[92%] h-[300px] rounded-2xl overflow-clip  p-0  bg-amber-900 transition-all duration-300 ease-out z-40  ">
							<div className="absolute w-full h-full  z-20 " style={{
								backgroundImage: `url(${projectInfo.url})`,
								backgroundPosition: "left top",
								backgroundSize: "100% 120%",
								backgroundRepeat: "no-repeat",
							}}>
							</div>
						</div>
						<div className="absolute w-[80%] h-[200px] rounded-4xl   bg-gray-500 z-10  group-hover/crazy:-translate-y-4 transition-all duration-200 ease-in-out">

						</div>

						<div className="absolute w-[70%] h-[300px]  rounded-4xl    bg-gray-600 z-0 translate-y-11  group-hover/crazy:translate-y-5 duration-200 ease-in-out">
							{/*  */}
						</div>

					</div>

				</div>
			</div>
		</>
	}
const SvgComponent = ({ children }: any) => {
	return <>

		<div

			className=" bg-amber-700 w-full h-full flex flex-col justify-end relative     "
			style={{

				WebkitMaskImage: `url("data:image/svg+xml,${encodeURIComponent(`
                        <svg viewBox='0 0 162 195' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M0 14C0 6.26801 6.26801 0 14 0H150C156.627 0 162 5.37258 162 12V134C162 139.523 157.523 144 152 144H0V14Z'/>
                            <path d='M139 144C123.536 144 111 156.536 111 172V188C111 191.866 107.866 195 104 195H12C5.37258 195 2.41604e-08 189.627 0 183V151C0 147.134 3.13401 144 7 144H139Z'/>
                            <path d='M0 144H16V159H0V144Z'/>
                        </svg>
                    `)}")`,
				WebkitMaskSize: 'contain',
				WebkitMaskRepeat: 'no-repeat',
				WebkitMaskPosition: 'center',
				maskImage: `url("data:image/svg+xml,${encodeURIComponent(`
                        <svg viewBox='0 0 162 195' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M0 14C0 6.26801 6.26801 0 14 0H150C156.627 0 162 5.37258 162 12V134C162 139.523 157.523 144 152 144H0V14Z'/>
                            <path d='M139 144C123.536 144 111 156.536 111 172V188C111 191.866 107.866 195 104 195H12C5.37258 195 2.41604e-08 189.627 0 183V151C0 147.134 3.13401 144 7 144H139Z'/>
                            <path d='M0 144H16V159H0V144Z'/>
                        </svg>
                    `)}")`,
				maskSize: 'contain',
				maskRepeat: 'no-repeat',
				maskPosition: 'center',
			}}
		>
			{children}
		</div>
	</>
}
