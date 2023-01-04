function timeout(n: number) {
    return new Promise((res => setTimeout(res, n)))
}

export async function suma(a: number, b: number) {
    await timeout(1000)
    return a + b
}

;(async () => {
    console.log(await suma(3, 4))
})()

