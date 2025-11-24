import { useState } from "react";
import { Navigation_button } from "./Navigation_Button";
export const NavigationBar = () => {
	// Write the logic to have the hover affect to the all the Class component 
	const navigation_bar = ["Home", "About Me", "Project", "Contacts"]
	const [activebutton, setIsActiveButton] = useState(navigation_bar[0]);
	console.log("the active component is", activebutton);

	return <>
		<div className='  w-full bg-black text-white  rounded-full h-15  overflow-x-hidden   '>
			<div className='w-full h-full flex justify-between p-1 ' id='containtr'>
				{navigation_bar.map((element, id) => {
					return (
						<Navigation_button
							key={id}
							content={element}
							isactive={element == activebutton}
							setIsActive={setIsActiveButton}
						></Navigation_button>
					)
				})}
			</div>
		</div>
	</>
}
