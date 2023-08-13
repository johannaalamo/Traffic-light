import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState ();
	return (
		<div className="container">
		<div className="trafficTop d-flex flex-column justify-content-center align-items-center"></div>
		
		<div className="traffic-light d-flex flex-column justify-content-center align-items-center">

			<div className={`light red ${color === 'red' ? 'glow' : ''}`} 
			onClick={() => setColor('red')}
			></div>

			<div className={`light yellow ${color === 'yellow' ? 'glow' : ''}`} 
			onClick={() => setColor('yellow')} 
			></div>

			<div className={`light green ${color === 'green' ? 'glow' : ''}`} 
			onClick={() => setColor('green')}
			></div>
			
				</div>
            </div>
            

	);
};

export default Home;
