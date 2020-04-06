( function() {
	var r = 0;
	var g = 124;
	var b = 186;

	function generate_rgb( r_diff, g_diff, b_diff ) {
		return 'rgb( calc( var( --r ) + ' + r_diff + ' ), calc( var( --g ) + ' + g_diff + ' ), calc( var( --b ) + ' + b_diff + ' ) )';
	}

	function generate_styles( base_r, base_g, base_b ) {
		var styles = '';

		styles += ':root { --r: ' + base_r + '; --g: ' + base_g + '; --b: ' + base_b + '; }' + "\n";
		styles += '.login #login_error, .login .message, .login .success { border-left-color: ' + generate_rgb( 0, 36, 24 ) + '; }' + "\n";
		styles += 'a { color: ' + generate_rgb( 0, -9, -4 ) + '; }' + "\n";
		styles += 'a:active, a:hover { color: ' + generate_rgb( 0, 36, 24 ) + '; }' + "\n";

		styles += 'input[type=checkbox]:focus, ' +
		          'input[type=color]:focus, ' +
		          'input[type=date]:focus, ' +
		          'input[type=datetime-local]:focus, ' +
		          'input[type=datetime]:focus, ' +
		          'input[type=email]:focus, ' +
		          'input[type=month]:focus, ' +
		          'input[type=number]:focus, ' +
		          'input[type=password]:focus, ' +
		          'input[type=radio]:focus, ' +
		          'input[type=search]:focus, ' +
		          'input[type=tel]:focus, ' +
		          'input[type=text]:focus, ' +
		          'input[type=time]:focus, ' +
		          'input[type=url]:focus, ' +
		          'input[type=week]:focus, ' +
		          'select:focus, ' +
		          'textarea:focus {';
		styles += 'border-color: ' + generate_rgb( 0, 0, 0 ) + '; }' + "\n";

		styles += 'input[type=checkbox]:focus, ' +
		          'input[type=color]:focus, ' +
		          'input[type=date]:focus, ' +
		          'input[type=datetime-local]:focus, ' +
		          'input[type=datetime]:focus, ' +
		          'input[type=email]:focus, ' +
		          'input[type=month]:focus, ' +
		          'input[type=number]:focus, ' +
		          'input[type=password]:focus, ' +
		          'input[type=radio]:focus, ' +
		          'input[type=search]:focus, ' +
		          'input[type=tel]:focus, ' +
		          'input[type=text]:focus, ' +
		          'input[type=time]:focus, ' +
		          'input[type=url]:focus, ' +
		          'input[type=week]:focus, ' +
		          'select:focus, ' +
		          'textarea:focus {';
		styles += 'box-shadow: 0 0 0 1px ' + generate_rgb( 0, 0, 0 ) + '; }' + "\n";

		styles += '.wp-core-ui .button-secondary { color: ' + generate_rgb( 0, -9, -25 ) + '; }' + "\n";
		styles += '.wp-core-ui .button, .wp-core-ui .button-secondary { border-color: ' + generate_rgb( 0, -9, -25 ) + '; }' + "\n";
		styles += '.wp-core-ui .button-secondary:hover { color: ' + generate_rgb( 1, -28, -51 ) + '; }' + "\n";
		styles += '.wp-core-ui .button-secondary:hover, .wp-core-ui .button.hover, .wp-core-ui .button:hover { border-color: ' + generate_rgb( 1, -28, -51 ) + '; }' + "\n";
		styles += '.login .button.wp-hide-pw:focus { border-color: ' + generate_rgb( 0, 0, 0 ) + '; }' + "\n";
		styles += 'input[type=checkbox]:checked::before { color: ' + generate_rgb( 67, 15, 0 ) + '; }' + "\n";
		styles += '.wp-core-ui .button-primary { background: ' + generate_rgb( 0, 0, 0 ) + '; }' + "\n";
		styles += '.wp-core-ui .button-primary { border-color: ' + generate_rgb( 0, 0, 0 ) + '; }' + "\n";
		styles += '.wp-core-ui .button-primary.focus, .wp-core-ui .button-primary.hover, .wp-core-ui .button-primary:focus, .wp-core-ui .button-primary:hover { background: ' + generate_rgb( 0, -11, 25 ) + '; }' + "\n";
		styles += '.wp-core-ui .button-primary.focus, .wp-core-ui .button-primary.hover, .wp-core-ui .button-primary:focus, .wp-core-ui .button-primary:hover { border-color: ' + generate_rgb( 0, -11, 25 ) + '; }' + "\n";
		styles += '.wp-core-ui .button-primary.active, .wp-core-ui .button-primary.active:focus, .wp-core-ui .button-primary.active:hover, .wp-core-ui .button-primary:active { background: ' + generate_rgb( 0, -22, -31 ) + '; }' + "\n";
		styles += '.wp-core-ui .button-primary.active, .wp-core-ui .button-primary.active:focus, .wp-core-ui .button-primary.active:hover, .wp-core-ui .button-primary:active { border-color: ' + generate_rgb( 0, -22, -31 ) + '; }' + "\n";
		styles += '.wp-core-ui .button-primary.focus, .wp-core-ui .button-primary:focus { box-shadow: 0 0 0 1px #fff, 0 0 0 3px ' + generate_rgb( 0, 0, 0 ) + '; }' + "\n";

		return styles;
	}

	jQuery( "#user_login" ).on( "input", function() {
		var hex = jQuery( this ).val();

		if ( hex.length < 7 )
			return;

		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		r = parseInt( result[1], 16 );
		g = parseInt( result[2], 16 );
		b = parseInt( result[3], 16 );

		var styles = generate_styles( r, g, b );
		jQuery( 'style#_generated' ).html( styles );
		jQuery( 'pre' ).html( styles );
	} );

} () );