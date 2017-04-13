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
		blog.push(article)
		save();

	})
	 function AddBlog(tab){
	 	console.log(blog)
	 	for (var i = 0; i < tab.length; i++) {
	 		var add = tab[i]
	 		$("#coter").append('<a href="#">'+add[i]["titre"]+'</a>');
	 		$("#titre").append('<td><div class="panel-body">'+add[i]["corp"]+'</div></td>')
	 	}

	 }




	function save(){
		$.ajax({ 
			url:'http://192.168.1.50/json-db', 
			data: { task: "set",
					key: "Blogelo",
			 		value: JSON.stringify(blog),
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
});













///////////// pageTwo \\\\\\\\\\\\\\\\\\\\\\

$("#dropdown").click(function () {

	$(this)
})







