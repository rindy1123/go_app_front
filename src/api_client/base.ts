type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

// TODO: error handling
export const request = async <Response, Request = undefined>({ path, method, body }: { path: string; method: Method, body?: Request }): Promise<Response> => {
  switch (method) {
    case 'GET':
      return get(path)
    case 'POST':
      return post(path, body)
    case 'PUT':
      return put(path, body)
    default:
      throw new Error('Method not supported')
  }
}

const get = async <Response>(path: string): Promise<Response> => {
  const res = await fetch(`${process.env.API_ENDPOINT}/${path}`, { method: 'GET' })
  return res.json()
}

const post = async <Response, Request>(path: string, body: Request): Promise<Response> => {
  const res = await fetch(`${process.env.API_ENDPOINT}/${path}`, { method: 'POST', body: JSON.stringify(body) })
  return res.json()
}

const put = async <Response, Request>(path: string, body: Request): Promise<Response> => {
  const res = await fetch(`${process.env.API_ENDPOINT}/${path}`, { method: 'PUT', body: JSON.stringify(body) })
  return res.json()
}
