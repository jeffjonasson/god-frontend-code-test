import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { View, Text } from 'vcc-ui';

import cars from '../../../public/api/cars.json';

const Shop = () => {
  const router = useRouter();
  const routeId = router.query.id;
  const selectedCar = cars.find((car) => car.id === routeId);

  return (
    <View width='100vw' padding={5}>
      <Text>
        <h2>Learn more</h2>
        <View paddingBottom={4}>
          <div style={{ position: 'relative', width: '100%', height: '250px' }}>
            {selectedCar && (
              <Image
                src={selectedCar.imageUrl}
                alt={`Car ${selectedCar.id}`}
                layout='fill'
                objectFit='contain'
              />
            )}
          </div>
        </View>
        {`You can buy the ${
          selectedCar && selectedCar.modelName
        } at your nearest Volvo dealership.`}
      </Text>
    </View>
  );
};
export default Shop;
