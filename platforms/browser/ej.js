try{
	
	document.addEventListener('keyup',function(){
		var input = document.getElementById('field_email').value;
		document.getElementById('input_email').innerHTML = input;
		
		});


		document.addEventListener('keyup',function(){
		var input = document.getElementById('field_pass').value;
		document.getElementById('input_pass').innerHTML = input;
		});

		

		document.addEventListener('keyup',function(){
		var input = document.getElementById('field_name').value;
		document.getElementById('input_name').innerHTML = input;
		});


		document.addEventListener('keyup',function(){
		var input = document.getElementById('field_last').value;
		document.getElementById('input_last').innerHTML = input;
		});


		document.addEventListener('keyup',function(){
		var input = document.getElementById('field_number').value;
		document.getElementById('input_number').innerHTML = input;
		});

 

		document.addEventListener('keyup',function(){
		var input = document.getElementById('field_date').value;
		document.getElementById('input_date').innerHTML = input;
		});

		document.addEventListener('keyup',function(){
		var input = document.getElementById('field_address').value;
		document.getElementById('input_address').innerHTML = input;
		});




		document.addEventListener('keyup',function(){
		var input = document.getElementById('field_zip').value;
		document.getElementById('input_zip').innerHTML = input;
		});


		document.addEventListener('keyup',function(){
		var input = document.getElementById('field_gender').value;
		document.getElementById('input_gender').innerHTML = input;
		document.getElementById('input_sex').innerHTML = input;

		});










		
	
}

catch(e){
	console.log(e);
}