function change(number){
    const hangle = "공일이삼사오육칠팔구";
    let result = "";

    if(isNaN(number)){
        // 4
        console.log("들어옴")
        return;
    }
    
    for(let i of number){
        // console.log(hangle[i]);
        result += hangle[i];
    }
    result = result.replace("undefined","점");
    console.log(result);
}

