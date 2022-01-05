import { Component, ReactNode, createElement } from "react";
import { hot } from "react-hot-loader/root";

import { MultiSelectEnumContainerProps } from "../typings/MultiSelectEnumProps";
import { CheckboxItem } from "./components/CheckboxItem";
import { Alert } from "./components/Alert";

import "./ui/MultiSelectEnum.css";

class MultiSelectEnum extends Component<MultiSelectEnumContainerProps> {
    private readonly onUpdateHandle = this.onUpdate.bind(this);

    private get universe(): string[] {
        // As this property can only be an Enum we know that universe is defined
        return this.props.enumAttribute.universe!;
    }

    render(): ReactNode {
        // The enumeration labels (captions)
        const captions = this.universe.map(name => this.props.enumAttribute.formatter.format(name)); // labels (name of enum)
        console.debug("enumeration captions: "+ captions); 

        // All possible enumeration values (keys)
        const universe = this.universe
        console.debug("universe: "+ universe);

        // Current value of the string attribute that contains the comma separate values (enumeration keys)
        const valueStr = this.props.enumAttribute_str.value || "";
        console.debug("enumAttribute_str: " + {valueStr});

        // Enable validation feedback on this input element
        const validationFeedback = this.props.enumAttribute.validation;

        return (
            <div
                style={this.props.style}
                className={this.props.class}
                tabIndex={this.props.tabIndex}
            >
                {this.universe.map((this.eachEnumKey),this)} 
                <Alert>{validationFeedback}</Alert>
            </div>
        );
    }

    private eachEnumKey(enumKey: string, i: number): ReactNode {
        // For each key in the universe of the enumeration we will show a checkbox
        const valueStr = this.props.enumAttribute_str.value || "";

        // Determine of the current enumeration value (key) is available in the string and thus should be shown as a checked checkbox
        var checkedState = valueStr.includes(enumKey);

        return (
            <CheckboxItem 
                key={i} 
                index={i} 
                enumKey={enumKey} 
                label={this.props.enumAttribute.formatter.format(enumKey)} 
                checkedState={checkedState} 
                onUpdate={this.onUpdateHandle} 
                disabled={this.props.enumAttribute.readOnly} 
            />
        );
    }

    private onUpdate(value: string, isChecked: boolean): void {
        // Store the changes in the checked checkboxes as comma separated value in the string attribute
        const valueStr = this.props.enumAttribute_str.value || "";
        if (!isChecked) {
            var res = valueStr.split(',').filter(s => s !== value).join(',');
            this.props.enumAttribute_str.setValue(res);
        }else {
            if(valueStr.length > 1) {
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