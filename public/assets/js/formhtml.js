





$(document).ready(function() {
    $('.dropdown-content li a').on('click', function(event) {
      // debugger;
      // console.log(event);
      let query = $(this).attr('id');
      // console.log(query);
      let queryURL = '/api/form';
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
              let cardTitleSpan = $(
                '<span class="card-title activator grey-text text-darken-4">'
              ).text(response[i].product_name);
              let expandButton = $(
                '<i class="material-icons right">See More</i>'
              );
              if (response[i].video_link !== null) {
                let videoReview = $('<video class="product-video">');
                videoReview.attr('src', response[i].video_link);
                videoReview.append(cardContent);
              }
              productImageDiv.append(productImage);
              productCard.append(productImageDiv);
              cardTitleSpan.append(cardContent);
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