export const filterArray = (filterOption, input, array) => {
  const endInput = input.toLowerCase().trim();

  if (endInput === "") {
    return array;
  }
  if (filterOption === "occupation") {
    return filterArrayByOccupation(endInput, array);
  }

  return array.filter((elem) => {
    const elemToFilter = elem[filterOption].toLowerCase();
    if (filterOption === "name") {
      const surname = elem.surname.toLowerCase();
      if (surname.search(endInput) >= 0) {
        return true;
      }
    }
    if (elemToFilter.search(endInput) >= 0) {
      return true;
    }
  });
};

const filterArrayByOccupation = (input, array) => {
  return array.filter((elem) => {
    const endOccupation = elem.occupation.join(", ").toLowerCase();

    if (endOccupation.search(input) >= 0) {
      return true;
    }
  });
};
