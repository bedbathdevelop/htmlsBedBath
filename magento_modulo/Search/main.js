
var filters = [];
var facetEnable = [];
var items = [];

var heightPage = "1220px";
var heightDefault = 1190;
const loaderEnable = null;
var countProducts = 5;  //products by page
var lengthProducts = 0;
var increment = 300;

var bypage = 5; //products by page
var itemsonHeader = 0;
var itemsonFooter = 0;


/*getDocumentHeight();*/


//ShowMore
function showMoreResults () {
    let actualVal = bypage + 1;
    bypage = bypage + countProducts;

   for (x=actualVal; x<= bypage; x++) {
       if(items[x]) {
           
            items[x].classList.remove('not-visible');
            items[x].classList.add('visible-item');
       }    
    }

    if(bypage > items.length) {
        let btnShowMore = document.getElementById('showMore');
        btnShowMore.classList.add('hide-element');
    }


    //update value "Mostrando"
    itemsonHeader.innerHTML = document.getElementsByClassName('visible-item').length;
    itemsonFooter.innerHTML = document.getElementsByClassName('visible-item').length;
}


//Checkbox
function dropDownBB ( value ) {
    facetEnable.push(value);
    let checkboxBB = document.getElementById(value);

    if(facetEnable[0] === value) {
        checkboxBB.classList.toggle('is-active');
    }
    else {
        let closeTab = document.getElementById(facetEnable[0]);
        closeTab.classList.remove('is-active');
        facetEnable.splice(facetEnable[0], 1);
        checkboxBB.classList.toggle('is-active');
    }
}



closeResultTab = () => {
    let placeholder = document.getElementById('placeholder');
    let closeholder = document.getElementById('closeHolder');
    placeholder.classList.remove('enable-event');
    closeholder.classList.remove('enable-action');
}
searchValue = () => {
    console.log('Function to search value')
}
function enableFilter () {
    let filterMobile = document.getElementById('mobileFilter');
    filterMobile.classList.add('enable-action');
}

closeFilter = () => {
    let filterMobile = document.getElementById('mobileFilter');
    filterMobile.classList.remove('enable-action');
}

function triggerFilter ( value, facet ){

    let availableFilter = document.getElementById("availableFilter");
    let clearFilter = document.getElementById("clearFilter");
    let filter = document.createElement("DIV");
    let searchVal = filters.includes(value);
    

    if(!searchVal) {
        filters.push(value);
        filter.innerHTML = value;
        availableFilter.appendChild(filter);
        filter.setAttribute("id", value + '_tab');
        filter.setAttribute("class", "tab-filter");
    }
        let closebtn = document.createElement("SPAN");
        let filterEnable = document.getElementById(value + '_tab');

        filterEnable.appendChild(closebtn).classList.add('close--filter');
        filterEnable.setAttribute("onclick","deleteFilter('" + value + '_tab' +"','" + facet  +"');");

        clearFilter.classList.add('enable-event');
        showLoad();
}

function showLoad() {
        var load = document.getElementById('loadD');
        var disable = document.getElementById('disableFilter');

        load.classList.add('enable-event');
        disable.classList.add('enable-event');
   }

cleanFilter = () => {
    /*if(filters.length > 0)
    {
        filters.map((str) => {
            let tab = document.getElementById(str);
            tab ? tab.parentNode.removeChild(tab):'';
        });
    }*/
    filters = [];
    var url = new URL(window.location.href);
    var queryUrl = window.location.origin + window.location.pathname + '?q=' + url.searchParams.get('q');
    window.location = queryUrl;
}

deleteFilter = (value, facet) => {
    let deleteFilter= document.getElementById(value);
    deleteFilter.parentNode.removeChild(deleteFilter);

    /*delete on array*/
    var element = filters.indexOf(value);
    filters.splice(element,1);

    var urlDelete  = removeParam(facet,window.location.href,value)
    window.location = urlDelete;

}


function removeParam(key, sourceURL, value) {
    var rtn = sourceURL.split("?")[0],
    param,
    varfinal,
    lowercase,
    uppercase,
    capitalize,
    withpipe,
    params_arr = [],
    queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
    varfinal = value.split('_tab');

    if(varfinal ) {
        varfinal = varfinal[0].toString();
        lowercase = varfinal.toLowerCase();
        uppercase = varfinal.toUpperCase();
        capitalize =varfinal.capitalize();
        withpipe = varfinal + '|';
    }

if (queryString !== "") {
    params_arr = queryString.split("&");

    for (var i = params_arr.length - 1; i >= 0; i -= 1) {
        param = params_arr[i].split("=")[0];
        if (param === key) {
            var findpipe = params_arr[i].indexOf('|');
            if(findpipe > 1) {
                var finalstring = params_arr[i].replace(varfinal, '');
                finalstring = params_arr[i].replace(lowercase, '');
                finalstring = params_arr[i].replace(uppercase, '');
                finalstring = params_arr[i].replace(capitalize, '');
                finalstring = params_arr[i].replace(capitalize, '');
                finalstring = finalstring.replace('||','|');
                /*finalstring = finalstring.replace('=|','=');*/
                withpipe === '|' ? finalstring = finalstring.substring(0, finalstring.length - 1) :  console.log('no');
                params_arr[i] = finalstring;
            }
            else {
                params_arr.splice(i, 1);
            }
        }
    }
    if (params_arr.length) rtn = rtn + "?" + params_arr.join("&");
}
return rtn;
}

//-------------------------------------//
facetSearch = () => {
    let input = document.getElementById('search');
    let placeholder = document.getElementById('placeholder');
    let closeholder = document.getElementById('closeHolder');

        //Listener write search
        input.addEventListener('keypress', event => {

            placeholder.classList.add('enable-event');
            closeholder.classList.add('enable-action');
            
            if(event.repeat){
                event.preventDefault();
                return;
            }
            console.log('keypress ' + String.fromCharCode(event.which || event.keyCode))
            });
    
            input.addEventListener('keyup', event =>{
             console.log('keyup');
            })
}


function getDocumentHeight() {
    window.addEventListener('load', function () {
        items = document.getElementsByClassName('item-grid-bb');
        itemsonHeader = document.getElementById('numtoshow');
        itemsonFooter = document.getElementById('numtoshowb');
        lengthProducts = items.length;

        //Add visible item
        for (var y=0; y <= lengthProducts; y++) {
            if ((y > bypage) && (items[y])){
                items[y].classList.add('not-visible');
            }
            else {
                
                items[y] ? items[y].classList.add('visible-item'): '';
            }
        }

        //show value "Mostrando"
        itemsonHeader.innerHTML = document.getElementsByClassName('visible-item').length;
        itemsonFooter.innerHTML = document.getElementsByClassName('visible-item').length;

        //Same value length hide div
        if(itemsonFooter.innerHTML === items.length) {
            let btnShowMore = document.getElementById('showMore');
            btnShowMore.classList.add('hide-element');
        }
    });


};

previewLoad = (  ) => {
        const loading = document.getElementById('loadingSearch');
        loading.classList.add('enable-action');
        loading.style.bottom =  '300px'; 
}

loadProducts = ( loading,loadingTotal ) => {
    loading.classList.remove('enable-action');
    countProducts = countProducts + 4 ;

    let heightM = loadingTotal + increment;
    heightM = heightM + 'px'
    document.getElementById('gridPLP').style.height = heightM;
}

function searchByFacet(facet, value) {
    var url = window.location.origin + window.location.pathname + window.location.search;
    console.log(facet + ' ' + value);
    var url_string = window.location.href;
    var url = new URL(url_string);
    var valueByFacet = url.searchParams.get(facet);
    if (valueByFacet) {
        url = url.toString().replace(facet + '=' + valueByFacet, facet + '=' + valueByFacet + '|' + value);
    } else {
        url = url + '&' + facet + '=' + value;
    }
    console.log(url);
    window.location = url;
}