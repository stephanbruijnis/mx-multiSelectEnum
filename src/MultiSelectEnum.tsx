import { Component, ReactNode, createElement } from "react";
import { hot } from "react-hot-loader/root";

import { MultiSelectEnumContainerProps } from "../typings/MultiSelectEnumProps";
import { CheckboxList } from "./components/CheckboxList";

import "./ui/MultiSelectEnum.css";

class MultiSelectEnum extends Component<MultiSelectEnumContainerProps> {

    private get universe(): string[] {
        // As this property can only be an Enum we know that universe is defined
        return this.props.enumAttribute.universe!;
    }

    render(): ReactNode {
        const value = this.props.enumAttribute.value || "";
        console.log("enumAttribute: " + {value});

        const selectedIndex = this.universe.indexOf(this.props.enumAttribute.value!);
        console.log("selected index: " + selectedIndex);   

        const captions = this.universe.map(name => this.props.enumAttribute.formatter.format(name)); // labels (name of enum)
        console.log("name: "+ captions);

        const universe = this.universe
        console.log("universe: "+ universe);

        //const keys = this.universe.keys(this.props.enumAttribute.value!);
        //console.log("keys: "+ keys);
        
        return <CheckboxList 
            value={value}
            universe={universe}
            captions={captions}
            style={this.props.style}
            className={this.props.class}
            tabIndex={this.props.tabIndex}
            />;
    }
    // private readonly onClickHandler = this.onClick.bind(this);

    // render(): ReactNode {
    //     return (
    //         <BadgeSample
    //             type={this.props.multiselectenumType}
    //             bootstrapStyle={this.props.bootstrapStyle}
    //             className={this.props.class}
    //             clickable={!!this.props.onClickAction}
    //             defaultValue={this.props.multiselectenumValue ? this.props.multiselectenumValue : ""}
    //             onClickAction={this.onClickHandler}
    //             style={this.props.style}
    //             value={this.props.valueAttribute ? this.props.valueAttribute.displayValue : ""}
    //         ></BadgeSample>
    //     );
    // }

    // private onClick(): void {
    //     if (this.props.onClickAction && this.props.onClickAction.canExecute) {
    //         this.props.onClickAction.execute();
    //     }
    // }
}

export default hot(MultiSelectEnum);