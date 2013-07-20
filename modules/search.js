function Search (element, index) { 
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