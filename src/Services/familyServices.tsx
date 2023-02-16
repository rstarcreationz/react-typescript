import axios from "axios";

let base_URL: string = "http://localhost:8080"

export const familyServices = {
    getFamilyApi: async () => await axios.get(base_URL + "/Family"),
    AddFamilyApi: async (data: any) => {
        await axios.post(base_URL + "/Family", data)
    },
    deleteFamilyApi: async (id: number) => {
        await axios.delete(base_URL + `/Family/${id}`)
    },
    detailFamilyApi: async (id: number | string | null) => {
        await axios.get(base_URL + `/Family/${id}`)
    },
}