
let changurl="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";
console.log(changurl,"qqq");
var firsturl;
var securl;
var l_c_name;
var r_c_name;

for (let single_country in countryList) {
    var selects_left=document.querySelector(".left");
    var options_left=document.createElement("option");
    selects_left.append(options_left);

     var l_s_country= options_left.innerHTML=countryList[single_country];
    var code_country_from=single_country;
    options_left.value=code_country_from;
    console.log(options_left.value," code...");
}

selects_left.addEventListener("change",()=>{
    l_c_name= selects_left.options[selects_left.selectedIndex].innerText;

     console.log(l_c_name,"Left_country_name");

    var selectedOption_1= selects_left.options[selects_left.selectedIndex].value;
    firsturl =`${changurl}${selectedOption_1.toLowerCase()}`;

    // code data set this line ...
    // console.log(selectedOption_1,"c..........");
    // console.log(firsturl ,"000000000000000000");
    })

for (let single_country_2 in countryList) {
var selects_right=document.querySelector(".right");
var options_right=document.createElement("option");
selects_right.append(options_right);


var r_s_country=options_right.innerHTML=countryList[single_country_2];

options_right.value=code_country_to;
var code_country_to=single_country_2;
}

selects_right.addEventListener("change",()=>{
r_c_name =selects_right.options[selects_right.selectedIndex].innerText;
console.log(r_c_name,"Right_country_name");


// code value
var selectedOption_2 = selects_right.options[selects_right.selectedIndex].value;
var myfinalvalue=selectedOption_2.toLowerCase();
securl =`${firsturl}/${myfinalvalue}.json`;

console.log(myfinalvalue ,"FFFFFFFFFFFFFFFFFF");
event_btn(securl , myfinalvalue);
})

function event_btn(securl,myfinalvalue) {
     var click_btn= document.querySelector(".click_btn");
     click_btn.addEventListener("click",()=>{
     myfun(securl,myfinalvalue);
});
}

// let finalurl=`${changurl}/${left_side}/${right_side}.json`;
async function myfun(finalurl,myfinalvalue) {
    let response= await axios.get(finalurl);
    console.log(response);
    let date= response.data.date;
    console.log(date);
    let data=  response.data[myfinalvalue];
    console.log(data,"RRRRRRRRRRRRRRRRRRRRRRRR");
    let output_section =document.querySelector(".output_section");
    output_section.innerHTML="DATE :"+date+"<br>"+"currency :"+data;
  // [myfinalvalue] right value this is hear
}

 let replace=document.querySelector(".replace");

replace.addEventListener("click",()=>{
  replace_value();
});


  function replace_value(params) {
  
   var left_s_country =document.querySelector(".left");
   
    let temp =r_c_name;
    r_c_name =l_c_name;
    l_c_name = temp ;

    console.log(r_c_name,"right");
    console.log(l_c_name,"left");
    selects_right.options[selects_right.selectedIndex].innerText=r_c_name;
    selects_left.options[selects_left.selectedIndex].innerText=l_c_name;

    
    let a= selects_right.options[selects_right.selectedIndex].value;
    let first =a.toLowerCase();
    console.log(first);
    let b=selects_left.options[selects_left.selectedIndex].value;
    let second =b.toLowerCase();
    console.log(second);

    let rpt =`${changurl}${first}/${second}.json`;
    myfun(rpt ,second);
}
































