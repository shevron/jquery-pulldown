jquery-pulldown: jQuery based pulldown menu button plugin
=========================================================

About
-----
This plugin can be used to create a simple button activated pull-down menu. You
can easily customize the look & feel of both the button and the displayed menu
through standard CSS styling. 

Usage
-----
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
child elements: a <button> and a <ul>. The button will be used to display and hide the
menu. The <ul> element, which may contain links, buttons, a form or any other HTML, 
will be hidden and only displayed when the menu is activated using the button. 

To create a pulldown menu out of the above structure, add the following code to your
page:

    <script type="text/javascript">
      $(document).ready(function() { 
          $('#my-pulldown-menu').pulldown();
      });
    </script>

You can, and should, use CSS to style out the menu. 

See the provided examples for more details.


