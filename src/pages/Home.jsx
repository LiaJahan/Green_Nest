import PlantCareTips from "./PlantCareTips";
import PlantSlider from "./PlantSlider";
import TopRatedPlants from "./TopRatedPlants";


const Home = () => {
  return (
    <div>
      <PlantSlider></PlantSlider>
      <TopRatedPlants></TopRatedPlants>
      <PlantCareTips></PlantCareTips>
    </div>
  );
};

export default Home;
