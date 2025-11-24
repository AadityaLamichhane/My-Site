import './App.css'
import person from "../src/assets/point.png"
import background from "../src/assets/background.jpg"
import Lenis from "lenis"
import { HeaderComponent } from './components/HeaderComponent'
import { Component } from './components/Component'
import arrow from "../src/assets/up right.png"
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});
function App() {
	return (
		<>
			<HeaderComponent></HeaderComponent>
			<div
				className="h-screen w-full bg-cover bg-center bg-no-repeat "
			>
				<Page2Section />
				<Page3Section />
				<Footer></Footer>
			</div>
		</>
	)
}
const Page2Section = () => {
	const projectobject = [{
		title: "Payyay",
		url: "../src/assets/sample.png"
	}, {
		title: "Rusic",
		url: "../src/assets/sample.png"
	},
	{
		title: "Cli marker",
		url: ""
	}
	]
	return <>
		<div className={`md:h-[120vh] rounded-4xl h-[100vh]   `} style={{
			background: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.4) ,rgba(0,0,0,0.2)),url(${background})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: "cover",               // ✅ Changed to cover
			backgroundPosition: "center",
		}}>
			<div className='flex flex-col  items-start h-full justify-center
          '>
				<div className='w-full flex   justify-between py-16 px-10'>
					<div className='text-5xl font-bold text-white'>
						My <span className='text-[#FD853A]'>Service</span>
					</div>
					<div className=' text-white text-[20px] '>
						Graphic Design , Web Development and Community Executive
					</div>
				</div>
				<div className='flex  overflow-x-auto snap-x snap-mandatory  md:flex-row mb-12 justify-start items-center w-full p-4' >
					{projectobject.map((project: any) => {
						return <>
							<div className='min-w-full md:min-w-[33.33%]'>
								<Component size='500px' circleSize='100px' circlebottom='10px' circleright='45px' projectInfo={project} className="" />
							</div>
						</>
					})}
				</div>
			</div>
		</div>
	</>
}
const Page3Section = () => {
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
const ButtonComponent = ({ width = "233px", pt = "", pr = "", children }: { width: string, pt: string, pr: string, children: React.ReactNode }) => {
	return (
		<>
			<div className={`w-${width} `} style={{
				paddingRight: `59px`,
				paddingLeft: `64p`
			}}>
				{children}
			</div>
		</>)

}
export const Footer = () => {
	return <>
		<div className='relative max-w-screen bg-black h-[50vh] rounded-t-2xl '>
			<div className='w-full h-full flex flex-col px-[71px] py-[25px]'>

				<div className='flex justify-between  text-white items-center mb-[20px]'>
					<div className='text-[64px]  font-bold '>
						Lets Connect here
					</div>
					<div className='relative   flex bg-[#FD853A] items-center justify-center  p-2 px-4 rounded-full font-semibold  w-[200px] cursor-pointer outline-1 -outline-offset-1 outline-[#FD853A] hover:outline-offset-2 hover:outline-amber-50 transition-all duration-100  ' onClick={(e) => {
						e.target.style.scale = "98%"
					}}>
						Hire Me
						<span className=' w-auto flex justify-center items-center    '>
							<img src={arrow} className='' style={{
								objectFit: "contain",
								objectPosition: "center"
								,
								width: "24px"
							}} ></img>
						</span>
					</div>


				</div>

				<div className='border-b-1 border-white w-full h-1 mask-x-from-45% mt-[14px]'>

				</div>

			</div>


		</div>

	</>
}

export default App
