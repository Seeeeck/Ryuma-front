const users = [{
  id: 0,
  name: 'taro'
}, {
  id: 1,
  name: 'taro1'
}, {
  id: 2,
  name: 'taro2'
}]
export default {
  users: users,
  get: () => [200, users],
  post: ({
    data
  }) => {
    console.log(data);
    users.push({
      id: users.length,
      name: data.name
    })
    return [200]
  },
  
}
