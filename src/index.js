/**
 * 
 */



 const setQACookie = () => {
    const testNameRegex = /(?<=HYD_QA=true&)(.*?)(?==true)/
    const href = window.location.href
    const testName = href.match(testNameRegex)[0]

    setCookie(testName, 12)
}

const setCookie = (name, days) => {
    const expires = days ? calculateCookieExpiryDate(days) : "";
    document.cookie = `${name}=true${expires}; path=/"`
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