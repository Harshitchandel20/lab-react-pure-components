import { PureComponent } from 'react'

export class PureCounterComponent extends PureComponent {

    constructor(){
        super()

        this.state={
            count:0,
            toggle: false
        }
    }

    handleIncrement=()=>{
        if (this.state.toggle){
            this.setState({count: this.state.count +1})
        }else{
            this.setState({count: this.state.count})
        }
    }

    handleToggle=()=>{
        this.setState({toggle: !this.state.toggle})
    }

  render() {
    console.log("This is Pure Component")
    
    return (
      <div>
        <h1>Pure count - {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Counter</button>
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    )
  }
}

export default PureCounterComponent