export const newses = (async (topic) => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=${Date.now()}&sortBy=publishedAt&apiKey=9423233af6a941aea6e4d41efafd1fa8`)
    const data = await res.json()
    console.log(data)
    return data.articles
})

export const weather = (async () => {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key= 4465d44a86c4456782685458232602&q=London&aqi=no`)
    const data = await res.json()
    console.log(data)
})