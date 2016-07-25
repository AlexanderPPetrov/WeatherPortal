function bindEvents(){

    // Bind handlers for click events
    $('#login').on('click', loginClick);
    $('#register').on('click', registerClick);

}

function loginClick (e){
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
        console.log('submit form')
    }else{
        // Do not submit form
        e.preventDefault();
    }
}


function registerClick(e){

    $('#register-modal').modal('show');

}
