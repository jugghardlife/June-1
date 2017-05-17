function accountRuducer(state = [],action) {
  switch(action.type) {
    case 'login':
      return {
        currentUser:action.user
      }
    default:
      return state;
  }
}

export default accountRuducer;
