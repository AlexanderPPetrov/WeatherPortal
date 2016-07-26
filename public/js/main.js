function bindEvents(){

    // Bind handlers for click events
    $('#login').on('click', loginClick);
    $('#register').on('click', registerClick);

}

function loginClick (e){

    // Prevent the default submit action
    e.preventDefault();


    var valid = true,
        username = $('#username').val(),
        password = $('#password').val();


    if(username.length == 0){
        $('#username').parent().find('.help-block').show();
        valid = false;
    }else{
        $('#username').parent().find('.help-block').hide();
    }

    if(password.length == 0){
        $('#password').parent().find('.help-block').show();
        e.preventDefault();
        valid = false;
    }else{
        $('#password').parent().find('.help-block').hide();
    }

    if(valid){
        parent.window.location.href = "home.html";
        console.log('submit form')
    }else{
        // Do not submit form
        e.preventDefault();
    }
}


function registerClick(e){

    $('#register-modal').modal('show');

}

function getCurrentTemp (){
    //http://api.openweathermap.org/data/2.5/weather?q=Plovdvi,bg&appid=5624e56170c7efdcfa0212d03e1677e4
}