import { Controller } from "stimulus"
import dropin from "braintree-web-drop-in"

export default class extends Controller {
  setNonce(nonce) {
    const input = document.createElement("input")
    // input.setAttribute("type", "hidden")
    // input.setAttribute("name", "nonce")
    // input.setAttribute("value", nonce)
    input.type = "hidden"
    input.value = nonce
    input.name = "nonce"
    this.element.appendChild(input)
  }
  connect(e) {
    const token = this.element.dataset.token
    dropin
      .create({
        authorization: token,
        container: this.element,
      })
      .then((cashier) => {
        const form = this.element.closest("form")
        form.addEventListener("submit", (e) => {
          e.preventDefault()
          cashier
            .requestPaymentMethod()
            .then(({ nonce }) => {
              this.setNonce(nonce)
              form.submit()
            })
            .catch((err) => {
              console.log(err)
            })
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
