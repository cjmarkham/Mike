# A Mike(ro) Javascript Utility Framework

---

# Function List

. domReady

A cross browser solution for DOM ready event

	Mike.domReady();

Accepts a function as it's only parameter

	Mike.domReady(function() {
		alert('Dom is ready');
	});	
	
. new Element

Create an element

	var element = new Element('div');

. appendTo

Append an element to the DOM

	var element = new Element('div').appendTo('#foo');

Can pass a class name (.className) or an elements Id (#id)
If passing a class name a second parameter can be used to define the element index.

	var element = new Element('div').appendTo('.bar', 1);

. prependTo

Prepend an element to the DOM

	var element = new Element('div').prependTo('#foo');

Can pass a class name (.className) or an elements Id (#id)
If passing a class name a second parameter can be used to define the element index.

	var element = new Element('div').prependTo('.bar', 1);

. html

Change the html of an element

	var element = document.getElementById('foo');
	element.html('Bar');

. search

Search the DOM for an element

	. By Id

		var element = new Search('#foo');

	. By Class

		var element = new Search('.bar');

	. By regex

		var element = new Search('[a-z]');

Regex searches will be applied to all DOM elements ID's and Class names