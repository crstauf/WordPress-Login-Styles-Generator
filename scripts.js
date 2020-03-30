jQuery( "#user_login" ).on( "input", function() {
    var hex = jQuery( this ).val();

    if ( hex.length < 7 )
        return;

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var rgb = result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
    
    jQuery( '.code' ).html( "/**\n * Base color: " + hex + "\n * @link https://jsfiddle.net/crstauf/p9y3m6j2/ Generator.\n */\n\n" + 
"body {\n\t--r: " + rgb.r + ";\n\t--g: " + rgb.g + ";\n\t--b: " + rgb.b + ";\n}\n\n" +
"#wp-submit {\n\t" + 
  "background: rgb( var( --r ), var( --g ), var( --b ) );\n\t" + 
  "border-top-color:    rgb( var( --r ), calc( var( --g ) + 11 ), var( --b ) );\n\t" + 
  "border-left-color:   rgb( var( --r ), calc( var( --g ) - 30 ), calc( var( --b ) - 33 ) );\n\t" + 
  "border-right-color:  rgb( var( --r ), calc( var( --g ) - 30 ), calc( var( --b ) - 33 ) );\n\t" + 
  "border-bottom-color: rgb( var( --r ), calc( var( --g ) - 30 ), calc( var( --b ) - 33 ) );\n\t" + 
  "text-shadow: 0 -1px 1px rgb( var( --r ), calc( var( --g ) - 30 ), calc( var( --b ) - 33 ) ),\n\t" + 
  "             1px 0 1px  rgb( var( --r ), calc( var( --g ) - 30 ), calc( var( --b ) - 33 ) ),\n\t" + 
  "             0 1px 1px  rgb( var( --r ), calc( var( --g ) - 30 ), calc( var( --b ) - 33 ) ),\n\t" + 
  "             -1px 0 1px rgb( var( --r ), calc( var( --g ) - 30 ), calc( var( --b ) - 33 ) );\n\t" + 
  "box-shadow: 0 1px 0 rgb( var( --r ), calc( var( --g ) - 30 ), calc( var( --b ) - 33 ) );\n" + 
"}\n\n" +
"#wp-submit:hover{\n\t" + 
  "border-color: rgb( var( --r ), calc( var( --g ) - 30 ), calc( var( --b ) - 33 ) ) !important;\n\t" + 
  "background:   rgb( var( --r ), calc( var( --g ) - 30 ), calc( var( --b ) - 33 ) ) !important;\n" + 
"}\n\n" +
"#user_login:focus,\n" +
"#user_pass:focus,\n" +
"#rememberme:focus {\n\t" + 
  "box-shadow: 0 0 2px rgba( calc( var( --r ) + 30 ), calc( var( --g ) + 7 ), calc( var( --b ) + 4 ), 0.8 );\n\t" + 
  "border-color: rgb( calc( var( --r ) + 91 ), calc( var( --g ) + 24 ), calc( var( --b ) + 31 ) );\n" + 
"}\n\n" + 
".login p.message a,\n" + 
".login #login_error a {\n\t" + 
  "color: rgb( var( --r ), calc( var( --g ) - 18 ), calc( var( --b ) - 16 ) );\n" + 
"}\n\n" + 
".login p.message a:hover,\n" + 
".login #login_error a:hover,\n" + 
".login #nav a:hover,\n" +
".login #backtoblog a:hover {\n\t" + 
  "color: rgb( var( --r ), calc( var( --g ) + 27 ), calc( var( --b ) + 24 ) );\n" + 
"}\n\n" + 
".login .message {\n\t" + 
  "border-left-color: rgb( var( --r ), calc( var( --g ) + 27 ), calc( var( --b ) + 24 ) );\n" + 
"}\n\n" + 
"#rememberme::before {\n\t" + 
  "color: rgb( calc( var( --r ) + 30 ), calc( var( --g ) + 7 ), calc( var( --b ) + 4 ) );\n" + 
"}" );
    
    jQuery( 'body' ).attr( 'style', '--r: ' + rgb.r + '; --g: ' + rgb.g + '; --b: ' + rgb.b + ';' );
  
} );
