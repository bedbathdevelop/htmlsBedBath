let filters = [];
let facetEnable = [];

let heightPage = "1220px";
let heightDefault = 1190;
const loaderEnable = null;
let countProducts = 8; 
let increment = 300;

getDocumentHeight();

/*fetch('../Search/data.json')
  .then(response => response.json())
  .then(obj => console.log(obj))*/

window.onload = () => {
    let items = document.getElementsByClassName('item-grid-bb');
}
//Checkbox
dropDownBB = ( value ) => {
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
        console.log("facetEnable",facetEnable)
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
enableFilter = () => {
    let filterMobile = document.getElementById('mobileFilter');
    filterMobile.classList.add('enable-action');
}

closeFilter = () => {
    let filterMobile = document.getElementById('mobileFilter');
    filterMobile.classList.remove('enable-action');
}

function triggerFilter ( value ){

    let availableFilter = document.getElementById("availableFilter");
    let clearFilter = document.getElementById("clearFilter");
    let filter = document.createElement("DIV");
    let searchVal = filters.includes(value);


    if(!searchVal) {
        filters.push(value);
        filter.innerHTML = value;
        availableFilter.appendChild(filter);
        filter.setAttribute("id", value);
        filter.setAttribute("class", "tab-filter");
    }
        let closebtn = document.createElement("SPAN");
        console.log("x",closebtn)
        let filterEnable = document.getElementById(value);
        filterEnable.appendChild(closebtn).classList.add('close--filter');
        filterEnable.setAttribute("onclick","deleteFilter('" + value +"');");

        clearFilter.classList.add('enable-event');
}

cleanFilter = () => {
    if(filters.length > 0)
    {
        filters.map((str) => {
            let tab = document.getElementById(str);
            tab.parentNode.removeChild(tab);
        });
    }
    filters = [];
}
deleteFilter = (value) => {
    let deleteFilter= document.getElementById(value);
    deleteFilter.parentNode.removeChild(deleteFilter);

    /*delete on array*/
    let element = filters.indexOf(value);
    filters.splice(element,1);

}
//-------------------------------------//
facetSearch = () => {
    console.log('facetSearch');
    let input = document.getElementById('searchBB');
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
	const html = document.documentElement;
    let loadAdd = 320;

    window.addEventListener('load', function () {
    	const body = document.body;
        let products = document.getElementById('gridPLP');
        products.style.height = heightPage;

        return Math.max(
            body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight
        );
    });

    window.addEventListener('scroll', function (e) {
        let loadingTotal = parseInt(heightPage) + loadAdd;
        const loading = document.getElementById('loadingSearch');
        let  = document.getElementById('placeholder');
        let totalProducts = document.getElementById('totalProducts').textContent;

        totalProducts =  parseInt(totalProducts);

        if(window.scrollY > 115 ) {
            placeholder.classList.remove('enable-event');
        }

        if ( countProducts < totalProducts) {
            if(window.scrollY >= heightDefault) {
                previewLoad();
                
                setTimeout(function() {
                    loadProducts(loading,loadingTotal)
                }, 2000);
                heightDefault = heightDefault + 40;
                increment = increment + 8;
                heightPage = window.scrollY;
            }
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