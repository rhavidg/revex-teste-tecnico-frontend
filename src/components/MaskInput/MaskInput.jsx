import { forwardRef } from "react";
import { IMaskInput } from "react-imask";
const MaskInput = forwardRef(function MaskInput(props, ref) {
  const { name, onChange, ...other } = props;

  return (
    <IMaskInput
      {...other}
      mask={Number}
      radix=","
      scale={2}
      thousandsSeparator="."
      padFractionalZeros
      normalizeZeros
      lazy={false}
      mapToRadix={["."]}
      unmask="typed"
      inputMode="decimal"
      inputRef={ref}
      onAccept={(value) => {
        onChange?.({
          target: {
            name,
            value,
          },
        });
      }}
    />
  );
});
export default MaskInput;
