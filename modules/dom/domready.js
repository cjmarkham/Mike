function domReady(callback) {
	if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', function() {
            callback();
        });
    } else if (document.onreadystatechange) {
        document.onreadystatechange(function() {
            callback();
        });
    }
}
