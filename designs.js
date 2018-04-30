let color = "#f00"; //default color (red)
let gridSize = [15, 15]; //default grid size [width , height]

//jQuery wrap
$(function () {
    //function called when user submits size
    function makeGrid() {
        gridSize[0] = $('#gwidth').val();
        gridSize[1] = $('#gheight').val();
        $('#main').empty();
        for (let r = 0; r < gridSize[1]; ++r) {
            let row = $('<div class="pixel"></div>');
            $('#main').append(row);
            for (let c = 0; c < gridSize[0]; ++c) {
                row.append('<div class="pcol backcolor" clicked="0"></div>');
            }
        }
    } 
    //event listener for form submit
    $("#sizePicker").submit(function (event) {
        event.preventDefault();
        makeGrid();
    });

    //event listener for color picker
    $('#colorPicker').change(function () {
        color = $('#colorPicker').val();
    });

    //event delegation for div's inside container
    $('#main').on('click', '.pcol', function () {
        if ($(this).attr('clicked') === '0') {
            $(this).attr('clicked', '1');
            $(this).removeClass('backcolor');
            color = $('#colorPicker').val();
            $(this).css('background-color', color);
        } else {
            $(this).attr('clicked', '0');
            $(this).addClass('backcolor');
        }
    });

    $( "#gwidth,#gheight" ).change(function() {
        makeGrid();
});

    makeGrid();
    

});