const _toString = Object.prototype.toString
const map = {
  array: 'Array',
  object: 'Object',
  function: 'Function',
  string: 'String',
  null: 'Null',
  undefined: 'Undefined',
  boolean: 'Boolean',
  number: 'Number'
}
export const getType = (item) => {
  return _toString.call(item).slice(8,-1)
}
export const isTypeOf  = (item, type) => {
  return map[type] && map[type] === getType(item)
}
