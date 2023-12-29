var elementById = document.getElementById('myDiv')
const tableJs= document.getElementById("tableJs")
console.log(elementById)

function changeClass(elementId, onHover, classname) {
    // Define the classes for hover and non-hover states
    var element = document.getElementById(elementId);
    var hoverClass = classname;
    var normalClass = 'table-before';

    // Toggle classes based on the hover state
    element.className = onHover ? hoverClass : normalClass;

}