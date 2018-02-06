$(document).ready(function() {
  $('.dropdown-content li a').on('click', function(event) {
    // debugger;
    // console.log(event);
    let query = $(this).attr('id');
    // console.log(query);
    let queryURL = '/api/products';
    $.ajax({
      url: queryURL,
      method: 'GET',
    }).done(function(response) {
      // console.log(response);
      $('.product-div').empty();
      if (response < 1) {
        // Displays message if no products match query
        $('.product-div').html('<h3>No Products Found!</h3>');
      } else {
        // Runs through response array
        for (let i = 0; i < response.length; i++) {
          if (query === response[i].category) {
            let productDiv = $('<div class="products col m6 m4">');
            let productCard = $('<div class="card hoverable">');
            let productImageDiv = $(
              '<div class="card-image waves-effect waves-block waves-light">'
            );
            let productImage = $('<img class="activator">');
            productImage.attr('src', response[i].image_link);
            let cardContent = $('<div class="card-content">');
            let cardTitleDiv = $(
              '<div class="card-title activator grey-text text-darken-4">'
            );
            let cardTitle = $('<p class="card-title-text">').text(
              response[i].product_name
            );
            let reviewLink = $(
              '<a class="review-link1" href="' +
                response[i].review_link +
                '">Reviews</a>'
            );
            if (response[i].video_link !== null) {
              let videoReview = $('<video class="product-video">');
              videoReview.attr('src', response[i].video_link);
              videoReview.append(cardContent);
            }
            let cardProductDescription = $(
              '<div class="product-description-div">'
            );
            let productDescription = $('<p class="product-description">').text(
              response[i].description
            );
            let productScore = $('<p class="review-score">').html(
              'Score: ' + response[i].score
            );

            productImageDiv.append(productImage);
            productCard.append(productImageDiv);
            cardContent.append(cardTitleDiv);
            cardContent.append(reviewLink);
            cardContent.append(productScore);
            cardTitleDiv.append(cardTitle);
            cardProductDescription.append(productDescription);
            cardContent.append(cardProductDescription);
            productDiv.append(productCard);
            productDiv.append(cardContent);
            $('.product-div').append(productDiv);
          }
        }
      }
    });
    // This is to not follow the link
    return false;
  });
});
