import UserIndex from "./index"
export default {
   // 返り値は [status, body?, headers?]
  get({values}) {
    return [200,UserIndex.users.find(user => user.id === values.userId)]
  },
  delete: ({values}) => {
    if(UserIndex.users.findIndex(user => user.id === values.userId)!== -1){
      UserIndex.users.splice(UserIndex.users.findIndex(user => user.id === values.userId),1)
      return [200]
    }
    return [400]
    
    
}
}