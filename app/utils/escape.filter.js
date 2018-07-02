const escape = function() {
    return function(input) {
        return window.encodeURIComponent(input);
    }
}

export default escape