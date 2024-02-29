const  fruits = ['apple','gava','orange','grapes','banana','lemon'];
            //fruits.splice(1);
            fruits.sort();
            const points = [40, 100, 1, 5, 25, 10];
            const products =  [ {name:"X00",price:100 },
                            {name:"X01",price:100 },
                            {name:"X02",price:100 },
                            {name:"X03",price:100 },
                            {name:"X04",price:110 },
                            {name:"X05",price:110 },
                            {name:"X06",price:110 },
                            {name:"X07",price:110 },
                            {name:"X08",price:120 },
                            {name:"X09",price:120 },
                            {name:"X10",price:120 },
                            {name:"X11",price:120 },
                            {name:"X12",price:130 },
                            {name:"X13",price:130 },
                            {name:"X14",price:130 },
                            {name:"X15",price:130 },
                            {name:"X16",price:140 },
                            {name:"X17",price:140 },
                            {name:"X18",price:140 },
                            {name:"X19",price:140 }];
            points.sort(function(a,b){ return b-a});
            var arr = [[1,2],[3,4],[5]];
            arr = arr.flat();
            console.log('flat ',arr);
            var numbers1 = [45, 4, 9, 16, 25];
            numbers1 = numbers1.map(mapFunction);
            products.sort((a,b)=>b.price-a.price);
            document.getElementById("p1").innerHTML = fruits;
            console.log(products);
            document.getElementById("p2").innerHTML = points;

            function mapFunction(value, index, array) {
              return value * 2;
            }
            document.getElementById("p3").innerHTML = numbers1;
        
            var numbers2 = [45, 4, 9, 16, 25];
            numbers2 = numbers2.filter(filter);
            function filter(value){
                return value > 15;
            }
            document.getElementById("p4").innerHTML = numbers2;