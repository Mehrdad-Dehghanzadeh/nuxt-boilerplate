export default function onRejectedRequest(error: any) {
  return Promise.reject(error)
}
