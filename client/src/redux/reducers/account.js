function accountRuducer(state = [],action) {
  switch(action.type) {
    case 'login':
      return {
        userName:action.user
      }
    case 'LOAD_USER':
      return {
        userName: action.user
      }
    default:
      return state;
  }
}

export default accountRuducer;
