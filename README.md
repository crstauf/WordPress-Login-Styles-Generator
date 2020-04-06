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

## Colors

|Selector|Property|RGB|Red|Green|Blue|
|:---|:---|:---|:---|:---|:---|
|Base||`rgb(0, 124, 186)`|0|124|186|
|`.login #login_error, .login .message, .login .success`|`border-left-color`|`rgb(0, 160, 210)`|0|+36|+24|
|`a`|`color`|`rgb(0, 115, 170)`|0|-9|-4|
|`a:active, a:hover, .login #backtoblog a:hover, .login #nav a:hover, .login h1 a:hover`|`color`|`rgb(0, 160, 210)`|0|+36|+24|
|`input[type=checkbox]:focus, input[type=color]:focus, input[type=date]:focus, input[type=datetime-local]:focus, input[type=datetime]:focus, input[type=email]:focus, input[type=month]:focus, input[type=number]:focus, input[type=password]:focus, input[type=radio]:focus, input[type=search]:focus, input[type=tel]:focus, input[type=text]:focus, input[type=time]:focus, input[type=url]:focus, input[type=week]:focus, select:focus, textarea:focus`|`border-color`|`rgb(0, 124, 186)`|0|0|0|
|`input[type=checkbox]:focus, input[type=color]:focus, input[type=date]:focus, input[type=datetime-local]:focus, input[type=datetime]:focus, input[type=email]:focus, input[type=month]:focus, input[type=number]:focus, input[type=password]:focus, input[type=radio]:focus, input[type=search]:focus, input[type=tel]:focus, input[type=text]:focus, input[type=time]:focus, input[type=url]:focus, input[type=week]:focus, select:focus, textarea:focus`|`box-shadow`|`rgb(0, 124, 186)`|0|0|0|
|`.wp-core-ui .button, .wp-core-ui .button-secondary`|`color`|`rgb(0, 113, 161)`|0|-9|-25|
|`.wp-core-ui .button, .wp-core-ui .button-secondary`|`border-color`|`rgb(0, 113, 161)`|0|-9|-25|
|`.wp-core-ui .button-secondary:hover, .wp-core-ui .button.hover, .wp-core-ui .button:hover`|`color`|`rgb(1, 96, 135)`|+1|-28|-51|
|`.wp-core-ui .button-secondary:hover, .wp-core-ui .button.hover, .wp-core-ui .button:hover`|`border-color`|`rgb(1, 96, 135)`|+1|-28|-51|
|`.login .button.wp-hide-pw:focus`|`border-color`|`rgb(0, 124, 186)`|0|0|0|
|`input[type=checkbox]:checked::before`|`color`|`rgb(67, 139, 186)`|+67|+15|0|
|`.wp-core-ui .button-primary`|`background`|`rgb(0, 124, 186)`|0|0|0|
|`.wp-core-ui .button-primary`|`border-color`|`rgb(0, 124, 186)`|0|0|0|
|`.wp-core-ui .button-primary.focus, .wp-core-ui .button-primary.hover, .wp-core-ui .button-primary:focus, .wp-core-ui .button-primary:hover`|`background`|`rgb(0, 113, 161)`|0|-11|-25|
|`.wp-core-ui .button-primary.focus, .wp-core-ui .button-primary.hover, .wp-core-ui .button-primary:focus, .wp-core-ui .button-primary:hover`|`border-color`|`rgb(0, 113, 161)`|0|-11|-25|
|`.wp-core-ui .button-primary.active, .wp-core-ui .button-primary.active:focus, .wp-core-ui .button-primary.active:hover, .wp-core-ui .button-primary:active`|`background`|`rgb(0, 102, 155)`|0|-22|-31|
|`.wp-core-ui .button-primary.active, .wp-core-ui .button-primary.active:focus, .wp-core-ui .button-primary.active:hover, .wp-core-ui .button-primary:active`|`border-color`|`rgb(0, 102, 155)`|0|-22|-31|
|`.wp-core-ui .button-primary.focus, .wp-core-ui .button-primary:focus`|`box-shadow`|`rgb(0, 124, 186)`|0|0|0|