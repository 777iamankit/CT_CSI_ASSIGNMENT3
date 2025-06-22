//callback funciton 
console.log('Callback handling');
function displayResult(result){
  console.log("This result is: "+result);
}

function multiply(a,b,callback){
  const res=a*b;
  callback(res);
}

multiply(2,3,displayResult);


//promise handling
console.log('\n\n Promises handling')
let myPromise=new Promise((resolve,reject)=>{
  console.log('Promise is being executed and taking only positive values:');
  let num1=5;
  let num2=10;
  if(num1>0 && num2>0){
    let result=num1*num2;
    resolve(result);
  }else{
    reject('Both numbers must be positive');
  }
});


  myPromise.then((result)=>{
  console.log('Promise solved with result: '+result);
})
.catch((error)=>{
  console.log(error);
})
.finally(()=>{
  console.log('Promise execution completed\n\n');
  console.log('\n\nAsync/Await handling');
  run();
})



//async/await handling
async function multiplyAsync(a,b){
  return new Promise((resolve,reject)=>{
    console.log('Async function is executed');
    if(a>0 && b>0){
      resolve(a*b);
    }else{
      reject('Both number must be positive');
    }
  })
}

async function run(){
  try{
    let result=await multiplyAsync(4,5);
    console.log('Async/Await result:'+result);
  }catch(error){
    console.log(error);
  }
}