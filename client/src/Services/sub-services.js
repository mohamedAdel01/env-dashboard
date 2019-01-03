import Api from './api'

export default {
    getSubjects() {
        return Api().get("inpox")
    }
}
