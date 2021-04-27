 import React from 'react'
 import './optionstyle.css'

class optionfield extends React.Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         styleClass: true
    //     }
    // }

    // changeStyle(){
    //     this.setState({styleClass : !this.state.styleClass})
    // }

    render(){
        let btn_class = !this.props.selected ? "button" : "buttonclick";
    return (
        <div>
         <button type="button"   className={btn_class} onClick={ () =>{
        //   this.changeStyle();
          this.props.onClick();
         }} >{this.props.value}</button>
        </div>
    )
    }
}

export default optionfield;
