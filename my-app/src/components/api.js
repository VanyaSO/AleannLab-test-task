const token = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";
let url = `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=${token}`;

const delay = ms =>{
    return new Promise(resolve => setTimeout(() => resolve(),ms));
}

export async function fetchProducts() {
    await delay(1000);

    const response = await fetch(url)
    const status =  response.status

    if (status === 200) return await response.json();
    const errorText = await response.text()

    throw new Error(errorText)

}
