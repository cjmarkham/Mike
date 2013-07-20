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