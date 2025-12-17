export type TSnackbarElement = HTMLDivElement & { isSetEvent: boolean }

export type TSnackbarDetail = {
  type: TSnackbarType
  config: TSnackbarConfig
}
