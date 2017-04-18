///////// pageOne \\\\\\\\\\ 

$(document).ready(function() {
	load();
	

	var blog;
	var article;
	
	$("#save").click(function(){
		article={
			"titre" : $("#see").val(),
			"corp" : $("#write").val(),
		}


		 $("#see").val(" ");
		 $("#write").val(" ");
		blog.push(article);
		save();
	});



	 function AddBlog(tab){
	
	 	for (var i = 0; i < tab.length; i++) {
	 		
	 		$("#coter").append('<td></td>');
	 		$("#coter").append('<a href="#">'+tab[i]["titre"]+'</a>');
	 		$("#titre").append('<td></td>');
	 		$("#titre").append('<div class="panel-body">'+tab[i]["corp"]+'</div>');
	 	}

	 }




	function save(){
	

		$.ajax({ 
			url:'http://192.168.1.50/json-db', 
			data: { task: "set",
					key: "Blogelo",
			 		value: JSON.stringify(article),
					} 
			});
	}

	function load(){
			$.ajax({ 
				url:'http://192.168.1.50/json-db', 
				data: { task: 'get',
						key: 'Blogelo', 
						} 
					})
			.done(function(data){
				if(data != null){

					blog=JSON.parse(data);
					AddBlog(blog);
				}
			})
		}



	$("#write").on('keyup', function(){
	var content = markdown.toHTML($("#write").val());

		$('#cont').html(content);

	});



});







///////////// pageTwo \\\\\\\\\\\\\\\\\\\\\\

$("#haut").append('<div id="heure"></div>')

$("#heure").html(function () {


	var mois=new Array(13);
	mois[1]="Janvier";
	mois[2]="Février";
	mois[3]="Mars";
	mois[4]="Avril";
	mois[5]="Mai";
	mois[6]="Juin";
	mois[7]="Juillet";
	mois[8]="Août";
	mois[9]="Septembre";
	mois[10]="Octobre";
	mois[11]="Novembre";
	mois[12]="Décembre";

	var time=new Date();
	var month=mois[time.getMonth() + 1];
	var date=time.getDate();
	var year=time.getYear();

	if (year < 2000) 
		year = year + 1900;
		document.write("Aujourd'hui " +date + " ");
		document.write(month + " " + year);
})






















