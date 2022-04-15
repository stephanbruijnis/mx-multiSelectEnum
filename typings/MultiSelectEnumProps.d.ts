/**
 * This file was generated from MultiSelectEnum.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ActionValue, EditableValue } from "mendix";

export type OrientationModeEnum = "horizontal" | "vertical";

export interface MultiSelectEnumContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    enumAttribute: EditableValue<string>;
    enumAttribute_str: EditableValue<string>;
    orientationMode: OrientationModeEnum;
    onChangeAction?: ActionValue;
}

export interface MultiSelectEnumPreviewProps {
    readOnly: boolean;
    enumAttribute: string;
    enumAttribute_str: string;
    orientationMode: OrientationModeEnum;
    onChangeAction: {} | null;
}
