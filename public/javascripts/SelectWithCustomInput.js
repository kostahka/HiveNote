

function openInput(){
    const mySelect = document.getElementById("textSelect");
    const inputOther = document.getElementById("otherInput");
    const selectDiv = document.getElementById("textSelectDiv");
    const input = document.getElementById("textOther");

    const SelectValue = document.getElementById('textSelect').value;
    if (SelectValue === 'other') {
        inputOther.style.display='inline'
        selectDiv.style.display='none';
        mySelect.disabled = 'true';
        input.removeAttribute('disabled');
        input.focus();
    }
}

function hideInput(){
    const mySelect = document.getElementById("textSelect");
    const inputOther = document.getElementById("otherInput");
    const input = document.getElementById("textOther");
    const selectDiv = document.getElementById("textSelectDiv");

    if (input !== null && input.value === "")
    {
        inputOther.style.display='none';
        selectDiv.style.display='inline';
        input.disabled='true';
        mySelect.removeAttribute('disabled');
        mySelect.value=mySelect.options[0].value
    }
}