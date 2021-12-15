import React from 'react';
import Loader from 'react-loader-spinner';

interface SpinnerProps {
  visible: boolean;
}

export const Spinner: React.FC<SpinnerProps> = React.memo(function Spinner({
  visible,
}: SpinnerProps) {
  return (
    <Loader
      type="Oval"
      color="#00BFFF"
      secondaryColor={'#ff0019'}
      height={80}
      width={80}
      visible={visible}
    />
  );
});
