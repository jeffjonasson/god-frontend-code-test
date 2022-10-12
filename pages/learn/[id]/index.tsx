import { useRouter } from 'next/router';
import React from 'react';
import { View, Text } from 'vcc-ui';

const Learn = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <View width='100vw' padding={2}>
      <Text>
        <h2>Learn more</h2>
        Here you can learn more about {id}
      </Text>
    </View>
  );
};
export default Learn;
