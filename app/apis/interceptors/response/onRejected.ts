export default function onRejectedResponse(error: any) {
  return Promise.reject(error)
}
