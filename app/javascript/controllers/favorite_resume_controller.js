import { Controller } from "stimulus"
// import ax from "axios"
import ax from "lib/http/axios"
import Rails from "@rails/ujs"

export default class extends Controller {
  static targets = ["like", "unlike"]

  connect(e) {
    if (this.element.dataset.liked === "true") {
      this.likeTarget.style.display = "none"
    } else {
      this.unlikeTarget.style.display = "none"
    }
  }

  like(e) {
    e.preventDefault()
    // const token = document.querySelector("meta[name=csrf-token]").content

    // ax.defaults.headers.common["X-CSRF-TOKEN"] = token
    const resumeID = this.element.dataset.resumeId

    Rails.ajax({
      type: "post",
      url: `/api/v1/resumes/${resumeID}/like`,
      success: (data) => {
        if (data.message === "add") {
          this.likeTarget.style.display = "none"
          this.unlikeTarget.style.display = "block"
        }
      },
    })
    // ax.post(`/api/v1/resumes/${resumeID}/like`).then(({ data }) => {
    //   if (data.message === "add") {
    //     this.likeTarget.style.display = "none"
    //     this.unlikeTarget.style.display = "block"
    //   }
    // })
  }

  unlike(e) {
    e.preventDefault()
    // const token = document.querySelector("meta[name=csrf-token]").content
    // ax.defaults.headers.common["X-CSRF-TOKEN"] = token

    const resumeID = this.element.dataset.resumeId
    ax.delete(`/api/v1/resumes/${resumeID}/unlike`).then(({ data }) => {
      if (data.message === "remove") {
        this.likeTarget.style.display = "block"
        this.unlikeTarget.style.display = "none"
      }
    })
  }
}
