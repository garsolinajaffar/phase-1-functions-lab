// Code your solution in this file!
function distanceFromHqInBlocks(ngori){
    if (ngori < 42){
        return 42-ngori
    }else{
        return ngori-42
    }
}
function distanceFromHqInFeet(ngori){
    if(ngori<42){
     return (42-ngori)*264
    }
    else{
       return  (ngori-42)*264
    }

} 
function distanceTravelledInFeet(start,destination){
    if(start>destination){
        return(start-destination)*264

    }
    else{
        return (destination-start)*264
    }

}
function   calculatesFarePrice(start, destination){
    let ngori
    (start>destination)?ngori=(start-destination)*264:ngori=(destination-start)*264
    if (ngori<400){
        return 0
    }
    else if (ngori>400&&ngori<2000){
        return (ngori-400)*0.02
    }else if(ngori>2000&&ngori<2500){
        return 25
    }
    else {return "cannot travel that far"}
}