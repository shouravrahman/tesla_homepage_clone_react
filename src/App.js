import './App.css';
import Header from './components/Header';
import Accesories from './assets/Desktop-Accessories.jpg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import sloarPanels from './assets/Desktop-SolarPanels.jpeg';
import sloarRoof from './assets/Desktop-SolarRoof.jpeg';
import Item from './components/Item';

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='app__itemsContainer'>
				<Item
					title='Lowest cost solar panels in America'
					desc='Money-back guarantee'
					backgroundImg={sloarPanels}
					leftBtnText='ORDER NOW'
					rightBtnText='LEARN MORE'
					twoButtons='true'
					first
				/>
				<Item
					title='Model S'
					desc='$69,000'
					backgroundImg={ModelS}
					leftBtnText='CUSTOM ORDER'
					rightBtnText='LEARN MORE'
					twoButtons='true'
				/>
				<Item
					title='Model 3'
					desc='$56,000'
					backgroundImg={Model3}
					leftBtnText='ORDER NOW'
					rightBtnText='LEARN MORE'
					twoButtons='true'
				/>
				<Item
					title='Model X'
					desc='Money-back guarantee'
					backgroundImg={ModelX}
					leftBtnText='CUSTOM NOW'
					rightBtnText='LEARN MORE'
					twoButtons='true'
				/>
				<Item
					title='Model Y'
					desc='Money-back guarantee'
					backgroundImg={ModelY}
					leftBtnText='CUSTOM ORDER'
					rightBtnText='LEARN MORE'
					twoButtons='true'
				/>
				<Item
					title='Solar for New Roofs'
					desc='Money-back guarantee'
					backgroundImg={sloarRoof}
					leftBtnText='ORDER NOW'
					rightBtnText='LEARN MORE'
					twoButtons='true'
				/>
				<Item
					title='Accesories'
					desc='Money-back guarantee'
					backgroundImg={Accesories}
					leftBtnText='SHOP NOW'
					rightBtnText='LEARN MORE'
					// twoButtons='true'
				/>
			</div>
		</div>
	);
}

export default App;
