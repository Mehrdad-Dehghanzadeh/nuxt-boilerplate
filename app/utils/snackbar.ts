export function showSnackbar(type: TSnackbarType, config: TSnackbarConfig | string) {
  const tempConfig: TSnackbarConfig =
    typeof config === 'object' ? config : { ...DEFAULT_SNACKBAR_CONFIG, message: config }

  const detail = {
    type,
    config: tempConfig
  }

  const event = new CustomEvent('showSnackbar', { detail })
  const el = document.getElementById(SNACKBAR_ELEMENT_ID)
  el?.dispatchEvent(event)
}
