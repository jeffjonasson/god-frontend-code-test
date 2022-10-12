import Image from 'next/image';
import React from 'react';
import { View } from 'vcc-ui';

import chevronCircle from '../../docs/chevron-circled.svg';

const PreviousChevronButton: React.FC<{
  onClick: React.MouseEventHandler<HTMLElement>;
}> = ({ onClick }) => (
  <View>
    <Image
      aria-label='Next'
      src={chevronCircle}
      height={50}
      width={50}
      onClick={onClick}
    />
  </View>
);

export default PreviousChevronButton;
