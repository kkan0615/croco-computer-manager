interface Array<T> {
  removeOne(o: T): Array<T>
  maxByKey(key: string): T
}

if (typeof Array.prototype.removeOne !== 'function') {
  Array.prototype.removeOne = function (o) {
    return this.splice(this.indexOf(o), 1)
  }
}

if (typeof Array.prototype.maxByKey !== 'function') {
  Array.prototype.maxByKey = function (key) {
    return this.sort((a, b)=>b[key] - a[key])[0]
  }
}


