## MultiSelectEnum
With this widget you can easily select multiple values of an enumeration via checkboxes.

## Example use cases
Any situation where you want a fixed set of values (enumeration) that can be easily translated and stored on a single object. Some examples:
- Selecting which languages /days / documents are available
- Creating checklists & showing completed items;
- Building advanced search functionality;

## Features 
- Multi-select 
- Translatable values
- Store data on a single entity
- Display the list in a horizontal or vertical direction *(TO DO)*
- Specify the text of the label
- Attach a microflow for the on-change event

## Notes
- The string attribute is used to store the selected enumeration values. Make sure that the length of the string attribute is equals (or is larger than) the following sum: `length of enumeration keys + number of enumeration keys - 1`. 
- The widget is display/input widget, but the comma separate list of string values can also be used in microflows. Use StringSplit in the CommunityCommons module to get split the string attribute in to separate values.

## Limitations
- They enumeration keys need to be unique. The value of a complete key, e.g. `HelloWorld` should not be a substring of another key like `HelloWorldUSA`.
- This widget requires 2 attributes: the enumeration attribute to define the enumeration and a string attribute to store the selected values as a comma separate list. Note: the enumeration attribute can still be used for the standard behavior (like for selecting one value of the enumeration. This works independently of the multi-select functionality. The enumeration attribute is only required to determine which list of possible values to render.

## Usage
Download the widget into your app and add **Multi Select Enum** to a data view on a page. Configure the properties described below to determine how the widget will behave in your application

## Properties

### General Properties
- Direction – determines if the checkbox items will render horizontally or vertically (to do)

### Data source
- Target attribute enum – an attribute of the enumeration type, the values of which will be rendered as the checkbox items list
- Target attribute string – an attribute of the string type, which will store the selected values of the enumeration

### Events
- On change – this is the microflow that will be invoked for an on-change  event  (to do)

## Demo project
n/a

## Issues, suggestions and feature requests
Issues are used to track todos, bugs, feature requests, and more. [Create an issue here](https://github.com/stephanbruijnis/mx-multiSelectEnum/issues)

## Development and contribution
Play around and find out!