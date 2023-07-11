import { Component, ReactNode, createElement, CSSProperties} from "react";

import { CheckboxItemText, CheckboxItem } from ./CheckboxItem";

import classNames from "classnames";

export interface ContainerProps {
    id?: string;
    className?: string;
    style?: CSSProperties;
    tabIndex?: number;
    hasError?: boolean;
    orientationMode?: string;
    universe: string[];
    enumAttributeStr: string;
    enumAttribute: string;
}

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // extends React's HTMLAttributes
      // https://stackoverflow.com/questions/46215614/property-does-not-exist-on-type-detailedhtmlprops-htmldivelement-with-react
      hasError?: boolean;
    }
  }

export class CheckboxContainer extends Component<ContainerProps> {
    render(): ReactNode {
        const className = classNames(this.props.className,(this.props.orientationMode === "horizontal" ? "checkboxes inline" : "checkboxes"));
        return (
            <div 
                className={className}
                style={this.props.style}
                tabIndex={this.props.tabIndex}
                hasError={this.props.hasError}     
            >
                {this.props.universe.map((this.eachEnumKey), this)}
            </div>
        );
    }

    private eachEnumKey(enumKey: string, i: number): ReactNode {
        // For each key in the universe of the enumeration we will show a checkbox
        const valueStr = this.props.enumAttributeStr || "";

        // Determine of the current enumeration value (key) is available in the string and thus should be shown as a checked checkbox
        var checkedState = valueStr.includes(enumKey);

        if (this.renderAsText()){
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
        else {
            return (
                <CheckboxItemText
                    label={this.props.enumAttribute.formatter.format(enumKey)}
                />
            );
        }
    }

    private renderAsText(): boolean {
        return this.props.enumAttribute.readOnly && this.props.readOnlyStyle=="text"; 
    }

    private isReadOnly(): boolean {
        return this.props.enumAttribute.readOnly;
    }

    private onUpdate(value: string, isChecked: boolean): void {
        // Store the changes in the checked checkboxes as comma separated value in the string attribute
        const valueStr = this.props.enumAttributeStr.value || "";
        if (!isChecked) {
            var res = valueStr.split(',').filter(s => s !== value).join(',');
            this.props.enumAttributeStr.setValue(res);
        } else {
            if (valueStr.length >= 1) {
                var res = valueStr + ',' + value;
            }
            else {
                var res = value;
            }
            this.props.enumAttributeStr.setValue(res);
        }
    }
}


