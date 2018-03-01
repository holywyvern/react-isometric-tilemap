/**
 * An event called when the user interacts with the map.
 *
 * @version 1.0.0
 * @since 2.0.0
 * @author [Ramiro Rojo](https://github.com/holywyvern)
 */
class IsometricMapEvent {
  /**
   * Creates a new event
   * @param {*} target The selected element
   * @param {number} x The x position of the element selected
   * @param {number} y The y position of the element selected
   * @param {string} type The type of event, "click", "enter" or "leave"
   * @param {string} area The area clicked "floor", "left-wall", "right-wall", "map"
   */
  constructor(target, x, y, type, area) {
    this.target = target;
    this.x = x;
    this.y = y;
    this.type = type;
    this.area = area;
  }
}

export default IsometricMapEvent;
