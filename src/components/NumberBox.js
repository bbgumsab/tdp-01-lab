import React from 'react';


export default class NumberBox extends React.Component {
    state = {
        countAdd:this.props.initialValue,
        countSub:this.props.initialValue
    }

    clickAdd = () => {
        // alert("You clicked me!");
        this.setState({
            countAdd: (this.state.countAdd + 1) > 10 ? 10 : this.state.countAdd + 1
        })
    }

    clickSub = () => {
        this.setState({
            countSub: (this.state.countSub - 1) < -10 ? -10 : this.state.countSub - 1
        })
    }

    reset = () => {
        this.setState({
            countSub: 0,
            countAdd: 0
        })
    }

    render() {
        return (
            <>
                <div onClick={this.clickAdd}
                    style={{
                    border:"1px solid black",
                    padding:"10px",
                    width:"20px"
                }}>
                    {this.state.countAdd}
                </div>

                <div onClick={this.clickSub}
                    style={{
                    border:"1px solid black",
                    padding:"10px",
                    width:"20px"
                }}>
                    {this.state.countSub}
                </div>

                <div onClick={this.reset}
                    style={{
                    border:"1px solid black",
                    padding:"10px",
                    width:"40px"
                }}>
                    Reset
                </div>
            </>
        )
    }
}