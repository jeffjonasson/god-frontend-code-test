import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Spacer, Text, useTheme, View } from 'vcc-ui';

import chevron from '../../docs/chevron-small.svg';

interface LinkProps {
  label: string;
  linkTo: string;
}

const CarCardLink: React.FC<LinkProps> = ({ label, linkTo }) => {
  const theme = useTheme();
  return (
    <Link href={linkTo}>
      <a href={linkTo}>
        <View direction='row'>
          <Text
            extend={{ color: theme.color.foreground.action }}
            variant='bates'
            subStyle='emphasis'
          >
            {label}
          </Text>
          <Spacer size={1} />
          <Image src={chevron} height={10} width={10} />
        </View>
      </a>
    </Link>
  );
};

export default CarCardLink;
