import React from 'react';
import { View } from 'vcc-ui';
import Carousel from '../src/components/carousel';

import cars from '../public/api/cars.json';
import CarouselCarCard from '../src/components/car-card';

const Home = () => (
  <View width='100vw' padding={2}>
    <Carousel>
      {cars.map((car) => (
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

export default Home;
