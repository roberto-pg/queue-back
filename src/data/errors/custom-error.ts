class CustomException extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'CustomException'
  }
}

function customException(message: string) {
  throw new CustomException(message)
}

export { customException }
