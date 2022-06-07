fetch(`https://api.vatcomply.com/rates`)
  .then((response) => response.json())
  .then((data) => {
    const obj = data.rates;

    const rate = Object.keys(obj);
    const price = Object.values(obj);

    let ids = Array.from(Array(32).keys());

    // Create the object array
    let array = ids.map((id, index) => {
      return {
        id: id,
        rate: rate[index],
        price: price[index],
      };
    });

    console.log(array);

    // let p = new Map(Object.entries(data.rates));
    // console.log(p);

    //   for (let [key, value] of Object.entries(data.rates)) {
    //     const rates = new Object();
    //     rates.rate = key;
    //     rates.price = value;
    //     console.log(rates);

    // function doSomething() {
    //     console.log(Array.from(arguments));
    //   }
    //   doSomething(rates);
    // console.log(key, value);
    //   }

    // function obb(){
    //     for (i = 0; i <= arr.length - 1; i++) {
    //         for (i = 0; i <= objArr.length - 1; i++) {

    //       const object = new Object();
    //       object.id = i+1;
    //       object.rate = arr[i];
    //       object.price = objArr[i];

    //       console.log(object);

    //         }
    //       }

    // }
  });
