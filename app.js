const Seattle = {
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookiesPerSale: 6.3,
    hourlySales: [],
    totalCookies: 0
}

function getRandomCustomers(min, max) {
    for(let i = 6; i <= 20; i++) { //operating hours are 6am to 8pm
        const hourlyCustomers= getRandomCustomers(location.minCustPerHour, location.maxCustPerHour);
        const hourlyCookies = Math.floor(hourlyCustomers * location.avgCookiesPerSale);
        location.hourlySales.push(hourlyCookies);
        location.totalCookies += hourlyCookies;
    }
}
const Tokyo = {
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgCookiesPerSale: 1.2,
    hourlySales: [],
    totalCookies: 0
}

function getRandomCustomers(min, max) {
    for(let i = 6; i <= 20; i++) { //operating hours are 6am to 8pm
        const hourlyCustomers= getRandomCustomers(location.minCustPerHour, location.maxCustPerHour);
        const hourlyCookies = Math.floor(hourlyCustomers * location.avgCookiesPerSale);
        location.hourlySales.push(hourlyCookies);
        location.totalCookies += hourlyCookies;
    }
}        
const Dubai = {
    minCustPerHour: 11,
    maxCustPerHour: 38,
    avgCookiesPerSale: 3.7,
    hourlySales: [],
    totalCookies: 0
}

function getRandomCustomers(min, max) {
    for(let i = 6; i <= 20; i++) { //operating hours are 6am to 8pm
        const hourlyCustomers= getRandomCustomers(location.minCustPerHour, location.maxCustPerHour);
        const hourlyCookies = Math.floor(hourlyCustomers * location.avgCookiesPerSale);
        location.hourlySales.push(hourlyCookies);
        location.totalCookies += hourlyCookies;
    }
}    

const Paris = {
    minCustPerHour: 20,
    maxCustPerHour: 38,
    avgCookiesPerSale: 2.3,
    hourlySales: [],
    totalCookies: 0
}

function getRandomCustomers(min, max) {
    for(let i = 6; i <= 20; i++) { //operating hours are 6am to 8pm
        const hourlyCustomers= getRandomCustomers(location.minCustPerHour, location.maxCustPerHour);
        const hourlyCookies = Math.floor(hourlyCustomers * location.avgCookiesPerSale);
        location.hourlySales.push(hourlyCookies);
        location.totalCookies += hourlyCookies;
    }
}        

const Lima = {
    minCustPerHour: 2,
    maxCustPerHour: 16,
    avgCookiesPerSale: 4.6
    hourlySales: [],
    totalCookies: 0
}

function getRandomCustomers(min, max) {
    for(let i = 6; i <= 20; i++) { //operating hours are 6am to 8pm
        const hourlyCustomers= getRandomCustomers(location.minCustPerHour, location.maxCustPerHour);
        const hourlyCookies = Math.floor(hourlyCustomers * location.avgCookiesPerSale);
        location.hourlySales.push(hourlyCookies);
        location.totalCookies += hourlyCookies;
    }
}        