const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']

let seattle = {
    location: `Seattle`,
    minCustomers: 23,
    maxCustomers: 65.
    avgCookiesPerSale: 6.3, 
    sales: [6,7,8,9,10,11,12,1,2,3,4,5,6,7],
}

let container = document.getElementById('root');

//need an article per cookie stand
let cookieStandArticle = document.createElement('article');
container.appendChild(cookieStandArticle);

let heading = document.createElement('h2');
cookieStandArticle.appendChild(heading);
heading.textContent = seattle.location;

let hoursList = document.createElement('ul');
cookieStandArticle.appendChild(hourrList);

for(let i=0; i=<seattle.sales. length; i++) {
    let salesItem = document.createElement ('li');
    hoursList.appendChild(salesTeam);
    let salesInfo = `${hours[i]}: ${seattle.sales[i]} cookies`;
    salesItem.textContent = salesInfo;
}