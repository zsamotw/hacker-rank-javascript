export default class Automaton {
  constructor() {
    this.initialState = 'q1'
    this.acceptedState = 'q2'
  }

  dispatch(command, state) {
    switch (true) {
      case command === 1 && state === 'q1':
        return 'q2'
      case command === 0 && state === 'q1':
        return 'q1'
      case command === 0 && state === 'q2':
        return 'q3'
      case command === 1 && state === 'q2':
        return 'q2'
      case command === 1 && state === 'q3':
        return 'q2'
      case command === 0 && state === 'q3':
        return 'q2'
      default:
        return 'q1'
    }
  }
  readCommands(commands) {
    const last = commands.reduce((state, command) => {
      const next = this.dispatch(command, state)
      console.log(`${command}: ${state} -> ${next}`)
      return next
    }, this.initialState)

    return last === this.acceptedState
  }
}
