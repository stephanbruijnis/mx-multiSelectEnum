import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/MultiSelectEnum.css";

export default class MultiSelectEnum extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
