export function citySearch(searchText){
    const fs=require('fs');
    const rawData=fs.readFileSync("./city.list.json");
    const cities=JSON.parse(rawData);

    const data =cities.filter(city=>{
        const regex=new RegExp(`^${searchText}`,'gi');
        return city.name.match(regex);
    }); 

    return data;
}