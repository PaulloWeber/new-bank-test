class DataHandler {
  message: string
  status: number
  content: any

  constructor (status, message, content = {}) {
    this.status = status
    this.message = message
    this.content = content
  }
}

export default DataHandler
