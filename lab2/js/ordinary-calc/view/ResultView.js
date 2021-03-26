export default class ResultView {
    constructor (item) {
        this.item = item;
    }
    setValue (result) {
        this.item.textContent = result;
    }
}