import person from "../src/assets/point.png"
export const Page3Section = () => {
	return (
		<>
			<div className=" relative flex flex-col w-full h-full justify-center items-center bg-[#F2F4F7] border-solid">
				<div className='relative my-[122px] mx-[71px] flex flex-col gap-11 justify-center items-center    bg-red-200 md:flex-row' >
					{//This is the random File
					}
					<div className="relative group/circle">
						<div className="relative w-[300px] h-[300px] bg-[#f28b4a]  rounded-full inset-0 -top-6 left-4 overflow-clip ">
							{//<img src={person} alt="" className="w-300px object-center absolute -bottom-5" />
							}

							<div className="w-full h-full" style={{
								backgroundImage: `url(${person})`,
								backgroundSize: 'contain',
								backgroundPosition: 'bottom',
								backgroundRepeat: 'no-repeat'
							}} />
						</div>
						<div className="border border-gray-700 rounded-full w-[300px] h-[300px] absolute inset-0 left-3 -top-3">
						</div>
					</div>
					<div className="flex flex-col px-3">
						<div className="text-[64px] font-bold">
							<span>Why <span className="text-[#FD853A]"> Hire me</span> ?</span>
						</div>
						<div className="flex flex-col gap-4">
							<div className="w-full md:w-[444px] text-[20px]  text-[#98A2B3] p-4 md:p-0">
								I just dont write the code but also translate the imagination into reality.
							</div>
							<div className=" relative flex items-center justify-center border cursor-pointer rounded-4xl w-[150px] roudned-full  h-[50px] hover:bg-[#FD853A] hover:text-white font-bold p-2  transition-all duration-300 group/btm shadow-lg " onClick={(e) => {

								e.target.style.shadow = '5px 5px 10px rgba(0, 0, 0, 0)'
							}}>
								Contact Me
								<div className="absolute w-[150px] rounded-4xl border border-black h-[50px] inset-0 -right-2  top-1 opacity-0 group-hover/btm:opacity-100 transition-all duration-300 "
								>

								</div>
							</div>
						</div>

					</div>

				</div>
			</div>
		</>)
}
