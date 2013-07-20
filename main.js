var Mike = {

    domReady : function(callback) {
        
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', function() {
                callback();
            });
        } else if (document.onreadystatechange) {
            document.onreadystatechange(function() {
                callback();
            });
        }
    },

    element : function(type) {
        var el = document.createElement(type);

        return el;
    },

    search : function(element, index) {
        if (element.indexOf('#') !== -1) {
            return document.getElementById(element.replace('#', ''));
        } else if (element.indexOf('.') !== -1) {
            var elements = document.getElementsByClassName(element.replace('.', ''));

            if (index) {
                return elements[index];
            }

            return elements;
        } else {
            // Assume regex
            var elements = document.body.querySelectorAll('*');
            var regex = new RegExp(element);
            var list = [];

            for (var i = 0; i < elements.length; ++i) {
                
                var element = elements[i];

                if (regex.test(element.getAttribute('id'))) {
                    list.push(element);
                } else if (regex.test(element.getAttribute('class'))) {
                    list.push(element);
                }
            }

            return list;
        }

    }

};


var Element = function(type) {
    return Mike.element(type);
}

var Search = function(element, index) {
    return Mike.search(element, index);
}

Node.prototype.appendTo = function(element, index) {
    if (element.indexOf('#') !== -1) {
        element = document.getElementById(element.replace('#', ''));
    } else if (element.indexOf('.') !== -1) {
        elements = document.getElementsByClassName(element.replace(',', ''));
    
        if (index) {
            element = elements[index];
        } else {
            element = elements[0];
        }
    }

    element.appendChild(this);

    return this;
}

Node.prototype.prependTo = function(element, index) {
    if (element.indexOf('#') !== -1) {
        element = document.getElementById(element.replace('#', ''));
    } else if (element.indexOf('.') !== -1) {
        var elements = document.getElementsByClassName(element.replace('.', ''));

        if (index) {
            element = elements[index];
        } else {
            element = elements[0];
        }
    }

    element.insertBefore(this, element.firstChild);

    return this;
}

Node.prototype.html = function(html) {
    this.innerHTML = html;

    return this;
}

Node.prototype.styles = function(styles) {
    var affixes = [
        'width', 'height'
    ];

    for (var i in styles) {
        if (affixes.indexOf(i) !== -1 && styles[i].toString().indexOf('px') == -1) {
            styles[i] += 'px';
        }

        this.style[i] = styles[i];
    }

    return this;
}