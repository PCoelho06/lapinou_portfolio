class HttpClient {
  baseURL: string

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  async request(url: string, options = {}) {
    const response = await fetch(`${this.baseURL}${url}`, options)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    return response.json()
  }

  get(url: string) {
    return this.request(url, { method: 'GET' })
  }

  post(url: string, data: object) {
    return this.request(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  put(url: string, data: object) {
    return this.request(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  delete(url: string) {
    return this.request(url, { method: 'DELETE' })
  }
}

export default HttpClient
