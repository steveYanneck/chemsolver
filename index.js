function onSelect () {
    const properties = document.getElementsByName("propertyBox")
    for(box of properties) {
        box.style = "display: none"
    }
    const value = document.getElementById("form").value
    document.getElementById(`${value}Properties`).style = "display: flex"
}

function dilutionVar() {
    const value = document.getElementById("dilutionVarForm").value
    document.getElementById(`dilution${value}Properties`).style = "display: flex"
}
