import React from 'react'


class dropdownfield extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '1'
        };
    }

    render(){
        const options = this.props.options;
       return(
           <select  className="custom-select"  value={this.props.optionvalue} onChange={(e)=>
           {
               this.setState
               ({
                   value: e.target.value
                })
                this.props.method(e.target.value)
            }}>
              {/* <option  value='1' disabled>Select</option> */}
              {
                  options.map((i,j)=>{
                      if(i===1) return <option  value='1' disabled>Select</option>
                      return <option   key={i} value={i}>{i}</option>
                  })
              }
              
           </select>
       );
    }
}

export default dropdownfield;