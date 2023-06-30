export async function getList(name, limit, page){
    return await fetch('https://dummyjson.com/'+name+'?limit='+limit+'&skip='+page)
        .then(res => res.json())




}
export async function getFiltered(name,filterKey,filterValue){
    return await fetch('https://dummyjson.com/'+name+'/filter?key='+filterKey+'&value='+filterValue)
        .then(res => res.json())
}
export async function getData(name,id){
    return await fetch('https://dummyjson.com/'+name+'/'+id)
        .then(res => res.json())

}
export async function addData(name,params){
    return await fetch('https://dummyjson.com/'+name+'/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    })
        .then(res => res.json())
}
 export async function updateData(name,params){
    return await fetch('https://dummyjson.com/'+name+'/'+params.id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    })
        .then(res => res.json())
 }
export async function deleteData(name,id){
    return await fetch('https://dummyjson.com/'+name+'/'+id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(res => res.json())
}
