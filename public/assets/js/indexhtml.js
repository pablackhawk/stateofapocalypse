$(document).ready(function() {
  $('.dropdown-content li a').on('click', function(event) {
    // debugger;
    // console.log(event);
    let query = $(this).attr('id');
    console.log(query);
    // This is to not follow the link
    return false;
    let queryURL = 'localhost:5150/products';
    $.ajax({
      url: queryURL,
      method: 'GET',
    }).done(function(response) {
      console.log(response);
    });
  });
});
