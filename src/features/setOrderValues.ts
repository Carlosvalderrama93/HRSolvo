type SetOrderValuesProps = {
  value1: string;
  value2?: string;
  type: string;
};

function setOrderValues({ value1, value2, type }: SetOrderValuesProps) {
  let finalValue: string;
  switch (type) {
    case "phone":
      finalValue = `${value2} ${value1}`;
      break;
    case "city":
      finalValue = `${value1}, ${value2}`;
      break;
    case "name":
      finalValue = `${value1} ${value2}`;
      break;
    case "position":
      finalValue = `${value1}, ${value2}`;
      break;
    case "salary":
      finalValue = `$${value1} to $${value2}`;
      break;
    case "language":
      finalValue = `${value1} in ${value2}`;
      break;
    case "source":
      finalValue = `From ${value1} on ${value2}`;
      break;

    default:
      finalValue = value1;
      break;
  }

  return finalValue;
}

export default setOrderValues;
