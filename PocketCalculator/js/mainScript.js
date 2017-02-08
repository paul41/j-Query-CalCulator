var arr=[];
		var temp=[];
		var inputNum;
		$(document).ready(function(){
			$('#offC').click(function(){
				$("#numb").css('visibility','hidden');
				$("#numb").html('');
			});
			
			$('button').not('#offC,#eq,#plsmns').click(function(){
				inputNum = $(this).text();
				if($("#numb").text() =='ON' || $("#numb").text().indexOf('ON') > 0){
					$("#numb").html('');
				}
				$("#numb").css('visibility','visible');
				$("#numb").append(inputNum);
			});
			$('#eq').click(function(){
				calculations();
			});
			function calculations(){
				var check=$('#numb').text();
				var pattern=new RegExp(/[\D]+$/);
				var results = pattern.test(check);
				if(results == true){
					check=check.substr(0,check.length-1);
					console.log(check);
				}
				<!-- else{ -->
				if(check.indexOf('+') > 0){
					
					var arr = check.split('+');
					for( var i=0;i< arr.length; i++){
						temp[i]=parseFloat(arr[i]);
					}
						
					var sumTotal=temp.reduce(function(total,curNum){
						
						return total+curNum;
					});
					console.log(sumTotal);
					$("#numb").html(sumTotal);
				}
				else if(check.indexOf('-') > 0){
					
					var arr = check.split('-');
					for( var i=0;i< arr.length; i++){
						temp[i]=parseFloat(arr[i]);
					}
					console.log(temp);
					var diff=temp.reduce(function(total,curNum){
						return total-curNum;
					});
					$("#numb").html(diff);
				}
				else if(check.indexOf('*') > 0){
					var arr = check.split('*');
					for( var i=0;i< arr.length; i++){
						temp[i]=parseFloat(arr[i]);
					}
					console.log(temp);
					var mult=temp.reduce(function(total,curNum){
						return total*curNum;
					});
					$("#numb").html(mult);
				}
				else if(check.indexOf('/') > 0){
					var arr = check.split('/');
					for( var i=0;i< arr.length; i++){
						temp[i]=parseFloat(arr[i]);
					}
					var div=temp.reduce(function(total,curNum){
						return total/curNum;
					});
					$("#numb").html(div);
				}
				else if(check.indexOf('%') > 0){
					var arr = check.split('%');
					for( var i=0;i< arr.length; i++){
						temp[i]=parseFloat(arr[i]);
					}
					var modu=temp.reduce(function(total,curNum){
						return total%curNum;
					});
					$("#numb").html(modu);
				}
			}
			
			$('#plus').click(function(){
				var patt=new RegExp(/[ \/\ | + | \-\ | * | % ][\d]+/g);
				console.log($('#numb').text());
				var res = patt.test($('#numb').text());
				console.log(res);
				if( res == true ){
					calculations();
					if($('#numb').text().substr($('#numb').text().length-1,1) != '+'){
						$("#numb").append(inputNum);
					}
				}	
			});
			
			$('#minus').click(function(){
				var patt=new RegExp(/[ \/\ | + | \-\ | * | % ][\d]+/g);
				console.log($('#numb').text());
				var res = patt.test($('#numb').text());
				console.log(res);
				if( res == true ){
					calculations();
					if($('#numb').text().substr($('#numb').text().length-1,1) != '-'){
						$("#numb").append(inputNum);
					}
				}
			});
			
			$('#mult').click(function(){
				var patt=new RegExp(/[ \/\ | + | \-\ | * | % ][\d]+/g);
				console.log($('#numb').text());
				var res = patt.test($('#numb').text());
				 console.log(res);
				if( res == true ){
					calculations();
					if($('#numb').text().substr($('#numb').text().length-1,1) != '*'){
						$("#numb").append(inputNum);
					}
				}
			});
			
			$('#div').click(function(){
				var patt=new RegExp(/[ \/\ | + | \-\ | * | % ][\d]+/g);
				var res = patt.test($('#numb').text());
				 console.log(res);
				if( res == true ){
					calculations();
					if($('#numb').text().substr($('#numb').text().length-1,1) != '/'){
						$("#numb").append(inputNum);
					}
				}
			});
			
			$('#modu').click(function(){
				var patt=new RegExp(/[ \/\ | + | \-\ | * | % ][\d]+/g);
				var res = patt.test($('#numb').text());
				 console.log(res);
				if( res == true ){
					calculations();
					if($('#numb').text().substr($('#numb').text().length-1,1) != '-'){
						$("#numb").append(inputNum);
					}
				}
			});
			
			$('#plsmns').click(function(){
				if($('#numb').text().length >= 1){
					var togle=parseFloat($('#numb').text());
					togle *= -1;
					$("#numb").text(togle);
				}
			});		
		});