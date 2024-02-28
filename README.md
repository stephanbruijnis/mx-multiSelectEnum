## MultiSelectEnum
With this widget you can easily select multiple values of an enumeration via checkboxes.

![appstore](/assets/multi-select-enum_appstore_001.png)

## Example use cases
Any situation where you want a fixed set of values (enumeration) that can be easily translated and stored on a single object. Some examples:
- Selecting which languages /days / documents are available
- Creating checklists & showing completed items;
- Building advanced search functionality;
- Indicating skill set

## Screenshot of an example page
In this screenshot the widget is shown in multiple configurations (editable, read only as text, read only as control, horizontal and vertical).

![preview](/assets/Screenshot_002.PNG)

## Features 
- Multi-select 
- Translatable values
- Store data on a single entity
- Display the list in a horizontal or vertical direction
- Specify the text of the label
- Attach a microflow for the on-change event
- Show text only version

## Usage
Download the widget into your app and add **Multi Select Enum** widget to a data view on your page. Configure the properties described below to determine how the widget will behave in your application

1. **Label** - set the label value (question or other hint for the checkboxes) or turn show label off
1. **Orientation** – determines if the checkbox items will render horizontally or vertically 
1. **Attribute enum** – an attribute that is on the entity used in the data view. The attribute needs to be of the type  enumeration type. This enumeration will be used to generate all the checkbox items
1. **Attribute string** – an attribute of the type string, which will store the selected values of the enumeration
1. **On change** - this is the action that will be invoked for an on-change event, if any of the checkboxes is clicked, this action will be started (e.g. execute nanoflow, microflow, save changes)

## Limitations
- This widget requires 2 attributes: the enumeration attribute to define the enumeration and a string attribute to store the selected values as a comma separate list. Note: the enumeration attribute can still be used for the standard behavior (like for selecting one value of the enumeration. This works independently of the multi-select functionality. The enumeration attribute is only required to determine which list of possible values to render.

## Notes
- The string attribute is used to store the selected enumeration values. Make sure that the length of the string attribute is equals (or is larger than) the following sum: `length of enumeration keys + number of enumeration keys - 1`. 
- The widget is display/input widget, but the comma separate list of string values can also be used in microflows. Use StringSplit in the CommunityCommons module to get split the string attribute in to separate values.