let xhr = new XMLHttpRequest();
console.log('xhr', xhr);
xhr.open('get', 'https://fakestoreapi.com/products');
xhr.send();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        console.log('status', xhr.status);
        if (xhr.status === 200) {
            console.log('success');

            let response = xhr.response;
            console.log('response', response);

            let datas = JSON.parse(response);
            console.log('datas', datas);

            let carousel = document.getElementById('carousel-inner1');
            console.log('carousel', carousel);
            let box = document.getElementById('datacontainer');
            let section2 = document.getElementById('section2');
            let section3 = document.getElementById('section3');

            let arr1 = ["men's clothing","jewelery","electronics","women's clothing"]
            

            let rows = ''
            let rows2 = ''
            let rows3 = ''
            let rows4 = ''
            for(i = 0; i<datas.length;i++){
                for(j = 0 ;j<arr1.length-3;j++){
                    if(datas[i].category === arr1[0]){
                        rows = rows + `
                        <div class="carousel-item ${i === 0 ? 'active' : ''} ">
                        <div class = "d-flex justify-content-between align-items-center">
                        <div>
                                <div class = "fs-3">${datas[i].title}</div>
                                <div class = "fs-4">${datas[i].category}</div>
                                <div class ="fs-4">${datas[i].price}</div>
                                <button onclick = "handleclick(${datas[i].id})" class = "add-to-cart custom-btn btn-5">Add to cart </button>
                            </div>
                            
                            <div>
                                <img onclick = "handleclick(${datas[i].id})" src="${datas[i].image}" alt="Product Image" class = "image1">
                            </div>
                        </div>
                        </div>
                        `
                      
                    }
                    if(datas[i].category === arr1[1]){
                        rows2 = rows2 + `
                        <div class = "border border-2 container-box bg-body ">
                            <div>
                                <img onclick = "handleclick(${datas[i].id})" src="${datas[i].image}" alt="Product Image" class = "image2" style="width:200px; height:200px;padding : 20px">
                            </div>
                            <div>
                                <div class = "fs-3">${datas[i].title.slice(0,15)+"...."}</div>
                                <div class = "fs-4">${datas[i].category}</div>
                                <div class ="fs-4">$${datas[i].price}</div>
                                <button onclick = "handleclick(${datas[i].id})" class = "add-to-cart custom-btn btn-5">Add to cart</button>
                            </div>
                        </div>
                        `
                      
                    }
                    if(datas[i].category === arr1[2]){
                        rows3 = rows3 + `
                        <div class = "border border-2 container-box bg-body ">
                            <div>
                                <img onclick = "handleclick(${datas[i].id})" src="${datas[i].image}" alt="Product Image" class = "image2" style="width:200px; height:200px;padding : 20px">
                            </div>
                            <div>
                                <div class = "fs-3">${datas[i].title.slice(0,15)+"...."}</div>
                                <div class = "fs-4">${datas[i].category}</div>
                                <div class ="fs-4">$${datas[i].price}</div>
                                 <button onclick = "handleclick(${datas[i].id})" class = "add-to-cart custom-btn btn-5">Add to cart</button>
                            </div>
                        </div>
                        `
                      
                    }
                    if(datas[i].category === arr1[3]){
                        rows4 = rows4+ `
                        <div class = "border border-2 container-box bg-body ">
                            <div>
                                <img onclick = "handleclick(${datas[i].id})" src="${datas[i].image}" alt="Product Image" style="width:200px; height:200px;padding : 20px">
                            </div>
                            <div>
                                <div class = "fs-3">${datas[i].title.slice(0,15)+"...."}</div>
                                <div class = "fs-4">${datas[i].category}</div>
                                <div class ="fs-4">$${datas[i].price}</div>
                                <button onclick = "handleclick(${datas[i].id})" class = "add-to-cart custom-btn btn-5">Add to cart</button>
                            </div>
                        </div>
                        `
                    }
                }
           }
            console.log("rows", rows);
            carousel.innerHTML = rows;
            box.innerHTML = rows2;
            console.log("rows2",rows2);
            section2.innerHTML = rows3;
            section3.innerHTML = rows4;
        }
    }
};
function handleclick(id){
    console.log("button clicked")
    console.log("id",id)
    window.location = `xhr-view.html?id=${id}`
}


function view() {
    console.log('loading....');

    let location = window.location;
    console.log('location', location);

    let querystring = location.search;
    console.log('querystring', querystring);

    let urlparams = new URLSearchParams(querystring);
    console.log("url", urlparams);

    let id = urlparams.get('id');
    console.log('id', id);

    let xhr = new XMLHttpRequest();
    console.log('xhr', xhr);

    xhr.open('get', `https://fakestoreapi.com/products/${id}`);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            console.log('status', xhr.status);
            if (xhr.status === 200) {
                console.log('success');

                let response = xhr.response;
                console.log('response', response);

                let parseddata = JSON.parse(response);
                console.log('parseddata', parseddata);

                let load1 = document.getElementById('load1');
                let load2 = document.getElementById('load2');
                let load3 = document.getElementById('load3');
                let load4 = document.getElementById('load4');
                let load5 = document.getElementById('load5');
                let load6 = document.getElementById('load6');



                load1.innerHTML = parseddata.title;
                load2.innerHTML = `<img src="${parseddata.image}" alt="Product Image" class = "image2" style="width :400px; height:400px;">`;
                load3.innerHTML = parseddata.description;
                load4.innerHTML = `$${parseddata.price}`;
                load5.innerHTML = `rate : ${parseddata.rating.rate}`;
                load6.innerHTML = `count : ${parseddata.rating.count}`;
            }
        }
    }
}

