const mysql = require('mysql');
const inquirer = require('inquirer');

let connection = mysql.createConnection({
  host: 'localhost',
  port: '8889',
  user: 'root',
  password: 'root',
  database: 'survival_db',
});

connection.connect(function(err) {
  if (err) throw err;
  // console.log("Connected as id: " + connection.threadId);
  displayProducts();
});

validateInteger = value => {
  let integer = Number.isInteger(parseFloat(value));
  let sign = Math.sign(value);

  if (integer && sign === 1) {
    return true;
  } else {
    return 'Please enter a whole non-zero number';
  }
};

displayProducts = () => {
  console.log('\n**** STATE OF APOCALYPSE - All Products ****');
  connection.query('SELECT * FROM Products', function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(
        '\n -----------------------------------------------------------------------------'
      );
      console.log(
        '| Item Number: ' +
          res[i].item_num +
          ' | Product Name: ' +
          res[i].product_name +
          ' | Category: ' +
          res[i].category +
          ' | Score: ' +
          res[i].score +
          ' | Buy Link: ' +
          res[i].buy_link
      ) +
        ' | Video Link: ' +
        res[i].video_link;
      console.log(
        '\n -----------------------------------------------------------------------------'
      );
    }
    initialize();
  });
};

initialize = () => {
  inquirer
    .prompt([
      {
        name: 'addItem',
        type: 'rawlist',
        message: "Would you like to add a product to 'survival_db' database?",
        choices: ['YES', 'NO'],
      },
    ])
    .then(function(answer) {
      if (answer.addItem.toUpperCase() === 'YES') {
        addProduct();
      } else {
        console.log('*** Ok, Goodbye!');
        connection.end();
      }
    });
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
          displayProducts();
        }
      );
    });
};
const mysql = require('mysql');
const inquirer = require('inquirer');

let connection = mysql.createConnection({
  host: 'localhost',
  port: '8889',
  user: 'root',
  password: 'root',
  database: 'survival_db',
});

connection.connect(function(err) {
  if (err) throw err;
  // console.log("Connected as id: " + connection.threadId);
  displayProducts();
});

validateInteger = value => {
  let integer = Number.isInteger(parseFloat(value));
  let sign = Math.sign(value);

  if (integer && sign === 1) {
    return true;
  } else {
    return 'Please enter a whole non-zero number';
  }
};

displayProducts = () => {
  console.log('\n**** STATE OF APOCALYPSE - All Products ****');
  connection.query('SELECT * FROM Products', function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(
        '\n -----------------------------------------------------------------------------'
      );
      console.log(
        '| Item Number: ' +
          res[i].item_num +
          ' | Product Name: ' +
          res[i].product_name +
          ' | Category: ' +
          res[i].category +
          ' | Score: ' +
          res[i].score +
          ' | Buy Link: ' +
          res[i].buy_link
      ) +
        ' | Video Link: ' +
        res[i].video_link;
      console.log(
        '\n -----------------------------------------------------------------------------'
      );
    }
    initialize();
  });
};

initialize = () => {
  inquirer
    .prompt([
      {
        name: 'addItem',
        type: 'rawlist',
        message: "Would you like to add a product to 'survival_db' database?",
        choices: ['YES', 'NO'],
      },
    ])
    .then(function(answer) {
      if (answer.addItem.toUpperCase() === 'YES') {
        addProduct();
      } else {
        console.log('*** Ok, Goodbye!');
        connection.end();
      }
    });
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
          displayProducts();
        }
      );
    });
};
