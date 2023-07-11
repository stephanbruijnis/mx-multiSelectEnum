import { Component, ReactNode, createElement, Fragment } from "react";
import { hot } from "react-hot-loader/root";

import { CheckboxContainer } from "./components/CheckboxContainer";

import { MultiSelectEnumContainerProps } from "../typings/MultiSelectEnumProps";
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
        // const captions = this.universe.map(name => this.props.enumAttribute.formatter.format(name)); // labels (name of enum)
        // console.debug("enumeration captions: " + captions);

        // All possible enumeration values (keys)
        const universe = this.universe
        console.debug("universe: " + universe);
        // console.debug("id:" + this.props.id);
        // console.debug("name:" + this.props.name);

        // Current value of the string attribute that contains the comma separate values (enumeration keys)
        // const valueStr = this.props.enumAttribute_str.value || "";
        // console.debug("enumAttribute_str: " + { valueStr });
       
        // Enable validation feedback on this input element
        const validationFeedback = this.props.enumAttribute.validation;

        return (
            <Fragment>
                <CheckboxContainer
                    id={this.props.id}
                    style={this.props.style}
                    className={this.props.class}
                    tabIndex={this.props.tabIndex}
                    hasError={!!validationFeedback}/>
                <Alert id={this.props.id + "-error"}>{validationFeedback}</Alert>
            </Fragment>
        );
    }  
}

export default hot(MultiSelectEnum);