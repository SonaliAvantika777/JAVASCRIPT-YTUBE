// for loop

for (let i = 0; i < 10; i++) {
    const element = i;  
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(i);
    if(i == 5){
        // console.log("5 is best number");
    }
}

// nested for loop
for (let i = 2; i <= 10; i++) {
        // console.log(`table of ${i} :`);
        for (let j = 1; j <= 10; j++) {
            
            // console.log(i,"*",j ," = ",i*j);
        }
       
}

const arr = ["sonali","rachi","apurva"]
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    
}

// break and continue in for loop
for (let index = 1; index < 10; index++) {
    // console.log(index);
    if (index == 5) {
        // console.log(`5 is detected`);
        break;                  // stop loop execution 
    }  
}

for (let index = 1; index < 10; index++) {
    console.log(index);
    if (index == 5) {
        console.log(`5 is detected`);
        continue;                  // skip only one loop execution 
    }  
}