export const dateAutoFormat = (value) => {
  let dateValue = value;
  // if white space -> change to ''. If is not a number between 0-9 -> change to ''
  let v = dateValue.replace(/\s+/g, "").replace(/[^0-9]/gi, "");

  // min of 2 digits and max of 4
  let matches = v.match(/\d{2,4}/g);
  let match = (matches && matches[0]) || "";
  let parts = [];

  for (let i = 0; i < match.length; i += 2) {
    // after 4 digits add a new element to the Array
    // e.g. "4510023" -> [4510, 023]
    parts.push(match.substring(i, i + 2));
  }

  if (parts.length) {
    // add a white space after 4 digits
    return parts.join("/");
  } else {
    return dateValue;
  }
};

export const numberAutoFormat = (number) => {
  let valueNumber = number;
  // if white space change to ''. If is not a number between 0-9 change to ''
  let v = valueNumber.replace(/\s+/g, "").replace(/[^0-9]/gi, "");

  // the value got min of 4 digits and max of 16
  let matches = v.match(/\d{4,16}/g);
  let match = (matches && matches[0]) || "";
  let parts = [];

  for (let i = 0; i < match.length; i += 4) {
    // after 4 digits add a new element to the Array
    // e.g. "4510023" -> [4510, 023]
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    // add a white space after 4 digits
    return parts.join(" ");
  } else {
    return valueNumber;
  }
};
