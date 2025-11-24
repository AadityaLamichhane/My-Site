import './App.css'
import person from "../src/assets/point.png"
import Lenis from "lenis"
import { HeaderComponent } from './components/HeaderComponent'
import arrow from "../src/assets/up right.png"
import { Page2Section } from './components/FirstPage'
import { Page3Section } from './components/ThirPage'
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
export const ButtonComponent = ({ width = "233px", pt = "", pr = "", children }: { width: string, pt: string, pr: string, children: React.ReactNode }) => {
	const obj = { pt, pr }
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
