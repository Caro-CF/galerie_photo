const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "cfwebadminsql", // update me
      password: "P@ssw0rd2020!" // update me
    },
    type: "default"
  },
  server: "cesicfweb.database.windows.net", // update me
  options: {
    database: "cesigaleriephotos", //update me
    encrypt: true
  }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase();
  }
});

function queryDatabase() {
  console.log("Connecting...");

  // Show users
const request = new Request('SELECT * FROM T_UTILISATEURS;', function(err) {
if (err) {  
    console.log(err);}  
});  

var result = "";


request.on("row", function(columns) {
    columns.forEach(column => {
        if (column.value === null) {  
            console.log('NULL');  
          } else {  
            result+= column.value + " ";  
          }  
        });  
        console.log(result);  
        result ="";  
});
  connection.execSql(request);
}
