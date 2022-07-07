import { useQuery } from "react-query"

import getData from "./api"


export type itemProps = {
    category?: string,
    description?: string,
    disable?: boolean,
    id?: number,
    image?: string,
    price?: number,
    title?: string,
    rating?: {count?: number, rate?: number}
}

export enum actionName{
    ADD_ITEM = "ADD_ITEM",
    REMOVE_ITEM ="REMOVE_ITEM",
    RESET = "RESET"
}

export type actionType = {
    type?: actionName,
    payload?: itemProps
}

type returnType<T> = {
    womenCloth?: itemProps[],
    isFetching?: T,
    isLoading?: T,
    isError?: T
} 
type state = itemProps[]



export const filterData= (category: string): returnType<boolean>| undefined => {
    try {
    const {data, isFetching, isLoading, isError} = useQuery('women', getData, {
        cacheTime: 30000,
        staleTime: 60000
    }
    )
    const womenCloth: itemProps[] = []
    if(data){
        data!.map((item: itemProps) => {
            if(item?.category === category){
                womenCloth.push(item)
            }
        })
    }
    return {
        womenCloth, isFetching, isLoading, isError
    }
        
    } catch (error) {
        console.error(error)
    }
}

 export const initialState: state = []

export function reducer(state: Array<any>, action: actionType){
    switch (action?.type) {
        case actionName.ADD_ITEM:
            return [...state, action?.payload]
            
        case actionName.REMOVE_ITEM:
            return state.filter((item) => item?.id !== action?.payload?.id)
        
        case actionName.RESET:
            return []
    
        default:
            return state
    }
}


export const items = [
    {item:"HOME", link: '/'},
    {item:"MEN", link: '/men'}, 
    {item:"WOMEN", link: '/women'}, 
    {item: "JEWELLERY", link: '/beauty'}, 
    {item: "GADGETS", link: '/gadgets'}
]