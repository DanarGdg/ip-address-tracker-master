import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from 'axios'

const ContextApi = createContext()

const ContextProvider = ({children}) => {
    const [searchIpValue, setSearchIpValue] = useState('')
    const [datas, setDatas] = useState([])
    const [datasLangtitude, setDatasLangtitude] = useState(null)
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(null)

    const getData = async () => {
        setLoading(true)
        try {
            const request = await axios.get(`http://ip-api.com/json/${searchIpValue}`)
            setDatas(request.data) 
            setDatasLangtitude([request.data.lat, request.data.lon])
            console.log(request.data);
            setStatus(request.data.status)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect (() => {
        getData()
    }, [])

    return (
        <ContextApi.Provider value={{datas, getData, setSearchIpValue, loading, datasLangtitude, setDatasLangtitude, status}}>
            {children}
        </ContextApi.Provider>
    )
}

export { ContextApi, ContextProvider}