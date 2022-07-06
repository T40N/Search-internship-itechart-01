class ListElem {
  constructor(id, img, name, content) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.content = content;
    this.render();
  }

  render() {
    this.listOfDataDiv = document.getElementById("dataDiv");
    console.log(this.listOfDataDiv);
    this.listElem = document.createElement("div");
    this.listElem.classList.add("list-elem");
    this.listElem.setAttribute("id", this.id);
    this.listOfDataDiv.appendChild(this.listElem);
    this.listElemImg = document.createElement("img");
    this.listElemImg.setAttribute("src", this.img);
    this.listElem.appendChild(this.listElemImg);
    this.listElemName = document.createElement("h3");
    this.listElemName.innerText = this.name;
    this.listElem.appendChild(this.listElemName);
    this.listElemContent = document.createElement("p");
    this.listElemContent.innerText = this.content;
    this.listElem.appendChild(this.listElemContent);
  }
}

export default ListElem;
