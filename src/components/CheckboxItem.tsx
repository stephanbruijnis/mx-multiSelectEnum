import { Component, ReactNode, createElement, Children } from "react";

export interface InputProps {
    className?: string;
    label?: string;
    index?: number;
    style?: CSSProperties;
    tabIndex?: number;
}

export class CheckboxItem extends Component<InputProps> {

    render(): ReactNode {
        return (
            <label><input type="Checkbox" />{this.props.label}</label>
        );
    }
}