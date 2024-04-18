export async function generateJke() {
    const headers = {
        Accept: 'application/json'
    }
    const url = 'https://icanhazdadjoke.com/'
    const res = await fetch(url, {
        method: 'GET',
        headers: headers,
    })
    const data = await res.json()
    return data
}