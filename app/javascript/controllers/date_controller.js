import { Controller } from "stimulus"
import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"

export default class extends Controller {
  connect(e) {
    flatpickr(this.element)
  }
}
