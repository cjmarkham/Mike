var log = function(info, extra) {
    var debug = document.getElementById('debug');
    debug.innerHTML = debug.innerHTML + '<li>' + info + '</li>';

    console.log(info, extra);
}

var Jammy = function() {
    this.acceptedHandles = [
        'click','keyup','keydown','change'
    ];

    this.handles = this.getHandles();
    this.init();
}

Jammy.prototype.getHandles = function() {
    var matchingElements = [];
    var allElements = document.getElementsByTagName('*');
    
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].getAttribute('data-handle')) {
            matchingElements.push(allElements[i]);
        }
    }

    return matchingElements;
}

Jammy.prototype.init = function() {

    for (var i in this.handles) {
        var element = this.handles[i];
        var handleType = element.getAttribute('data-handle');

        // Check against an array to see if handle is valid
        if (this.acceptedHandles.indexOf(handleType) == -1) {
            log('No handle available for event: ' + handleType, element);
            continue;
        }

        (function(element) {
            var callback = element.getAttribute('data-callback');

            if (!callback) {
                log('Element callback is not a function', element);
                return false;
            }

            // Add the event
            element.addEventListener(handleType, function() {
                var method = window;
                var parts = callback.split('.');

                // enables nested functions like class.method
                for (var p in parts) {
                    method = method[parts[p]];
                }

                // params seperated with ,
                var params = element.getAttribute('data-params');

                if (!params) {
                    params = [];
                }

                if (params.indexOf(',') !== -1) {
                    params = params.split(',');
                } else {
                    params = [params];
                }

                // call the function with its arguments
                method.apply(this, params);
            });
        })(element);
    }
}

function someFn(one,two,four) {
    log(four);
}

function another(id) {
    log(id);
}

function keyup() {
    log(this.value);
}

function change() {
    log(this.value);
}

if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', function(){
        new Jammy();
    });
} else if (document.attachEvent) {
    document.attachEvent('onreadystatechange', function(){
        new Jammy();
    });
}