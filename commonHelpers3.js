import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as u}from"./assets/vendor-77e16229.js";const o=document.querySelector(".form");o.addEventListener("submit",s=>{s.preventDefault();const t=Number(o.elements.delay.value),r=Number(o.elements.step.value),m=Number(o.elements.amount.value);for(let e=0;e<m;e++){const c=t+e*r;l(e+1,c).then(({position:i,delay:n})=>{u.success({title:"Success",message:`✅ Fulfilled promise ${i} in ${n}ms`,position:"topRight"})}).catch(({position:i,delay:n})=>{u.error({title:"Error",message:`❌ Rejected promise ${i} in ${n}ms`,position:"topRight"})})}});function l(s,t){const r=Math.random()>.3;return new Promise((m,e)=>{setTimeout(()=>{r?m({position:s,delay:t}):e({position:s,delay:t})},t)})}
//# sourceMappingURL=commonHelpers3.js.map
