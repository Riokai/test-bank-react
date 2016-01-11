const HOST = 'http://121.42.216.103/testbank/'

const apiContainer = {
  login: 'permission/json_web_token'
}

export default function getService(service) {
  return HOST + apiContainer[service]
}
