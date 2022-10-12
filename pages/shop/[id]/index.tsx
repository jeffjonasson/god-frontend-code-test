import { useRouter } from 'next/router';
import React from 'react';
import { View, Text } from 'vcc-ui';

const Learn = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <View width='100vw' padding={2}>
      <Text>
        <h2>Shop</h2>
        Here you can shop for the {id}
      </Text>
    </View>
  );
};
export default Learn;
