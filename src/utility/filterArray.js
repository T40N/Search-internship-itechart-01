import data from "/src/store/dummy.json" assert { type: "json" };

export const filterArray = (filterOption, input, array, data) => {
  const endInput = input.toLowerCase().trim();

  if (endInput === "") {
    return data;
  }
  if (filterOption === "occupation") {
    return filterArrayByOccupation(endInput, array);
  }

  return array.filter((elem) => {
    const elemToFilter = elem[filterOption].toLowerCase();
    if (filterOption === "name") {
      const surname = elem[filterOption].toLowerCase();
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
