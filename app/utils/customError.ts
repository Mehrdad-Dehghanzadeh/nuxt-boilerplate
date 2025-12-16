export class CustomError<T = any> extends Error implements CustomError<T> {
  data: T | undefined

  constructor(message: string, data?: T) {
    super(message)
    this.data = data
  }
}
