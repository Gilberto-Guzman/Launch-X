function timeout(n) {
    return new Promise((res => setTimeout(res, n)))
}

async function suma(a, b) {
    await timeout(1000)
    return a + b
}

;(async () => {
    console.log(await suma(3, 4))
})()