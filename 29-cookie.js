
document.cookie = "name1=daniyal935";
document.cookie = "name2=daniyal1041";
document.cookie = "name3=daniyal136";
document.cookie = "name3=daniyal169";  //this will overwrite name3 which was 136 before


// creting own cookie

let key = prompt("Enter key");
let value = prompt("Enter value");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

// encodeURIComponent can take any string special chracter and encode it and we can decode it using decodeURI 

document.write(document.cookie);
console.log(document.cookie);