var selectedColumns = []


function toggleTooltip() {
    $('#tooltipContainer').toggleClass('visible')
}

function togglePopover() {
    $('#popoverContainer').toggleClass('visible')
}

function onCheckboxClicked(el) {
    var checkboxId = el.className.replace('checkbox', '')

    var correspondingHourglass = `hourglass${checkboxId}` 

    $(`#hourglass${checkboxId}`).toggleClass('visible');
    console.log(correspondingHourglass);
}