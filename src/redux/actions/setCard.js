

export const addCard = (data) => {
    return {
        type: 'add',
        payload: data,
    }
}
export const removeCard = (data) => {
    return {
        type: 'remove',
        payload: data,
    }
}
export const localCard = (data)=>{
    return{
        type:'local',
        payload:data
    }
}