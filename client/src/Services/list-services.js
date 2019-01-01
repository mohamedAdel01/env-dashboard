import Api from './api'

export default {
  getListItems() {
    return Api().get("list")
  }
}
