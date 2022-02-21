fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    });
    function appendData(data) {
        // const keys = Object.keys(data);
        for (const [key, value] of Object.entries(data)) {
            var mainContainer = document.getElementById(key);
            if(key === "section2"){
                for(var i = 0; i < value.length; i++) {
                    var div = document.createElement("div");
                    var img = document.createElement("img");
                    var h1 = document.createElement("h1");
                    var p = document.createElement("p");
                    img.setAttribute("src", value[i].image);
                    h1.innerText = value[i].heading;
                    p.innerText = value[i].text;
                    div.appendChild(img);
                    div.appendChild(h1);
                    div.appendChild(p);
                    mainContainer.appendChild(div);
                }
            }
            else if(key === "section4") {
                for(var i = 0; i < value.length; i++) {
                    var div = document.createElement("div");
                    var img = document.createElement("img");
                    var h1 = document.createElement("h1");
                    var p = document.createElement("p");
                    img.setAttribute("src", value[i].image);
                    h1.innerText = value[i].heading;
                    p.innerText = value[i].text;
                    div.appendChild(h1);
                    div.appendChild(p);
                    if(i == 0) {
                        mainContainer.appendChild(img);
                        mainContainer.appendChild(div);
                    }
                    else {
                        mainContainer.appendChild(div);
                        mainContainer.appendChild(img);
                    }
                }
            }
            else {
                const texts = value.text;
                var div = document.createElement("div");
                var p1 = document.createElement("p");
                var p2 = document.createElement("p");
                p1.innerText = texts[0];
                p2.innerText = texts[1];
                div.appendChild(p1);
                div.appendChild(p2);
                mainContainer.insertBefore(div, document.getElementById("flag"));
            }
        }
    }