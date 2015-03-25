$(document).ready(function(){
		var decimal = $('#decimal').css('pointer-events', 'none');
		var result = $('#resultado').css('pointer-events', 'none');
		var octal = $('#oct').css('pointer-events', 'none');
		var hex = $('#hex').css('pointer-events', 'none');
		var opc = $('input[name=opc]:checked').attr('id');

		decimal.keyup(function(){
	    var recebe = decimal.val().replace(/[^0-9]+/g,'');
	    decimal.val(recebe);
	    var transforma = parseInt(recebe);
	    var bin = transforma.toString(2);
	    var he = transforma.toString(16);
	    var oct = transforma.toString(8);
	    
	    if(!($('#decimal').val() == "")){	
	      result.val('Bin('+bin+')');
	      hex.val('Hex('+he+')');
	      octal.val('Oct('+oct+')');

	    }
	    else{
	        result.val('');
	        hex.val('');
	        octal.val('');
	    }
		});

		result.keyup(function(){
			var recebe = result.val().replace(/[^0-1]+/g,'');
			result.val(recebe);
			var transforma = parseInt(recebe, 2);
			var oct = transforma.toString(8)
			var he = transforma.toString(16);
			
			if(!($('#resultado').val() == "")){
				decimal.val('Dec('+transforma+')');
				hex.val('Hex('+he+')');
				octal.val('Oct('+oct+')');
	
			}


			else{
				decimal.val('');
				hex.val('');
				octal.val('');
			}
		});

		octal.keyup(function(){
			var recebe = octal.val().replace(/[^0-7]+/g,'');
			octal.val(recebe);
			var transforma = parseInt(recebe, 8);//decimal
			var binario = transforma.toString(2);
			var he = transforma.toString(16);

			if(!($('#oct').val() == "")){
				decimal.val('Dec('+transforma+')');
				result.val('Bin('+binario+')');
				hex.val('Hex('+he+')');
			}

			else{
				decimal.val('');
				result.val('');
				hex.val('');
			}
		});

		hex.keyup(function(){
			var recebe = hex.val().replace(/[^0-9 a-f A-F]+/g,'');
			hex.val(recebe);
			var transforma = parseInt(recebe, 16);
			var binario = transforma.toString(2);
			var oct = transforma.toString(8);
			var he = transforma.toString(16);

			if(!($('#hex').val() == "")){
				decimal.val('Dec('+transforma+')');
				octal.val('Oct('+oct+')');
				result.val('Bin('+binario+')');
			}
			else{
				decimal.val('');
				octal.val('');
				result.val('');
			}
		});
		var opc = $('input[name=opc]:checked').attr('id');
		$('#c1').change(function(){
			var opc = $('input[name=opc]:checked').attr('id');
			switch(opc){
				case 'c1': $('#decimal').prop("disabled", true);
						   $('#resultado').prop("disabled", false).css('pointer-events', 'visible');
						   $('#hex').prop("disabled", true);
						   $('#oct').prop("disabled", true);
						   $('#resultado').focus(); break;
			}	
		});
			
		$('#c2').change(function(){
			var opc = $('input[name=opc]:checked').attr('id');
			switch(opc){
				
				case 'c2': $('#decimal').prop("disabled", true);
						   $('#resultado').prop("disabled", true);
						   $('#hex').prop("disabled", false).css('pointer-events', 'visible');
						   $('#oct').prop("disabled", true);
						   $('#hex').focus(); break; 	
			}	
		});

		$('#c3').change(function(){
			var opc = $('input[name=opc]:checked').attr('id');
			switch(opc){
				
				case 'c3': $('#decimal').prop("disabled", false).css('pointer-events', 'visible');
						   $('#resultado').prop("disabled", true);
						   $('#hex').prop("disabled", true);
						   $('#oct').prop("disabled", true);
						   $('#decimal').focus(); break; 	
			}	
		});

		$('#c4').change(function(){
			var opc = $('input[name=opc]:checked').attr('id');
			switch(opc){
				
				case 'c4': $('#decimal').prop("disabled", true);
						   $('#resultado').prop("disabled", true);
						   $('#hex').prop("disabled", true);
						   $('#oct').prop("disabled", false).css('pointer-events', 'visible');
						   $('#oct').focus(); break; 	
			}	
		});
	
	});
