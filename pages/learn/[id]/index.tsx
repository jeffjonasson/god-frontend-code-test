import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { View, Text } from 'vcc-ui';

import cars from '../../../public/api/cars.json';

const Learn = () => {
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
        {`Here you can learn more about the ${
          selectedCar && selectedCar.modelName
        }. It's a brilliant ${
          selectedCar && selectedCar.bodyType
        } that suits all your needs.`}
      </Text>
    </View>
  );
};
export default Learn;
