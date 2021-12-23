import { Component, ReactNode, createElement } from "react";

export interface InputProps {
    value: string;
    universe: Array<String>;
    captions: Array<String>;
    className?: string;
    index?: number;
    style?: CSSProperties;
    tabIndex?: number;
}

export class CheckboxList extends Component<InputProps> {

    render(): ReactNode {
        return (
            <div>
                {this.props.universe.map(this.eachEnumKey)}
            </div>
        );
    }

    private eachEnumKey(enumKey: string, i: number, captions: Array<String>): ReactNode {
        console.debug('eachEnumKey: ' + enumKey + ' ' +  i + captions[i]);
        return (
            <label><input type="Checkbox" /></label>
        );
    }
}