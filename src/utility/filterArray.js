import data from "/src/store/dummy.json" assert { type: "json" };

export const filterArray = (filterOption, input, array) => {
  const endInput = input.toLowerCase().trim();

  if (endInput === "") {
    return data;
  }

  switch (filterOption) {
    case "name":
      return filterArrayByName(endInput, array);
    case "occupation":
      return filterArrayByOccupation(endInput, array);
    case "nationality":
      return filterArrayByNationallity(endInput, array);
  }
};

const filterArrayByName = (input, array) => {
  return array.filter((elem) => {
    const endName = elem.name.toLowerCase();
    const endSurname = elem.name.toLowerCase();

    if (endName.search(input) >= 0) {
      return true;
    }
    if (endSurname.search(input) >= 0) {
      return true;
    }
  });
};

const filterArrayByOccupation = (input, array, property) => {
  return array.filter((elem) => {
    const endOccupation = elem.occupation.join(", ").toLowerCase();

    if (endOccupation.search(input) >= 0) {
      return true;
    }
  });
};

const filterArrayByNationallity = (input, array) => {
  return array.filter((elem) => {
    const endNationality = elem.nationality.toLowerCase();

    if (endNationality.search(input) >= 0) {
      return true;
    }
  });
};
