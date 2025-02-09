/**
 * This file was generated from MultiSelectEnum.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { EditableValue } from "mendix";

export type OrientationModeEnum = "horizontal" | "vertical";

export type ReadOnlyStyleEnum = "control" | "text";

export interface MultiSelectEnumContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    enumAttribute: EditableValue<string>;
    enumAttribute_str: EditableValue<string>;
    orientationMode: OrientationModeEnum;
    readOnlyStyle: ReadOnlyStyleEnum;
}

export interface MultiSelectEnumPreviewProps {
    readOnly: boolean;
    enumAttribute: string;
    enumAttribute_str: string;
    orientationMode: OrientationModeEnum;
    readOnlyStyle: ReadOnlyStyleEnum;
    onChangeAction: {} | null;
}
