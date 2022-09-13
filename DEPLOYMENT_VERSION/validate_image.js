function validateImage(){

    //for image_form.html
    var image = document.forms["image_form"]["image"].value;
    var image_name = document.forms["image_form"]["title"].value;
    var image_description = document.forms["image_form"]["desc"].value;
    //date
    var image_date = document.forms["image_form"]["date"].value;
    var price = document.forms["image_form"]["price"].value;
    //category
    var category = document.forms["image_form"]["category"].value;

    //validate
    if(image == null || image == ""){
        alert("Please upload an image");
        return false;
    }

    if(image_name == null || image_name == ""){
        alert("Please enter an image name");
        return false;
    }

    if(image_description == null || image_description == ""){
        alert("Please enter an image description");
        return false;
    }

    if(image_date == null || image_date == ""){
        alert("Please enter an image created date");
        return false;
    }

    if(price == null || price == ""){
        alert("Please enter an image price");
        return false;
    }

    if(category == null || category == ""){
        alert("Please enter an image category");
        return false;
    }   

    return true;


}