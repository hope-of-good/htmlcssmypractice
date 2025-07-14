document.addEventListener("DOMContentLoaded", function () {
const tbl = document.querySelector('.table');

document.getElementById("load").addEventListener("click",function(){
    servedishes();
    chairin();
});

function servedishes()
{
    const dishes=[
        {
            cls1:"plate",
            cls2:"top",
            id:"plate1",
            imgvalue:"img/pavbhajo.jpg"

        },
        {
            cls1:"plate",
            cls2:"top",
            id:"plate2",
            imgvalue:"img/panipuri.jpg"

        },
        {
            cls1:"plate",
            cls2:"bottom",
            id:"plate3",
            imgvalue:"img/dosa.jpg"

        },
        {
           cls1:"plate",
            cls2:"bottom",
            id:"plate4",
            imgvalue:"img/thali.png"

        }

    ]
    dishes.forEach(function (ele,ind)
    {
        const plating=document.createElement('div');
        plating.classList.add(ele.cls1,ele.cls2);
        plating.setAttribute('id',ele.id);
        tbl.appendChild(plating);
        const dish=document.createElement('img');
        dish.setAttribute('src',ele.imgvalue);
        plating.appendChild(dish);

    })
}
function chairin()
{
    let ch1,ch2,ch3,ch4;
    ch1=document.getElementById("c1");
    ch2=document.getElementById("c2");
    ch3=document.getElementById("c3");
    ch4=document.getElementById("c4");
    ch1.style.marginTop="5%";
    ch2.style.marginTop="5%";
    ch3.style.marginTop="-5%";
    ch4.style.marginTop="-5%";
}
})