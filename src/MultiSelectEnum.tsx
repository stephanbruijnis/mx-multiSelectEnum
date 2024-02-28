import { Component, ReactNode, createElement, Fragment } from "react";
import { hot } from "react-hot-loader/root";

import { MultiSelectEnumContainerProps } from "../typings/MultiSelectEnumProps";
import { CheckboxItem, CheckboxText } from "./components/CheckboxItem";
import { Alert } from "./components/Alert";

import classNames from "classnames";

import "./ui/MultiSelectEnum.css";

class MultiSelectEnum extends Component<MultiSelectEnumContainerProps> {
    private readonly onUpdateHandle = this.onUpdate.bind(this);

    private get universe(): string[] {
        // As this property can only be an Enum we know that universe is defined
        return this.props.enumAttribute.universe!;
    }

    render(): ReactNode {
        // The enumeration labels (captions)
        // const captions = this.universe.map(name => this.props.enumAttribute.formatter.format(name)); // labels (name of enum)
        // console.debug("enumeration captions: " + captions);

        // All possible enumeration values (keys)
        // const universe = this.universe
        // console.debug("universe: " + universe);
        // console.debug("id:" + this.props.id);
        // console.debug("name:" + this.props.name);

        // Current value of the string attribute that contains the comma separate values (enumeration keys)
        // const valueStr = this.props.enumAttribute_str.value || "";
        // console.debug("enumAttribute_str: " + { valueStr });

        // Enable validation feedback on this input element
        const validationFeedback = this.props.enumAttribute.validation;
        const className = classNames(this.props.className, this.props.orientationMode === "horizontal" ? "checkboxes inline" : "checkboxes");
        return (
            <Fragment>
                <div
                    className={className}
                    style={this.props.style}
                    tabIndex={this.props.tabIndex}>
                    {this.universe.map((this.eachEnumKey), this)}
                </div>
                <Alert>{validationFeedback}</Alert>
            </Fragment>
        );
    }

    private eachEnumKey(enumKey: string, i: number): ReactNode {
        // For each key in the universe of the enumeration we will show a checkbox
        const valueStr = this.props.enumAttribute_str.value || "";

        // Determine of the current enumeration value (key) is available in the string and thus should be shown as a checked checkbox
        // Only check for full match of the value
        var checkedState = valueStr.split(',').indexOf(enumKey)!==-1;

        if (this.renderAsText()) {
            if (checkedState) {
                return (
                    <CheckboxText
                        key={i}
                        index={i}
                        enumKey={enumKey}
                        label={this.props.enumAttribute.formatter.format(enumKey)}
                        checkedState={checkedState}
                        onUpdate={this.onUpdateHandle}
                        disabled={this.isReadOnly()}
                        widgetId={this.props.id}
                    />
                );
            }
        }
        else {
            return (
                <CheckboxItem
                    key={i}
                    index={i}
                    enumKey={enumKey}
                    label={this.props.enumAttribute.formatter.format(enumKey)}
                    checkedState={checkedState}
                    onUpdate={this.onUpdateHandle}
                    disabled={this.isReadOnly()}
                    widgetId={this.props.id}
                />
            );
        }
    }

    private renderAsText(): boolean {
        return this.props.enumAttribute.readOnly && this.props.readOnlyStyle == "text";
    }

    private isReadOnly(): boolean {
        return this.props.enumAttribute.readOnly;
    }

    private onUpdate(value: string, isChecked: boolean): void {
        // Store the changes in the checked checkboxes as comma separated value in the string attribute
        const valueStr = this.props.enumAttribute_str.value || "";
        if (!isChecked) {
            var res = valueStr.split(',').filter(s => s !== value).join(',');
            this.props.enumAttribute_str.setValue(res);
        } else {
            if (valueStr.length >= 1) {
                var res = valueStr + ',' + value;
            }
            else {
                var res = value;
            }
            this.props.enumAttribute_str.setValue(res);
        }
    }
}

export default hot(MultiSelectEnum);