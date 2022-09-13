function validateAudio(){

    //for image_form.html
    var audio = document.forms["audio_form"]["audio"].value;
    var audio_name = document.forms["audio_form"]["title"].value;
    var audio_description = document.forms["audio_form"]["desc"].value;
    //date
    var audio_date = document.forms["audio_form"]["date"].value;
    var price = document.forms["audio_form"]["price"].value;
    //category
    var category = document.forms["audio_form"]["category"].value;

    //validate
    if(audio == null || audio == ""){
        alert("Please upload an audio file");
        return false;
    }

    if(audio_name == null || audio_name == ""){
        alert("Please enter an audio name");
        return false;
    }

    if(audio_description == null || audio_description == ""){
        alert("Please enter an audio description");
        return false;
    }

    if(audio_date == null || audio_date == ""){
        alert("Please enter an audio created date");
        return false;
    }

    if(price == null || price == ""){
        alert("Please enter an audio clip price");
        return false;
    }

    if(category == null || category == ""){
        alert("Please enter an audio category");
        return false;
    }   

    return true;


}