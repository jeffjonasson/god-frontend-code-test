import React, { useEffect, useState } from 'react';
import { View } from 'vcc-ui';
import Carousel from '../src/components/carousel';

import cars from '../public/api/cars.json';
import CarouselCarCard from '../src/components/car-card';
import FilterSelector from '../src/components/filter-selector';

const Home = () => {
  const [selectedBodyType, setSelectedBodyType] = useState('');
  const bodyTypes = [...new Set(cars.map((car) => car.bodyType))];
  const [filteredCars, setFilteredCars] = useState(cars);

  useEffect(() => {
    if (selectedBodyType.length === 0) return setFilteredCars(cars);
    return setFilteredCars(
      cars.filter((car) => car.bodyType === selectedBodyType)
    );
  }, [selectedBodyType]);

  return (
    <View width='100vw' padding={2}>
      <View paddingBottom={3}>
        <FilterSelector
          label='Filter by body type'
          list={bodyTypes}
          selectedListElement={selectedBodyType}
          setSelectedListElement={setSelectedBodyType}
        />
      </View>
      <Carousel>
        {filteredCars.map((car) => (
          <div key={car.id} className='carousel__slide'>
            <CarouselCarCard
              id={car.id}
              modelName={car.modelName}
              bodyType={car.bodyType}
              modelType={car.modelType}
              imageUrl={car.imageUrl}
            />
          </div>
        ))}
      </Carousel>
    </View>
  );
};

export default Home;
