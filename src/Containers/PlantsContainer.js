import React from "react";
import PlantCard from "../Components/PlantCard";
import { Card } from "semantic-ui-react";

const PlantsContainer = ({ plants, selectPlant, filter}) => {


    const filterPlants = () => {
      if (filter === "none") {
        return plants;
      }

      if (filter === "beginners") {
        return plants.filter((p) => p.easyToCare === true);
      }

      if (filter === "bloomingPlants") {
        return plants.filter((p) => p.blooming === true);
      }

      if (filter === "lowLight") {
        return plants.filter((p) => p.lowLight === true);
      }

      if (filter === "brightLight") {
        return plants.filter((p) => p.brightLight === true);
      }
    };

    return (
      <div>
        <Card.Group itemsPerRow={3}>
          {filterPlants().map((plant) => (
            <PlantCard key={plant.id} plant={plant} selectPlant={selectPlant} />
          ))}
        </Card.Group>
      </div>
    );
}

export default PlantsContainer;
