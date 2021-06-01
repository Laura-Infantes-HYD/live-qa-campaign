/**
 * 
 */



 const setQACookie = () => {
    const testNameRegex = /(?<=hyd_qa=true&|HYD_QA=true&)(.*?)(?==true)/
    const href = window.location.href
    const testName = href.match(testNameRegex, "i")[0]

    setCookie(testName, 12)
}

const setCookie = (name, days) => {
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

setQACookie()