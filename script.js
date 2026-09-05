const products=[
["Gayo Robusta","Robusta","Robusta","Mocha, Caramel",20000],
["Sidikalang","Robusta","Robusta","Brown Sugar, Roasted Peanut, Chocolate Malt",19000],
["Gayo","Arabika","Washed","Lychee, Orange, Lime",26000],
["Temanggung","Arabika","Washed","Brown Sugar, Malt, Chocolate",25000],
["Papua Moanemani","Arabika","Natural","Peach, Orange",33000],
["Bali Kintamani","Arabika","Natural","Chocolate, Orange Peel, Apricot",28000],
["Toraja Wine","Arabika","Wine","Mango, Floral",41000],
["Garut Wine","Arabika","Wine","Grapefruit, Pineapple, Floral",38000],
["Flores Anggur Merah","Arabika","Experimental","Cherry, Berry, Ripe Pineapple",40000],
["Java Halu Banana","Arabika","Experimental","Pineapple Jelly, Lemonade, Nanas",29000]
];

const grid=document.querySelector("#productGrid");
let current="all";
function rupiah(n){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n)}
function render(){
 const q=document.querySelector("#search").value.toLowerCase();
 grid.innerHTML=products.filter(p=>(current==="all"||p[1].toLowerCase()===current)&&p.join(" ").toLowerCase().includes(q))
 .map((p,i)=>`<article class="product"><span class="origin-no">ORIGIN 0${i+1}</span><h3>${p[0]}</h3><span class="type">${p[1]} · ${p[2]}</span><p class="profile">${p[3]}</p><div class="price">${rupiah(p[4])} <small>/ 100 g</small></div><div class="process">Origin character curated by BERNAMA</div></article>`).join("");
}
document.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");current=b.dataset.filter;render()});
document.querySelector("#search").oninput=render; render();

document.querySelectorAll(".package").forEach(btn=>btn.onclick=()=>{
 document.querySelectorAll(".package").forEach(x=>x.classList.remove("active"));btn.classList.add("active");
 const five=btn.dataset.pack==="5";
 document.querySelector("#packImage").src=five?"assets/explorer-5.jpeg":"assets/explorer-3.jpeg";
 document.querySelector("#packTitle").textContent=`EXPLORER ${five?5:3}`;
});

document.querySelector(".menu-btn").onclick=()=>document.querySelector(".site-header").classList.toggle("open");
document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>document.querySelector(".site-header").classList.remove("open"));

const toast=document.querySelector("#toast");
document.querySelector("#orderForm").onsubmit=(e)=>{
 e.preventDefault();
 const name=document.querySelector("#name").value.trim()||"Teman";
 const choice=document.querySelector("#choice").value;
 toast.textContent=`Terima kasih, ${name}. Permintaan “${choice}” sudah dicatat (demo).`;
 toast.classList.add("show"); e.target.reset();
 setTimeout(()=>toast.classList.remove("show"),4000);
};
