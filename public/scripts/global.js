/*
  constants and global functions
*/

var JSON_FILE = 'books-schema.json';
var actual_JSON = '';

/*
 @method loadJSON
 source: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
*/
function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', JSON_FILE, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
 }

function init() {
    loadJSON(function(response) {
        actual_JSON = JSON.parse(response);
        // console.log(actual_JSON);
        loadFilter(actual_JSON.entities);
        loadItems(actual_JSON.data);
    });
}
