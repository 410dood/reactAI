import React, { Component } from 'react'

/* About the stateThis prop.
 * The stateThis prop is the `this` of the ViewStateMachine parent of a ViewState.
 * It's used for accessing the state and setState of the ViewStateMachine.
 */
export class ViewStateTemplate extends Component {
  constructor (props) {
    super(props)

    if (!this.props.sm) {
      throw new Error('sm prop not defined: Are you sure this is in the elements prop of a state machine?')
    }
  }
}

export class ViewStateDebug extends ViewStateTemplate { // A Debug ViewState, activated with a debug={true} prop on ViewStateMachine
  constructor (props) {
    super(props)

    this.decrease = this.decrease.bind(this)
    this.increase = this.increase.bind(this)
  }

  decrease () {
    this.props.sm.state(this.props.sm.state() - 1 < 0 ? this.props.sm.elements.length - 1 : this.props.sm.state() - 1)
  }

  increase () {
    this.props.sm.state(this.props.sm.state() + 1 > this.props.sm.elements.length - 1 ? 0 : this.props.sm.state() + 1)
  }

  render () {
    return (
      <div title='ViewStateDebug'>
        <button onClick={this.decrease}>
          &lt;
        </button>
        &nbsp;{this.props.sm.state()}&nbsp;
        <button onClick={this.increase}>
          &gt;
        </button>
      </div>
    )
  }
}

/* Props:
 *  - elements - Elements of the state machine.
 *  - state - Default state of the state machine.
 */
export class ViewStateMachine extends Component {
  constructor (props) {
    super(props)

    this.state = { // default state
      elements: this.props.elements ? this.props.elements : [<span>Empty ViewStateMachine</span>],
      state: this.props.state ? this.props.state : 0,
      store: {}
    }

    this.fStore = this.fStore.bind(this)
    this.fState = this.fState.bind(this)
  }

  fStore (name, value, cb) { // prop: sm.store
    if (value) { // if the value has been defined: setter
      if (cb) {
        this.setState(function (state) { // if there's a callback
          var y = state.store // get default store
          y[name] = value // define new value
          return {
            store: y // return store
          }
        }, cb) // also pass callback
      } else {
        this.setState(function (state) { // if there's no callback
          var y = state.store // get default store
          y[name] = value // define new value
          return {
            store: y // return store
          }
        })
      } // do not pass callback
      // DEBUG
      console.log(`Updated store ${name}: ${value}`)
      console.log(this.state)
    } else { // if the value hasn't been defined: getter
      // DEBUG
      console.log(`Got store ${name} (${this.state.store[name]})`)
      console.log(this.state)
      return this.state.store[name] // return value from song
    }
  }

  fState (state) { // prop: sm.state
    if (state) { // if state was passed: setter
      this.setState({ // set new state
        state
      })
      console.log(`Updated state: ${state}`)
    } else { // if state wasn't passed: getter
      console.log('Got state')
      return this.state.state
    }
  }

  render () {
    return <div className='stateMachine'>
      {React.cloneElement(this.state.elements[this.state.state], {
        sm: {
          state: this.fState,
          store: this.fStore,
          elements: this.state.elements
        }
      }) /* current state element, cloned with the stateThis prop */}
      {this.props.debug ? <ViewStateDebug stateThis={this} /> : undefined /* debug prop, if needed */}
    </div>
  }
}
