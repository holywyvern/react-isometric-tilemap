import React, { Component } from "react";
import PropTypes from "prop-types";

class AnimatedTexture extends Component {

    static propTypes = {
        frames: PropTypes.arrayOf(PropTypes.string).isRequired,
        delay: PropTypes.number.isRequired,
        className: PropTypes.string,
        style: PropTypes.object
    };

    static contextTypes  = {
        ticker: PropTypes.object
    };

    constructor(props, context=null) {
        super(props, context);
        const { delay } = this.props;
        this.state = {
            currentFrame: 0,
            currentDelay: delay
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.delay === this.props.delay) {
            return;
        }
        if (nextProps.frames.length !== this.props.frames) {
            return this.setupAnimation(nextProps);
        }        
        for (let i = 0; i < nextProps.frames.length; ++i) {
            if (nextProps.frames[i] !== this.props.frames[i]) {
                return this.setupAnimation(nextProps);
            }
        }
    }

    componentDidMount() {
        this.__ticker = null;
        this.setupTicker(this.props);
    }

    componentWillUnmount() {
        this.removeTicker();
    }

    setupAnimation({ delay, frames }) {
        this.setupTicker({ delay, frames });   
        this.setState({
            currentFrame: 0,
            currentDelay: delay
        });
    }

    removeTicker() {
        if (this.__ticker !== null) {
            this.__ticker.detach();
            this.__ticker = null;            
        }        
    }

    setupTicker({ delay, frames }) {
        this.removeTicker();
        if (delay > 0 && frames.length > 1) {
            const { ticker } = this.context;
            this.__ticker = ticker.add(this.onFrameUpdate);
        }             
    }

    onFrameUpdate = delta => {
        const { delay, frames } = this.props;
        let { currentFrame, currentDelay } = this.state;
        currentDelay -= delta;
        while (currentDelay <= 0) {
            currentDelay += delay;
            currentFrame += 1;
        }
        currentFrame = currentFrame % frames.length;
        this.setState({ currentFrame, currentDelay });
    }

    render() {
        const { frames, ...props } = this.props;
        const { currentFrame } = this.state;
        return (
            <img {...props} key="img" src={frames[currentFrame]} alt="" />
        );
    }

}

export default AnimatedTexture;