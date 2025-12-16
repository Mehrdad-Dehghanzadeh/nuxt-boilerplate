export function showSnackbar(type: TSnackbarType, config: TSnackbarConfig) {
  const detail = {
    type,
    config
  }

  const event = new CustomEvent('showSnackbar', { detail })
  const el = document.getElementById('snackbar')
  el?.dispatchEvent(event)
}
