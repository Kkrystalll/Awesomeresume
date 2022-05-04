import { Controller } from "stimulus"
import Choices from "choices.js"
import "choices.js/public/assets/styles/choices.min.css"

export default class extends Controller {
  connect(e) {
    new Choices(this.element, {
      allowHTML: true,
      removeItemButton: true,
      duplicateItemsAllowed: false,
    })
  }
}
