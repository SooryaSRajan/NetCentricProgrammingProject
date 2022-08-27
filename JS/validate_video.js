function validateVideo(){

    //for image_form.html
    var video = document.forms["video_form"]["video"].value;
    var video_name = document.forms["video_form"]["title"].value;
    var video_description = document.forms["video_form"]["desc"].value;
    //date
    var video_date = document.forms["video_form"]["date"].value;
    var price = document.forms["video_form"]["price"].value;
    //category
    var category = document.forms["video_form"]["category"].value;

    //validate for video
    if(video == null || video == ""){
        alert("Please upload a video");
        return false;
    }

    //validate for all
    if(video_name == null || video_name == ""){
        alert("Please enter a video name");
        return false;
    }

    if(video_description == null || video_description == ""){
        alert("Please enter a video description");
        return false;
    }

    if(video_date == null || video_date == ""){
        alert("Please enter a video created date");
        return false;
    }

    if(price == null || price == ""){
        alert("Please enter a video price");
        return false;
    }

    if(category == null || category == ""){
        alert("Please enter a video category");
        return false;
    }

    return true;


}