import DecorsIdea from "./DecorsIdea";
import OurExperts from "./OurExperts";
import PlantCareTips from "./PlantCareTips";
import PlantSlider from "./PlantSlider";
import TopRatedPlants from "./TopRatedPlants";


const Home = () => {
  return (
    <div className="bg-green-100">
      <PlantSlider></PlantSlider>
      <TopRatedPlants></TopRatedPlants>
      <PlantCareTips></PlantCareTips>
      <OurExperts></OurExperts>
      <DecorsIdea></DecorsIdea>
    </div>
  );
};

export default Home;
