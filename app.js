const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm']

let seattle = {
    location: `Seattle`,
    minCustomers: 23,
    maxCustomers: 65,
    avgCookiesPerSale: 6.3, 
    custEachHour: [],
    sales: [],
    generateCust: function() {
        this.custEachHour=randCustNumber(this.minCustomers, this.maxCustomers)
    },
   generateSales: function() {
        this.sales=generateCookieSales(this.avgCookiesPerSale, this.custEachHour)
   }
}

let tokyo = {
    location: `Tokyo`,
    minCustomers: 3,
    maxCustomers: 24,
    avgCookiesPerSale: 1.2, 
    custEachHour: [],
    sales: [],
    generateCust: function() {
        this.custEachHour=randCustNumber(this.minCustomers, this.maxCustomers)
    },
   generateSales: function() {
        this.sales=generateCookieSales(this.avgCookiesPerSale, this.custEachHour)
   }
}

let dubai = {
    location: `Dubai`,
    minCustomers: 11,
    maxCustomers: 38,
    avgCookiesPerSale: 3.7, 
    custEachHour: [],
    sales: [],
    generateCust: function() {
        this.custEachHour=randCustNumber(this.minCustomers, this.maxCustomers)
    },
   generateSales: function() {
        this.sales=generateCookieSales(this.avgCookiesPerSale, this.custEachHour)
   }
}

let paris = {
    location: `Paris`,
    minCustomers: 20,
    maxCustomers: 38,
    avgCookiesPerSale: 2.3, 
    custEachHour: [],
    sales: [],
    generateCust: function() {
        this.custEachHour=randCustNumber(this.minCustomers, this.maxCustomers)
    },
   generateSales: function() {
        this.sales=generateCookieSales(this.avgCookiesPerSale, this.custEachHour)
   }
}

let lima = {
    location: `Lima`,
    minCustomers: 2,
    maxCustomers: 16,
    avgCookiesPerSale: 4.6, 
    custEachHour: [],
    sales: [],
    generateCust: function() {
        this.custEachHour=randCustNumber(this.minCustomers, this.maxCustomers)
    },
   generateSales: function() {
        this.sales=generateCookieSales(this.avgCookiesPerSale, this.custEachHour)
   }
}
let container = document.getElementById('root');

function randCustNumber(minCustomers, maxCustomers)  {
let tempCustArray=[]
    for (let i=0; i<hours.length; i++) {
        let randCustThisHour = Math.floor(Math.random() * (maxCustomers - minCustomers + 1) + minCustomers);
        console.log(randCustThisHour)
        tempCustArray.push(randCustThisHour)
    }
    return tempCustArray
}
function generateCookieSales(avgCookiesPerSale, custEachHour) {
    let tempSales=[]
    for (let i=0; i<custEachHour.length; i++) {
        let hourlyCookies=Math.floor(avgCookiesPerSale * custEachHour[i])
        tempSales.push(hourlyCookies)
    }
    return tempSales
}
function renderStore(city) {
    const storeData=document.getElementById('storeData')
    const article = document.createElement('article');
    storeData.appendChild(article)

    const h2 = document.createElement('h2');
    h2.textContent = city.location;
    article.appendChild(h2);
    const ul = document.createElement('ul');
    article.appendChild(ul);

    for (let i = 0; i < city.sales.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${hours[i]}: ${city.sales[i]} cookies`
        ul.appendChild(li);
    }
}

seattle.generateCust()
seattle.generateSales()

tokyo.generateCust()
tokyo.generateSales()

dubai.generateCust()
dubai.generateSales()

paris.generateCust()
paris.generateSales()

lima.generateCust()
lima.generateSales()
renderStore(seattle)
renderStore(tokyo)
renderStore(dubai)
renderStore(paris)
renderStore(Lima)


console.log(seattle, tokyo, dubai, paris, lima)
let totalSold = 0;
// add total line
const totalItem = document.createElement('li');
hoursList.appendChild(totalItem);
const totalInfo = `Total: ?? cookies sold`;
totalItem.testContent = totalInfo;
