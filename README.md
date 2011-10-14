jquery-pulldown: jQuery based pulldown menu button plugin
=========================================================


About
-----
This plugin can be used to create a simple button activated pull-down menu. You
can easily customize the look & feel of both the button and the displayed menu
through standard CSS styling. 


Basic Usage
-----------
This plugin requires jQuery, and was tested with jQuery 1.6.x but may work well
with other versions. To use, you must first load the jQuery and plugin files:

    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.pulldown.js"></script>

The plugin expects the following HTML strcuture: 

    <div id="my-pulldown-menu">
      <button>Click Me!</button>
      <ul>
        <li><a href="#">Menu option 1</a></li>
        <li><a href="#">Menu option 2</a></li>
        <li><a href="#">Menu option 3</a></li>
      </ul>
    </div>

To be specific, you are expected to have a container element (usually a DIV) with two
child elements: a "button", which will be used to display and hide the menu, and a 
sibling block element (in our example a "ul", but can also be a "div" etc.), which 
may contain links, buttons, a form or any other HTML. This element will be hidden and
only displayed when the menu is activated using the button. 

To create a pulldown menu out of the above structure, add the following code to your
page:

    <script type="text/javascript">
      $(document).ready(function() { 
          $('#my-pulldown-menu').pulldown();
      });
    </script>

You can, and should, use CSS to style out the menu. 

See the provided examples for more details.


Options
-------
The following options may be passed as an 'options' object to $().pulldown(): 

- pulledClass:    An additional class to be applied on the container element when the 
                  menu is activated. By default set to "pulled". Use this to apply 
                  additional styling on the opened menu.
- hideOnMouseOut: Hide the menu on mouse out. On by default. Pass 'false' if you want
                  the menu to only be hidden when the button is clicked again. 
- easing:         Menu hide / show easing function. 'swing' by default.
- content:        When set, this will be used as a selector for the menu's content 
                  element, instead of the default next sibling to the button. Can be 
                  used to create more flexible menu layouts.

For example, to create a pulldown menu button which applies the "active" class on 
open menus and doesn't hide the menu until it is clicked again, call the pulldown 
function like so: 

    $('#my-pulldown-menu').pulldown({
      pulledClass:    'active',
      hideOnMouseOut: false
    });


License & Legal
---------------
This program is free software. It comes without any warranty, to the extent permitted 
by applicable law. You can redistribute it and/or modify it under the terms of the 
Do What The Fuck You Want To Public License, Version 2, as published by Sam Hocevar. 
See http://sam.zoy.org/wtfpl/COPYING for more details. 


