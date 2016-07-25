function initLoginPage(){

    // Login button click handling
    $('#login').on('click', function(e){
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
    });
}

