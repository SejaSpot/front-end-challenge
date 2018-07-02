const unsafe = function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
}

export default unsafe