const avisContainer = document.querySelector("#testimonial .clients-avis");
        let list = avisContainer.querySelectorAll(".avis");
        list = Array.from(list);
        const tooglesBox = document.querySelector("#testimonial .toogles");
        list.forEach(avis => {
            const div = document.createElement("div")
            div.classList.add("toogle");
            if(avis.classList.contains("active"))
                div.classList.add("active");
            tooglesBox.append(div);
        });
        const toogles = tooglesBox.childNodes;
        console.log(toogles)
        const width = avisContainer.clientWidth;
        const l = list.length;
        let index = l/2;
        let number = 0;

        setInterval(function(){
                number += 400;
                number = number%(width / 2);
                //avisContainer.style.transform = `translate3d(${-number}px,0,0)`;
                node = list[index]; node1 = node.cloneNode(true);
                avisContainer.append(node1);
                list[index] = node1;
                avisContainer.removeChild(node);
                list.forEach(n => {
                    n.classList.remove("active");
                });
                toogles.forEach(n => {
                    n.classList.remove("active");
                });
                
                index = (index + 1)%l;
                list[index].classList.add("active");
                toogles[index].classList.add("active");
        },2000)
        /*
        const avisContainer = document.querySelector("#testimonial .clients-avis");
        let list = avisContainer.querySelectorAll(".avis");
        console.log(list)
        const width = avisContainer.clientWidth;
        let avisInterval;
        let number = 0;
        let index = 1;
        let node;
        let node1;
        let count = 1;
        setTimeout(function(){
            avisInterval = setInterval(function(){
                number += 400;
                index = (index + 1)%list.length;
                node = list[index];
                node1 = node.cloneNode(true);
                avisContainer.append(node1);
                //node.remove();
                avisContainer.removeChild(node);
                list[index]= node1;
                //avisContainer.style.transform = `translate3d(${-number}px,0,0)`;
                count++;
                if(count == 3)
                    clearInterval(avisInterval)
            },2000);
        },1000);

        const avisContainer = document.querySelector("#testimonial .clients-avis");
        let list = avisContainer.querySelectorAll(".avis");

        const width = avisContainer.clientWidth;
        let index = -1;
        const l = list.length;

        setInterval(function(){
                index = (index + 1)%l;
                node = list[index]; node1 = node.cloneNode(true);
                avisContainer.append(node1);
                list[index] = node1;
                avisContainer.removeChild(node);
                list.forEach(n => {
                    n.classList.remove("active");
                });
                list[(index + 2)%l].classList.add("active");
                console.log(list)
        },2000)

        

        list = [0,a,1,2];
        i = 0



        */