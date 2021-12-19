import { Component, ReactNode, createElement } from "react";

export interface InputProps {
    value: string;
    universe: Array;
    className?: string;
    index?: number;
    style?: CSSProperties;
    tabIndex?: number;
}

export class CheckboxList extends Component<InputProps> {
    render(): ReactNode {
        return (
            <div>
                this.props.universe.map(function (keyz))
                {
                    <input type ="checkbox" name="enumGroup" value="{keyz}" />
                }
            </div>
            );
    }
}