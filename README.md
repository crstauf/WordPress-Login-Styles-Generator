# WordPress Login: Styles Generator

> Originally developed on JSFiddle: https://jsfiddle.net/crstauf/p9y3m6j2/

A generator to style the WordPress native login form from a single (primary) color. 

## Instructions

Enter the hex code of your primary color into the username field (seven characters), and the CSS will be generated and provided beneath the simulated login form.

## How It Works

The relative values are determined using the "Submit" button's background color as the primary (or base) color. The CSS uses custom variables and calculations to figure out all the other colors. If you know the RGB values of your primary color, changing the values of the variables (on `body`) to those values is all that's needed to change the primary color.

|Variable Name|Color|
|:---|:---|
|`--r`|Red|
|`--g`|Green|
|`--b`|Blue|
