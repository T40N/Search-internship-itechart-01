import jsonData from "./dummy.json" assert { type: "json" };

class Data {
  constructor() {
    this.data = jsonData;
  }
  getData() {
    return this.data;
  }
  getBaseData() {
    return jsonData;
  }
  setData(data) {
    this.data = data;
  }
}

export default Data;
