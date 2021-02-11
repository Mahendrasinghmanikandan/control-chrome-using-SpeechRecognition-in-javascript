$(document).ready(function(){


  var Api_key="AIzaSyCPl_Do9K8C5YJ0U9VChUJqYreETHFGW8c";
   
  var video='';
  
  
  
  $("#form").click(function (event){

  	event.preventDefault()
   
  	var search1=$("#search1").val()
  	var search2=$("#search2").val()

   
     search=search1+search2;

  	videoSearch(Api_key,search,100)
  })
// vlog
   $("#Vlog").click(function (event){

  	event.preventDefault()
   
  	var vsearch1=$("#vsearch1").val()
  	var vsearch2=$("#vsearch2").val()

   
     vsearch=vsearch1+vsearch2;

  	videoSearch(Api_key,vsearch,100)
  })

// programming

   $("#pVlog").click(function (event){

  	event.preventDefault()
   
  	var psearch1=$("#psearch1").val()
  	var psearch2=$("#psearch2").val()

   
     psearch=psearch1+psearch2;

  	videoSearch(Api_key,psearch,100)
  })

//cooking
$("#cooking").click(function (event){

  	event.preventDefault()
   
  	var csearch1=$("#csearch1").val()
  	var csearch2=$("#csearch2").val()

   
     csearch=csearch1+csearch2;

  	videoSearch(Api_key,csearch,100)
  })   

  function videoSearch(key,search,maxResult)
  {
  	$("#videos").empty();

     $.get("https://www.googleapis.com/youtube/v3/search?key="+key+"&type=video&part=snippet&maxResult="+maxResult+"&q="+search,function(d){

     	 // console.log(d);

     	 d.items.forEach(item=>{

     	 	
          
          video= '<div class="jumbotron shadow-lg"><iframe width="100%" height="500" src="https://www.youtube.com/embed/'+item.id.videoId+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
          
          $("#videos").append(video); 
     	 })
     })
  }

})