import type { InitialData } from "./interfaces"

export const getData = async () => {
    const response = await fetch('http://localhost:5000/api/example')
    const json = (await response.json()) as InitialData;
    return json
}
