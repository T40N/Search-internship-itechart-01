class Component {
  constructor(container, elementType, className, id) {
    this.container = container;
    this.elementType = elementType;
    this.className = className;
    this.render();
    this.mount();
    this.addClass(this.className);
    this.setId(id);
  }
  render() {
    this.element = document.createElement(this.elementType);
  }
  mount() {
    this.container.appendChild(this.element);
  }
  unmount() {
    this.element.remove();
  }
  getElement() {
    return this.element;
  }
  addClass(className) {
    if (this.element.classList.contains(className)) {
      return;
    }
    this.element.classList.add(className);
    this.className += ` ${className}`;
  }
  removeClass(className) {
    if (this.element.classList.contains(className)) {
      this.element.classList.remove(className);
    }
    return;
  }
  setId(id) {
    this.element.setAttribute("id", id);
    this.id = id;
  }

  addEvent() {}
}

export default Component;
