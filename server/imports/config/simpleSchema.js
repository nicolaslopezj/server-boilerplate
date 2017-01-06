Array.includes = function () {
  let [first, ...rest] = arguments
  return Array.prototype.includes.apply(first, rest)
}
