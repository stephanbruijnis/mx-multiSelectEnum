import { Component, ReactNode, createElement } from "react";

export interface InputProps {
    value: string;
    className?: string;
    index?: number;
    style?: CSSProperties;
    tabIndex?: number;
}

export class CheckboxList extends Component<InputProps> {
    render(): ReactNode {
        return (
            <div>
                <input type ="checkbox" name="enumGroup" value="es_US"/>
                <input type ="checkbox" name="enumGroup" value="es_ES"/>
                <input type ="checkbox" name="enumGroup" value="es_MX"/>
                <input type ="checkbox" name="enumGroup" value="en_GB"/>
            </div>
            );
    }
}