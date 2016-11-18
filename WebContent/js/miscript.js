/**
 * 
 */

$(document).ready(function(){


	

	
$( "#accionar" ).on("click", function() {
	
	var valor = $('input:text[name=num_usuarios]').val();
	
		$.getJSON( "https://randomuser.me/api/?results="+valor, function( json ) {
			var datos = json.results;
			
			$("#resultados > div").empty();
			
			$.each(datos, function(i, valor) {
				var elem = $( "#plantilla" ).clone(); 
				
				var urlimagen = datos[i].picture.large;
				var nombrecompleto = datos[i].name.first +' '+ datos[i].name.last;
				var email = datos[i].email;
				var telefono = datos[i].phone;
				
				$(elem).prop('id','plantilla'+i+1);
				$(elem).find("img").attr("src",urlimagen);
				$(elem).find("#nombre").text(datos[i].name.first +' '+ datos[i].name.last);
				$(elem).find("#email").text(email);
				$(elem).append(telefono);
				
				
				$(elem).appendTo( "#resultados > div" ).show();
				
				
				$( elem ).on("click", function() {
					$(this).find(".nombre").css("font-weight","bolder");
					});


	        });
			
		});
		
		});




});


