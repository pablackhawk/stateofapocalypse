const inquirer = require('inquirer');
const mysql = require('mysql2');

// Connection

let connection;
if (process.env.JAWSDB_URL) {
  // Heroku DB
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 8889,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'survival_db',
  });
}

viewProducts = () => {
  queryStr = 'SELECT * FROM Products';
  connection.query(queryStr, function(err, data) {
    if (err) throw err;
    console.log(
      'Existing Inventory: \n----------------------------------------\n'
    );

    let res = '';
    for (let i = 0; i < data.length; i++) {
      res = '';
      res += 'Item ID: ' + data[i].item_num + '\n';
      res += 'Product Name: ' + data[i].product_name + '\n';
      res += 'Category: ' + data[i].category + '\n';
      res += 'Score: ' + data[i].score + '\n';
      console.log(res + '\n----------------------------------------\n');
    }
    connection.end();
  });
};

// Ensures user is supplying only positive integers
validateInteger = value => {
  let integer = Number.isInteger(parseFloat(value));
  let sign = Math.sign(value);

  if (integer && sign === 1) {
    return true;
  } else {
    return 'Please enter a whole non-zero number';
  }
};

addProduct = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'product_name',
        message: 'Enter new product name:',
      },
      {
        type: 'input',
        name: 'category',
        message: 'Enter the prouct category: ',
      },
      {
        type: 'input',
        name: 'score',
        message: 'Enter product review score: ',
        validate: validateInteger,
      },
      {
        type: 'input',
        name: 'buy_link',
        message: 'Enter the buy hyperlink: ',
      },
      {
        type: 'input',
        name: 'review_link',
        message: 'Enter the review hyperlink: ',
      },
      {
        type: 'input',
        name: 'image_link',
        message: 'Enter the image hyperlink: ',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter the description for the product: ',
      },
    ])
    .then(function(input) {
      console.log(
        'Adding New Product...\n----------------------------------------\n'
      );
      let queryStr = 'INSERT into Products SET ?';
      connection.query(
        queryStr,
        {
          product_name: input.product_name,
          description: input.description,
          category: input.category,
          score: input.score,
          buy_link: input.buy_link,
          image_link: input.image_link,
          review_link: input.review_link,
        },
        function(err, results, fields) {
          if (err) throw err;
          console.log(
            'New Product added under Item Number ' +
              results.insertId +
              '.\n----------------------------------------\n'
          );
          connection.end();
        }
      );
    });
};

inputItem = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'option',
        message: 'Select an option:',
        choices: ['View Products', 'Add Product'],
        filter: function(val) {
          switch (val) {
            case 'View Products':
              return 'view';
              break;

            case 'Add Product':
              return 'add';
              break;
          }
        },
      },
    ])
    .then(function(input) {
      switch (input.option) {
        case 'view':
          viewProducts();
          break;

        case 'add':
          addProduct();
          break;
      }
    });
};

// Runs input program
inputItem();
