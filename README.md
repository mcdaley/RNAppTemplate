# React Native App Template
The repository provides a template for quickly creating a new react native app. The easiest way to implement is to import the respository.

## To Do
### Figure out how to organize the code
In React Navigation 4.x it was easier to organize the code because I could store the header information for each screen in the static navigation options. That was deprecated in 5.x. This will mostly be a problem when creating a dynamic header, such as a __Save__ link that only becomes active when a user types some information.

One solution is to create the page using the <Header> component instead using the React Navigation headers. I quickly tried with React Native Elements, but the header was too large - NativeBase.io package seemed to work better.

## Installing

## Dependencies / Packages
### React Native 
### React Elements
### React Navigation 5.x
React Navigation changes how to configure and setup navigation in the app from the 4x versions. I've tried to create a template that leverages how to best design a UI with the new library. The new library uses __Dynamic__ routes, so you can only switch between __Navigation Stacks__ when they are wrapped in the BottomTabNavigation unlike before when I could wrap the whole app in the __appContainer__.

#### Styling
#### Header
#### Bottom Tab Navigation
#### Code Organization