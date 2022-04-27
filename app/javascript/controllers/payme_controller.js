import { Controller } from "stimulus"
import dropin from "braintree-web-drop-in"

export default class extends Controller {
  connect(e) {
    const token = this.element.dataset.token
    dropin
      .create({
        authorization: token,
        container: this.element,
      })
      .then((dropinInstance) => {
        console.log(dropinInstance)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
