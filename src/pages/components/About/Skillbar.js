import React from "react"

/* Got this function from https://github.com/mattdesl/lerp */
function lerp(v0, v1, t) {
    return v0*(1-t)+v1*t
}

class Skillbar extends React.Component {
    constructor() {
        super()
        this.state = {
            width: 0,
            animationStarted: false
        }
    }

    componentDidUpdate() {
        if (this.props.inView && !this.state.animationStarted) {
            this.setState(prevState => {
                return {width: prevState.width, animationStarted: true}
            })
            this.interval = setInterval(() => {
                this.setState(prevState => {
                    return {width: lerp(prevState.width, this.props.percentage + 1, 0.0077), animationStarted: prevState.animationStarted}
                })
            }, 1)
        } else {
            if (this.state.width >= this.props.percentage) {
                clearInterval(this.interval)
            }
        }
    }

    render() {
        return (
            <div>
                <div className="skillbar-outline">
                    <div style={{backgroundColor: this.props.labelColor}} className="skillbar-label text-center"><span>{this.props.label}</span></div>
                    <div style={{width: this.state.width + "%", backgroundColor: this.props.barColor}} className="skillbar-dynamic"></div>
                </div>
                <br/>
            </div>
        )
    }
}

export default Skillbar