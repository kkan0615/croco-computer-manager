interface Array<T> {
  removeOne(o: T): Array<T>
}

if (typeof Array.prototype.removeOne !== 'function') {
  Array.prototype.removeOne = function (o) {
    return this.splice(this.indexOf(o), 1)
  }
}
