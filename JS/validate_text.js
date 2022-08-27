function validateText(){

    console.log("validateText() called");

    //for image_form.html
    var text = document.forms["text_form"]["text"].value;
    var text_name = document.forms["text_form"]["title"].value;
    var text_description = document.forms["text_form"]["desc"].value;
    //date
    var text_date = document.forms["text_form"]["date"].value;
    var price = document.forms["text_form"]["price"].value;
    //category
    var category = document.forms["text_form"]["category"].value;

    //validate
    if(text == null || text == ""){
        alert("Please upload text");
        return false;
    }

    if(text_name == null || text_name == ""){
        alert("Please enter an title");
        return false;
    }

    if(text_description == null || text_description == ""){
        alert("Please enter a description");
        return false;
    }

    if(text_date == null || text_date == ""){
        alert("Please enter created date");
        return false;
    }

    if(price == null || price == ""){
        alert("Please enter a price");
        return false;
    }

    if(category == null || category == ""){
        alert("Please enter a category");
        return false;
    }   

    return true;


}