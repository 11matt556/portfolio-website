$( document ).ready(function() {
    console.log('ready')

    $.get('https://node-js-analytics.azurewebsites.net').then(function(res){
        //console.log(res);
    });
});