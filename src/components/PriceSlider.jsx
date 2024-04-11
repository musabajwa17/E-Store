import * as React from 'react';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}$`;
}

const PriceSlider = () => {
  const [value, setValue] = React.useState([0, 34]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        text="$"
      />
  );
}

export default PriceSlider