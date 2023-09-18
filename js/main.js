// bu yerda kunlik taqvimni chizish boshlanadi
const dayTemplate = document.querySelector(".times-list__template");
const itemFragment = document.createDocumentFragment();
const ellist = document.querySelector(".times-list__list");
const elForm = document.querySelector(".hero__form");
const elSellect = document.querySelector(".hero__form-select");
const nowTime = document.querySelector(".js-now-time");
const tabelBody = document.querySelector(".time-tabel__tabel-body");
const changeBtnWrap = document.querySelector(".time-tebel__btn-wrap");
const monthSellect = document.querySelector(".time-tabel__month-sellect");
const changeLanguageList = document.querySelector(".site-header__list");
const timeLeft = document.querySelector(".times-list__desc");
const months = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avgust",
    "sentyabr",
    "oktyabr",
    "noyabr",
    "dekabr",
]


changeLanguageList.addEventListener("click",evt => {
    if(evt.target.matches(".ru")) {
        window.location.pathname = "./indexru.html";
    }
})
async function getDayTime (url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const dayTemplateClone = dayTemplate.cloneNode(true).content;
        
        // const item = dayTemplateClone.querySelector(".times-list__item")
        const itembomdod =  dayTemplateClone.querySelector(".item-bomdod");
        const date0 = dayTemplateClone.querySelector(".js-region");
        date0.textContent = data.region;
        
        const bomdod = dayTemplateClone.querySelector(".js-bomdod-time");
        bomdod.textContent = data.times.tong_saharlik;
        
        const date = dayTemplateClone.querySelector(".js-region");
        date.textContent = data.region;
        
        const itempeshin =  dayTemplateClone.querySelector(".item-peshin");
        const peshin = dayTemplateClone.querySelector(".js-peshin-time");
        peshin.textContent = data.times.peshin;
        
        
        const date1 = dayTemplateClone.querySelector(".js-region1");
        date1.textContent = data.region;
        
        const itemasr = dayTemplateClone.querySelector(".item-asr");
        const asr = dayTemplateClone.querySelector(".js-asr-time");
        asr.textContent = data.times.asr;
        
        
        const date2 = dayTemplateClone.querySelector(".js-region2");
        date2.textContent = data.region;
        
        const itemshom = dayTemplateClone.querySelector(".item-shom");
        const shom = dayTemplateClone.querySelector(".js-shom-time");
        shom.textContent = data.times.shom_iftor;
        
        const date3 = dayTemplateClone.querySelector(".js-region3");
        date3.textContent = data.region;
        
        const itemxufton = dayTemplateClone.querySelector(".item-xufton");
        const xufton = dayTemplateClone.querySelector(".js-xufton-time");
        xufton.textContent = data.times.hufton;
        
        const date4 = dayTemplateClone.querySelector(".js-region4");
        date4.textContent = data.region;
        
        
        itemFragment.appendChild(dayTemplateClone);
        ellist.appendChild(itemFragment);
        setInterval(() => {
            const new_date = new Date();
            const now_hour = new_date.getHours();
            const now_minute = String(new_date.getMinutes()).padStart(2,"0");
            const now_month =months[new_date.getMonth()];
            const now_year = new_date.getFullYear();
            const now_day = new_date.getDate();
            const now_second = new_date.getSeconds();
            const now_fulldate = `Joriy vaqt: ${now_day} ${now_month} ${now_year} yil ${String(now_hour).padStart(2,"0")}:${now_minute}:${String(now_second).padStart(2,"0")}`;
            nowTime.textContent = now_fulldate;

            if (bomdod.textContent.slice(0,2) < now_hour && now_hour < data.times.quyosh.slice(0,2)) {
                itembomdod.style.borderColor = "red";
                itembomdod.style.color = "red";  
            }
            if(bomdod.textContent.slice(0,2) == now_hour) {
                if (bomdod.textContent.slice(3) < now_minute && now_minute < data.times.quyosh.slice(3)) {
                    itembomdod.style.borderColor = "red";
                    itembomdod.style.color = "red"; 
                }    
            }
            if (bomdod.textContent.slice(0,2) > now_hour) {
                itemxufton.style.borderColor = "red";
                itemxufton.style.color = "red";        
            }
            if (peshin.textContent.slice(0,2) < now_hour  && now_hour < asr.textContent.slice(0,2)) {
                itempeshin.style.borderColor = "red";
                itempeshin.style.color = "red";
            }
            if(peshin.textContent.slice(0,2) == now_hour) {
                if (peshin.textContent.slice(3) < now_minute && now_minute < asr.textContent.slice(3)) {
                    itempeshin.style.borderColor = "red";
                    itempeshin.style.color = "red";  
                }    
            }
            if (asr.textContent.slice(0,2) < now_hour && now_hour< shom.textContent.slice(0,2)) {
                itemasr.style.borderColor = "red";
                itemasr.style.color = "red"; 
            }
            if(asr.textContent.slice(0,2) == now_hour) {
                if (asr.textContent.slice(3) < now_minute && now_minute < shom.textContent.slice(3)) {
                    itemasr.style.borderColor = "red";
                    itemasr.style.color = "red";    
                }    
            }
            if (shom.textContent.slice(0,2) < now_hour && now_hour < xufton.textContent.slice(0,2)) {
                itemshom.style.borderColor = "red";
                itemshom.style.color = "red";                
            }
            if(shom.textContent.slice(0,2) == now_hour) {
                if (shom.textContent.slice(3) < now_minute  && now_minute < xufton.textContent.slice(3) ) {
                    itemshom.style.borderColor = "red";
                    itemshom.style.color = "red";  
                }    
            }
            if ( now_hour > xufton.textContent.slice(0,2)) {
                itemxufton.style.borderColor = "red";
                itemxufton.style.color = "red";        
            }
            if(xufton.textContent.slice(0,2) == now_hour) {
                itemxufton.style.borderColor = "red";
                    itemxufton.style.color = "red";     
            }
          
            
        },1000);
        
    } catch (error) {
        console.log(error.message);
        if (error.message == "Failed to fetch") {
            ellist.innerHTML = `<p class="text-danger text-center fw-bold">Siz internetga ulanmagansiz !!!</p>`
        }else {
            ellist.innerHTML = `<p class ="text-danger text-center fw-bold"> !!! Kechirasz bizda bu viloyat xaqida malumot yoq !!!</p>`
        }
        
    }
}

getDayTime("https://islomapi.uz/api/present/day?region=Farg'ona")

elForm.addEventListener("submit", evt => {
    evt.preventDefault();
    ellist.innerHTML = "";
    const sellectValue = elSellect.value;
    getDayTime(`https://islomapi.uz/api/present/day?region=${sellectValue}`);
})

// bu yerda kunlik taqvimni chizish tugadi


// bu yerda xaftalik va oylik taqvimni chizish boshlandi
const weekTemplate = document.querySelector(".time-tabel__template");
function render(arr,node) {
    
    arr.forEach(item => {
        const weekTemplateClone = weekTemplate.cloneNode(true).content;
        
        const weekName = weekTemplateClone.querySelector(".td-week");
        weekName.textContent = item.weekday.slice(0,2)
        console.log(weekName);
        const day = weekTemplateClone.querySelector(".td-day");
        day.textContent = item.date.slice(0,10);
        
        const bomdod = weekTemplateClone.querySelector(".td-bomdod");
        bomdod.textContent = item.times.tong_saharlik;
        
        const peshin = weekTemplateClone.querySelector(".td-peshin");
        peshin.textContent = item.times.peshin;
        
        const asr = weekTemplateClone.querySelector(".td-asr");
        asr.textContent = item.times.asr;
        
        const shom = weekTemplateClone.querySelector(".td-shom");
        shom.textContent = item.times.shom_iftor;
        
        const xufton = weekTemplateClone.querySelector(".td-xufton");
        xufton.textContent = item.times.hufton;
        
        itemFragment.appendChild(weekTemplateClone)
    });
    node.appendChild(itemFragment)
}



// bu yerda xaftalik va oylik taqvimni chizish tugadi....


// bu yerda oylik va oylik taqvimni chizish uchun buttonlar bosilishi bilan API ga sorov yuborish boshlandi.... 
const tabel = document.querySelector(".time-tabel__tabel");
tabel.style.display = "none";
changeBtnWrap.addEventListener("click", evt => {
    const sellectedValue = elSellect.value;
    tabelBody.innerHTML = "";
    if (evt.target.matches(".time-tabel__weekbtn")) {
        async function getWeekTime(url) {
            const response = await fetch(url);
            const data = await response.json();
            render(data,tabelBody);  
            tabel.style.display = "block";
        }
        getWeekTime(`https://islomapi.uz/api/present/week?region=${sellectedValue}`)
    }else if(evt.target.matches(".time-tabel__month-btn")) {
        async function getMonthTime(url) {
            const response = await fetch(url);
            const data = await response.json();
            if (!monthSellect.value) {
                alert("Iltimos oyni tanlang !!!");
                return;
            }
            render(data,tabelBody)
            tabel.style.display = "block";
        }
        getMonthTime(`https://islomapi.uz/api/monthly?region=${sellectedValue}&month=${monthSellect.value}`)
    }
})
