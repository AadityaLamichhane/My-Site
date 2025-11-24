import { Component } from "./Component";
import background from "../src/assets/background.jpg"
export const Page2Section = () => {
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
