import { Component, ReactNode, createElement, Children, ChangeEvent } from "react";

export interface InputProps {
    className?: string;
    label: string;
    enumKey: string;
    widgetId: string;
    index?: number;
    style?: CSSProperties;
    tabIndex?: number;
    checkedState: boolean;
    onUpdate: (value: string, changed: boolean) => void;
    disabled?: boolean;
}

export class CheckboxItem extends Component<InputProps> {
    private onChangeHandle(e) {
        this.props.onUpdate(this.props.enumKey, e.target.checked);
    }
    
    render(): ReactNode {

        return (
            <div className="checkboxes__item">
                <input
                    type="Checkbox"
                    value={this.props.enumKey}
                    id={this.props.widgetId+"."+this.props.enumKey}
                    defaultChecked={this.props.checkedState}
                    checked={this.props.checkedState}
                    onChange={(e) => { this.onChangeHandle(e); }}
                    disabled={this.props.disabled}
                />
                <label htmlFor={this.props.widgetId+"."+this.props.enumKey} className={this.props.checkedState ? "checked" : ""}>
                    {this.props.label}
                </label>
            </div>
        );
    }
}