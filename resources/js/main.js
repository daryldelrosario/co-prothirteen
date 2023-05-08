// ADD ROW FUNCTION 
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

function presetRow(fname, lname, age) {
    const row = $("<tr>");
    const fnameCell = $("<td>").text(fname);
    const lnameCell = $("<td>").text(lname);
    const ageCell = $("<td>").text(age);
    row.append(fnameCell, lnameCell, ageCell);

    $("#data-table tbody").append(row);
}

presetRow("Daryl", "del Rosario", 36);
presetRow("Clark Kent", "del Rosario", 1);
presetRow("Ashley", "Martins Pimentel", 35);