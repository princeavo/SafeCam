// const leftBtn = document.getElementById("scrollLeftBtn");
//         const rigthBtn = document.getElementById("scrollRigthBtn");
        const mainSection = document.getElementById("main-section");
        let numberChild = document.querySelectorAll("#main-section>div").length;

        let tab = [];

        document.querySelectorAll("#main-section>div").forEach(elem => {
            const div = elem.cloneNode(true);
            tab.push(div);
        });
            cloneNodes();

        // leftBtn.addEventListener("click",function(){
        //     mainSection.scrollLeft -= mainSection.scrollWidth/numberChild;
        // });
        // rigthBtn.addEventListener("click",function(){
        //     mainSection.scrollLeft += mainSection.scrollWidth/numberChild;
        // });
        let direction = 1;

        setTimeout(function(){
            // let interval =
            setInterval(function(){
                mainSection.scrollLeft += direction * mainSection.scrollWidth/numberChild;
                if(mainSection.scrollLeft + mainSection.scrollWidth/numberChild >= mainSection.scrollWidth && direction == 1)
                    direction = -1;
                else if( (mainSection.scrollLeft - mainSection.scrollWidth/numberChild < 0) && (direction == -1))
                    direction = 1;
                    //clearInterval(interval);
            },2000);
        },1000)
        function cloneNodes(){
            for(let elem of tab)
                mainSection.append(elem.cloneNode(true))
            numberChild = document.querySelectorAll("#main-section>div").length;
        }