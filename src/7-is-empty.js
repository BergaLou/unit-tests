export const isEmpty = (stringArrayOrObject) => {
  if (typeof stringArrayOrObject === 'string') {
    return stringArrayOrObject === ''
  }

  if (Array.isArray(stringArrayOrObject)) {
    return stringArrayOrObject.length === 0
  }

  if (typeof stringArrayOrObject === 'object' && stringArrayOrObject !== null) {
    return Object.keys(stringArrayOrObject).length === 0
  }

  return false
}
