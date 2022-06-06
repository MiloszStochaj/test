fetch(`https://api.vatcomply.com/rates`)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    // const obj = data.rates;
    // console.log(obj)
    // const objArr = Object.values(obj);
    // console.log(objArr);

    // let arr = Object.keys(obj);
    // console.log(arr);

    
      for (let [key, value] of Object.entries(data.rates)) {
        const rates = new Object();
        rates.rate = key;
        rates.price = value;
        console.log(rates);


        function doSomething() {
            console.log(Array.from(arguments));
          }
          doSomething(rates);
        // console.log(key, value);
      }
    

   
   

    // for (i = 0; i <= arr.length - 1; i++) {
    //   for (i = 0; i <= objArr.length - 1; i++) {
    // function coin(rate, price){
    //     return {
    //         rate,
    //         price,
    //     }
    // }

    // let Objectt = coin(arr[i], objArr[i])
    // console.log(Object)
    // for(i = 0; i <= 31; i++){
    //     let c = []
    //     c.push([i])
    //     console.log(c);
    // }

    // const object = new Object();
    // object.rate = arr[i];
    // object.price = objArr[i];

    // console.log(object);

    // let c = new Array(10)
    // c.push(object)
    // console.log(c);

    // console.log(data.base, arr[i], objArr[i])
    //   }
    // }
  });
