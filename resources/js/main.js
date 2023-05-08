// =====================================
// SETTING UP THE TABLE WITH PRESET DATA
// =====================================
// FUNCTION: PRESET ROW
function presetRow(fname, lname, age) {
    const row = $("<tr>");
    const fnameCell = $("<td>").text(fname);
    const lnameCell = $("<td>").text(lname);
    const ageCell = $("<td>").text(age);
    row.append(fnameCell, lnameCell, ageCell);

    $("#data-table tbody").append(row);
}

// Preset the table with some data
presetRow("Daryl", "del Rosario", 36);
presetRow("Clark Kent", "del Rosario", 1);
presetRow("Ashley", "Martins Pimentel", 35);
presetRow("Aqua", "Man", 10);
presetRow("Cat", "Woman", 2);
presetRow("Hello", "World", 20);

// ==================================
// CREATING ONCLICK FUNCTION addRow()
// ==================================
// FUNCTION: ADD ROW
function addRow() {
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const age = $("#age").val();

    const row = $("<tr>");
    const fNameCell = $("<td>").text(firstName);
    const lNameCell = $("<td>").text(lastName);
    const ageCell = $("<td>").text(age);
    row.append(fNameCell, lNameCell, ageCell);

    $("#data-table tbody").append(row);

    $("#firstName").val("");
    $("#lastName").val("");
    $("#age").val("");
}

// ============================================
// CREATING SORTING FUNCTION sortTable(a, b, c)
// ============================================
// FUNCTION: SORT TABLE 
function sortTable(table, columnIndex, isNumeric) {
    const rows = table.find("tbody > tr").get();
    rows.sort(function(a, b) {
        const cellA = $(a).find("td").eq(columnIndex).text();
        const cellB = $(b).find("td").eq(columnIndex).text();
        if(isNumeric) {
            return Number(cellA) - Number(cellB);
        } else {
            return cellA.localeCompare(cellB);
        }
    });

    const currentOrder = $(table.find("th").get(columnIndex)).attr("data-order");
    if(currentOrder === "asc") {
        rows.reverse();
        $(table.find("th").get(columnIndex)).attr("data-order", "desc");
    } else {
        $(table.find("th").get(columnIndex)).attr("data-order", "asc");
    }

    $.each(rows, function(index, row) {
        table.children("tbody").append(row);
    });
}

// Adding click event handlers to the table headers for sorting 
$("#data-table th").click(function() {
    const table = $(this).closest("table");
    const columnIndex = $(this).index();
    const isNumeric = columnIndex === 2;
    sortTable(table, columnIndex, isNumeric);
});