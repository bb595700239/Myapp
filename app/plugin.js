//some shitty jquery plugin...
(function ( $ ) {
    const shade = "#556b2c";
    $.fn.greenify = function() {
        this.css( "color", shade );
        return this;
    };
}( jQuery ));
