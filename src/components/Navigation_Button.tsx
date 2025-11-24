export const Navigation_button = ({ content, isactive, setIsActive }: any) => {
	console.log("The active component is ", isactive)
	const handleEnter = (event: any) => {
		if (!isactive) {
			event.target.style.transition = "all 300ms ease-in-out";
			event.target.style.backgroundColor = "#171717";
		}
	}
	const handleLeave = (event: any) => {
		if (!isactive) {
			event.target.style.transition = "all 300ms ease-in-out";
			event.target.style.backgroundColor = "black";
		}
	}
	return (
		<div className={` text-xs  md:text-md lg:text-lg flex justify-center items-center nav-content  px-10  b  g-blue-200 h-full  rounded-full md:w-30  w-20 capitalize text-nowrap  cursor-pointer `}
			onMouseEnter={handleEnter}
			onMouseLeave={handleLeave}
			style={{
				background: isactive ? '#FD853A' : 'black',
				transition: "all ",
				transitionDuration: "2000"
			}}
			onClick={() => setIsActive(content)}>
			{content}
		</div>)
}
