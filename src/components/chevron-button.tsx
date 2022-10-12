import Image from 'next/image';
import React from 'react';

import chevronCircle from '../../docs/chevron-circled.svg';

interface Props {
  onClick: React.MouseEventHandler<HTMLElement>;
  label: string;
  isBackArrow?: boolean;
}
const ChevronButton: React.FC<Props> = ({
  onClick,
  label,
  isBackArrow = false,
}) => (
  <Image
    aria-label={label}
    style={{ transform: isBackArrow ? 'rotate(180deg)' : 'rotate(0deg)' }}
    src={chevronCircle}
    height={50}
    width={50}
    onClick={onClick}
  />
);

export default ChevronButton;
