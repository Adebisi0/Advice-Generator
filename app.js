const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    console.log(data)

    document.getElementById("adviceid").innerHTML = `Advice #${data.slip.id}`
    document.getElementById("theadvice").innerHTML = `"${data.slip.advice}"`
}

fetchAdvice()