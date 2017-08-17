var rownum = 1;
var database=firebase.database().ref();
//button executes this function
function updateDB(){
    var img=$("#piclink").val();
    var name = $("#name").val();
    var gamename=$("#gamename").val();
    var gamel = $("#gamelink").val();
  
    console.log(name + "'s game: " + gamename);
  

    //Update database here
var value ={
    Pic:img,
    Name: name,
    Gamename: gamename,
    Gamelink: gamel
};
database.push(value);}


database.on("child_added", function(rowData){
  var row= rowData.val();
  var img=row.Pic;
    var name=row.Name;  
    var gamename=row.Gamename;
    var gamel=row.Gamelink;
var gamelist="<a href='"+gamel+"'<p>"+ gamename +"  by "+name+ " has " +" votes </p></a>";
console.log(gamelist);
    var text = "<div class='col-md-4'>" + "<div class='col-md-12'><img src=" + img + " style='width:300px;height:200px;'></div><div class='col-md-12'><a href='" + gamel + "'<p>" + gamename + " by " + name + "</p></a></div></div>";
$("#gamelist").append(text);


})

// $('#like').click(function(){
//     // database.on("child_",function(rowData){
//         console.log("a");
//         // row.Score++;
        
//     // updateDB();
//     // })
// });
