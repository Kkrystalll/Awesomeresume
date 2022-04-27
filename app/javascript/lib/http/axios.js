import ax from "axios"

const token = document.querySelector("meta[name=csrf-token]").content
ax.defaults.headers.common["X-CSRF-TOKEN"] = token

export default ax
