$(document).ready(function () {

  $('form').submit(function(e) {
    e.preventDefault()
//     $.ajax({
//       url: '/notes/',
//       method: 'post',
//       data: $(this).serialize(),
//       success: function(serverResponse){
//         $('.posts').html(serverResponse)
//       }
//
// })
      $.post('/insert', $(this).serialize(), function(res){
          if(res['error'] == 'true') {
            $('#error').html("").show()
            for(var i = 0; i < res['result'].length; i++) {
              $('#error').append("<div>"+res['result'][i]+"</div>")
            }
          }
          else {
            $('#error').hide();
            $('.wall').prepend("<div><h4>"+res['title']+"</h4><p>"+res['description']+"</p></div>")
          }
      });

$(this).trigger('reset')
});
});

//
// $(document).ready(function() {
//   $('form').submit(function(e) {
//     e.preventDefault();
//     var data = {
//       'title': $('input[name=title]').val(),
//       'description': $('textarea[name=description]').val(),
//       'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val(),
//     };
//
//     $.post('/insert', data, function(res) {
//       if(Array.isArray(res.result)){
//         $('#response').show();
//         $('#response').html('<h1>'+ res.result + '</h1>');
//       } else {
//         $('#response').hide();
//         $('#form').trigger('reset');
//         $('#posts').append('<div class="note">'
//         + '<h4>' + {{ res.result.title }} + '</h4>'
//         + '<p>' + {{ res.result.description }} + '</p>'
//         + '<a href="/delete/' + {{ res.result.id }} + '">delete</a></div>')
//       }
//     });
//   });
// });
