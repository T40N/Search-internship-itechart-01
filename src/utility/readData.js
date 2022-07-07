export const readData = () => {
  fetch("../src/context/dummy.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
