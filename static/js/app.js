// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 (JS library that produces dynamic graphics in an HTML webpage.)
var tbody = d3.select("tbody");
// with this code we, declared the variabel, tbody and used d3.select to tell JS to look for the <tbody> tags in the HTML
//---------------------------------------------------------
// We're going to build a table to display all of the UFO sightings. We'll need to iterate through the array of objects in our data file and then append them to a table row.

// Create a function
function buildTable(data) {

// Clearing any existing data creates a fresh table in which we can insert data. tbody.html references the table, pointing JavaScript directly to the table in the HTML page we're going to build.The parentheses with empty quotes (("");) is an empty string.
    tbody.html("");

    // Next, loop through each objects in the data
    // and append a row & cells for each value in the row
    data.forEach((dataRow) => {
        // This single line is telling JS to find the <tbody> tag within the HTML and add a table row ("tr").    
        let row = tbody.append("tr");

        // By starting this line with Object.values, we're telling JS to reference one object from the array of UFO sightings. By adding (dataRow) as the argument, we are saying that we want the values to go into the dataRow. forEach((val) specifies we want 1 object per row    
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            // With this line, we've set up the action of appending data into a table data tag (<td>). Now, in the next line we'll add the values.
            cell.text(val);
            }
        );
    });
}
// With this function, we have done the following:
// Looped through each object in the array
// Appended a row to the HTML table
// Added each value from the object into a cell  