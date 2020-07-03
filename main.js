// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')


function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}


let isUserActive = users
.filter(users => users.isActive === true)
.map(users => users.name)
printKata(1, isUserActive)

let usersEmail = users 
.map(users => users.email)
printKata(2, usersEmail)

let companyProperty = users
.some(users => users.company === "OVATION")
printKata(3, companyProperty)

let over38 = users 
.find(users => users.age > 38)
printKata(4, over38)

let activeOver38 = users 
.filter(users => users.isActive === true)
.find(users => users.age > 38)
printKata(5, activeOver38)

let userBalance = users 
.filter(users => users.company === "ZENCO")
.map(users => users.balance)
printKata(6, userBalance)

let ageOfUserWFigiat = users
.filter(users => users.tags.includes("fugiat"))
.map(users => users.age)
printKata(7, ageOfUserWFigiat)