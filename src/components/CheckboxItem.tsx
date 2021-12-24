import { Component, ReactNode, createElement, Children, ChangeEvent } from "react";

export interface InputProps {
    className?: string;
    label?: string;
    index?: number;
    style?: CSSProperties;
    tabIndex?: number;
    checkedState: boolean;
    onLeave?: (value: string, changed: boolean) => void;
}

export class CheckboxItem extends Component<InputProps> {
    private readonly onChangeHandle (e) {
        this.props.onLeave(this.props.label, e.target.checked);
    }

    render(): ReactNode {
        return (
            <label><input type="Checkbox" defaultChecked={this.props.checkedState} checked={this.props.checkedState} onChange={(e) => {this.onChangeHandle(e);}} />{this.props.label}</label>
        );
    }
    private onChange(event: ChangeEvent<HTMLInputElement>): void {
        this.setState({ editedValue: event.target.value });
    }
}