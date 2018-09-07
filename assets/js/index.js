$( document ).ready(function() {
    console.log('ready')

    $.get('https://node-js-analytics.azurewebsites.net/record').then(function(res){
        //console.log(res);
    });
});