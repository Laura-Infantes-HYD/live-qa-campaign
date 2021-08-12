
const init = () => {
    const href = window.location.href
    const isPreviewLinkRegex = /(hyd_qa=true&|HYD_QA=true&)/
    const isPreviewLinks = isPreviewLinkRegex.test(href)

    //Check for 
    if(!isPreviewLinks)return
    
    const testNameRegex = /(?<=&)(.*?)(?==true)/g
    const testNames = href.match(testNameRegex)

    testNames.forEach(setCookie)
}


//Utils
const setCookie = (name, days=5) => {
    const expires = days ? calculateCookieExpiryDate(days) : "";
    const cookie = `${name}=true${expires}; path=/`

    document.cookie = cookie
}

const calculateCookieExpiryDate = (days) => {
    const date = new Date();
    const daysInMs = days * 24 * 60 * 60 * 1000
    const expiryTimeMs = date.getTime() + daysInMs

    date.setTime(expiryTimeMs);

    const expiryString = `; expires=${date.toUTCString()}`

    return expiryString
}



init()
