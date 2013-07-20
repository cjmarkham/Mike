var Mike = {

    el : {},

    domReady : function(callback) {
        
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', function() {
                callback();
            });
        } else if (document.onreadystatechange) {
            document.onreadystatechange(function() {
                callback();
            });
        } else {
            console.error('Error');
        }
    },

    element : function(type) {
        var el = document.createElement(type);
        this.el = el;

        return this.el;
    },

};


var Element = function(type) {
    return Mike.element(type);
}

Node.prototype.appendTo = function(element) {
    if (element.indexOf('#') !== -1) {
        element = document.getElementById(element.replace('#',''));
    }

    element.appendChild(this);

    return this;
}

Node.prototype.prependTo = function(element) {
    if (element.indexOf('#') !== -1) {
        element = document.getElementById(element.replace('#',''));
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