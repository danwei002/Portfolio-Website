import React from "react"

function lerp(v0, v1, t) {
    return v0*(1-t)+v1*t
}

class Skillbar extends React.Component {
    constructor() {
        super()
        this.state = {
            width: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => {
                //return {width: prevState.width + (this.props.percentage) / 1000.0}
                return {width: lerp(prevState.width, this.props.percentage + 1, 0.0077)}
            })
        }, 1)
    }

    componentDidUpdate() {
        if (this.state.width >= this.props.percentage) {
            clearInterval(this.interval)
        }
    }

    render() {
        return (
            <div>
                <div className="skillbar-outline">
                    <div className="skillbar-label text-center"><span>{this.props.label}</span></div>
                    <div style={{width: this.state.width + "%"}} className="skillbar-dynamic"></div>
                </div>
                <br/>
            </div>
        )
    }
}

export default Skillbar