import { Component, ReactNode, createElement } from "react";

//import { CheckboxItem, CheckboxText } from "./components/CheckboxItem";

import { MultiSelectEnumPreviewProps } from "../typings/MultiSelectEnumProps";

declare function require(name: string): string;

export class preview extends Component<MultiSelectEnumPreviewProps> {
    render(): ReactNode {
        return (
            <div />
        );
    }
}

export function getPreviewCss(): string {
    return require("./ui/MultiSelectEnum.css");
}
