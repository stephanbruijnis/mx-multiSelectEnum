import { Component, ReactNode, createElement } from "react";
import { hot } from "react-hot-loader/root";

import { MultiSelectEnumContainerProps } from "../typings/MultiSelectEnumProps";
import { CheckboxItem } from "./components/CheckboxItem";

import "./ui/MultiSelectEnum.css";

class MultiSelectEnum extends Component<MultiSelectEnumContainerProps> {
    private readonly onLeaveHandle = this.onLeave.bind(this);

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

        console.log("enumAttribute: " + this.props.enumAttribute.displayValue)

        const universe = this.universe
        console.log("universe: "+ universe);

        //const keys = this.universe.keys(this.props.enumAttribute.value!);
        //console.log("keys: "+ keys);

        // This is not allowed, but it is what we want
        //this.props.enumAttribute.setValue("Dutch,English");

        const valueStr = this.props.enumAttribute_str.value || "";
        console.log("enumAttribute_str: " + {valueStr});

        return (
            <div
            style={this.props.style}
            className={this.props.class}
            tabIndex={this.props.tabIndex}
            >
                {this.universe.map((this.eachEnumKey),this)} 
            </div>
        );
        
        // return <CheckboxList 
        //     value={value}
        //     universe={universe}
        //     captions={captions}
        //     style={this.props.style}
        //     className={this.props.class}
        //     tabIndex={this.props.tabIndex}
        //     />;
    }

    private eachEnumKey(enumKey: string, i: number, uni: Array<string>): ReactNode {
        console.debug('eachEnumKey: ' + enumKey + ' ' +  i + uni);
        console.debug('test:' + this.props.enumAttribute.value)
        const valueStr = this.props.enumAttribute_str.value || "";
        var checkedState = valueStr.includes(enumKey);
        console.log('checkedState: ' + checkedState)
        return (
            <CheckboxItem key={i} label={this.props.enumAttribute.formatter.format(enumKey)} checkedState={checkedState} onLeave={this.onLeaveHandle} updateValue={this.updateSelectedValues}/>
        );
    }

    private onLeave(value: string, isChanged: boolean): void {
        if (!isChanged) {
            return;
        }
        this.props.textAttribute.setValue(value);
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