let filters = [];


/*fetch('../Search/data.json')
  .then(response => response.json())
  .then(obj => console.log(obj))*/

//Checkbox
dropDownBB = ( value ) => {

    let checkboxBB = document.getElementById(value);
    checkboxBB.classList.toggle('is-active');

}
window.onload = function() {

    let input = document.getElementById('searchBB');
    let placeholder = document.getElementById('placeholder');
    let closeholder = document.getElementById('closeHolder');

    console.log("input", input);
    console.log("placeholder", placeholder);
    console.log("closeholder", closeholder);


    //Listener click to close placeholder search
    document.body.addEventListener("click", function (evt) {

        let classList = placeholder.classList.length;
        if (classList === 2) {
            placeholder.classList.remove('enable-event');
        }   
        
    });

    //Listener write search
    input.addEventListener('keypress', e => {

        placeholder.classList.add('enable-event');
        closeholder.classList.add('enable-action')
        if(e.repeat){
            e.preventDefault();
            return;
        }
        console.log('keypress ' + String.fromCharCode(e.which || e.keyCode))
        });

        input.addEventListener('keyup', e =>{
        console.log('keyup');
    })

}   

searchResult = () => {
    console.log("Result Search")
    location.reload();
}

enableFilter = () => {
    let filterMobile = document.getElementById('mobileFilter');
    console.log("enable");
    filterMobile.classList.add('enable-action');
}

closeFilter = () => {
    console.log("close");
    let filterMobile = document.getElementById('mobileFilter');
    filterMobile.classList.remove('enable-action');
}

triggerFilter = ( value ) => {

    let availableFilter = document.getElementById("availableFilter");
    let filter = document.createElement("DIV");
    let searchVal = filters.includes(value);
    
    if(!searchVal) {
        filters.push(value);
        filter.innerHTML = value;
        availableFilter.appendChild(filter);
        filter.setAttribute("id", value);
        filter.setAttribute("class", "tab-filter");
        
        let closebtn = document.createElement("SPAN");
        let filterEnable = document.getElementById(value);
        filterEnable.appendChild(closebtn).classList.add('close--filter');
        filterEnable.setAttribute("onclick","deleteFilter('" + value +"');");
    }
    console.log('filter',filters)
    console.log('element',searchVal);
}

deleteFilter = (value) => {
    let deleteFilter= document.getElementById(value);
    deleteFilter.parentNode.removeChild(deleteFilter);

    /*delete on array*/
    let element = filters.indexOf(value);
    filters.splice(element,1);

}