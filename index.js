// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "W"},
    //...
  ]
function superbowlWin(ar){
    let outcome = ar.find(a => a.result === "W" ? a.year: undefined)
    // console.log(outcome)
    return outcome

    
    
        // // a.find(()=>{
        //     for (let i = 0 ; i < a.length ; i++){
        //        let q = a[i].result === "W"? a[i].year : undefined
        //        console.log(q)
                    
        
        //         // if (array[i].result ==="W"){
        //             // return array[i].year
        //         // }else{
        //             // return "miss"
        //             // }
                    
        //     }

        // // })
            
    
}
superbowlWin(record)
// console.log(superbowlWin(record))
// console.log(record[1].result)