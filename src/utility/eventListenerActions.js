// newEventListener() {
//   if (this.searchOption === "onSubmit") {
//     this.searchInput.addEventListener("input", (event) => {
//       this.inputValue = event.target.value;
//     });
//     this.searchForm.addEventListener("submit", (event) => {
//       event.preventDefault();
//       this.onSubmit(event);
//     });
//   }
//   if (this.searchOption === "onDebounce") {
//     this.searchInput.addEventListener("input", (event) =>
//       this.onDebounce(() => this.updateDebounceValue(event), 500)
//     );
//   }
//   if (this.searchOption === "onThrottle") {
//     this.searchInput.addEventListener("input", (event) =>
//       this.onThrottle(() => {
//         this.filterArray(event.target.value);
//       }, 500)
//     );
//   }
// }

// onSubmit(event) {
//   event.preventDefault();
//   console.log(this.inputValue);
//   this.filterArray(this.inputValue);
// }
// updateDebounceValue(event) {
//   this.filterArray(event.target.value);
// }
// onDebounce(callback, time) {
//   window.clearTimeout(this.debounceTimer);
//   this.debounceTimer = window.setTimeout(callback, time);
// }
// onThrottle(callback, time) {
//   console.log(this.throttlePouse);
//   if (this.throttlePouse) return;
//   this.throttlePouse = true;
//   setTimeout(() => {
//     callback();
//     this.throttlePouse = false;
//   }, time);
// }s
// filterArray(value) {
//   console.log(value);
//   if (value.trim() === "") {
//     this.listOfData = LIST_OF_DATA;
//   }
//   this.listOfData = this.listOfData.filter((elem) => {
//     if (value.trim().toLowerCase() == elem.id) {
//       return true;
//     }
//     if (elem.name.toLowerCase().search(value.trim().toLowerCase()) >= 0) {
//       return true;
//     }
//     if (elem.content.toLowerCase().search(value.trim().toLowerCase()) >= 0) {
//       return true;
//     }
//   });
//   console.log(this.listOfData);
//   this.ListDisplay.changeListOfData(this.listOfData);
// }
