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


// So what's going on in this code? D3 looks a little different from what we're used to seeing, but that's because it's closely linked to HTML.
// The .select() function is a very common one used in D3. It will select the very first element that matches our selector string: "#datetime". The selector string is the item we're telling D3.js to look for. With d3.select("#datetime"), for example, we're telling D3 to look for the #datetime id in the HTML tags. We haven't created our HTML yet, but we know that the date value will be nested within tags that have an id of "datetime."

// By chaining .property("value"); to the d3.select function, we're telling D3 not only to look for where our date values are stored on the webpage, but to actually grab that information and hold it in the "date" variable.
// Create a function to set up the button filter
function handleClick() {
    let date = d3.select("#datetime").property("value");
    // Now we need to set a default filter and save it to a new variable.
    let filteredData = tableData;
    // The next step is to check for a date filter using an if statement.
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
        // row => row.datetime === date); This line is what applies the filter to the table data.
    };

    // Rebuild the table using the filtered data. If no date was entered, then the filteredData will just be the original tableData.
    buildTable(filteredData);
};
// Listen for an event (button click). This will be tied to the filter button so the code knows when the click happens
d3.selectAll("filter-btn").on("click", handleClick);
// Our selector string contains the id for another HTML tag. (We'll assign a unique id to a button element in the HTML called "filter-btn".) This time it'll be included in the button tags we create for our filter button. By adding this, we're linking our code directly to the filter button. Also, by adding .on("click", handleClick);, we're telling D3 to execute our handleClick() function when the button with an id of filter-btn is clicked.

// There is only a single step left before we can build the HTML component of the webpage: making sure the table loads as soon as the page does. At the very end of the code, we'll call our buildTable function once more—this time using the original data we've imported.
buildTable(tableData);