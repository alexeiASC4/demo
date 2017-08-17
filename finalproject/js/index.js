function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").text(profile.getName());
    $("img").attr("src", profile.getImageUrl());
    $(".email").text(profile.getEmail());
    $("#or").append(  "<a class='btn btn-default'href='file:///C:/Users/ASC%20Guest/desktop/imani/finalprojectgamelist/indexhtml'role='button'>Enter</a>");
}


//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        $(".userName").text("USER_NAME");
        $("img").attr("src", "https://unsplash.it/200/300");
       $(".email").text("example@example.com");
    });
}
