export default (message, res, total) => {
  const response = {}

  if (message) {
    response.message = message
  }

  if (res) {
    response.result = res
  }

  if (total >= 0) {
    response.total = total
  }

  return response
}
