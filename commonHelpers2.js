import"./assets/styles-b3f003b0.js";const o=document.querySelector(".feedback-form");document.querySelector(".input-email");document.querySelector(".textarea-message");document.querySelector(".button-submit");o.addEventListener("input",()=>{const e=new FormData(o),t=e.get("email"),a=e.get("message");s("feedback-form-state",{email:t,message:a})});function s(e,t){const a=JSON.stringify(t);localStorage.setItem(e,a)}function n(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}window.addEventListener("DOMContentLoaded",()=>{const e=n("feedback-form-state");o.elements.email.value=(e==null?void 0:e.email)||"",o.elements.message.value=(e==null?void 0:e.message)||""});o.addEventListener("submit",e=>{e.preventDefault();const{email:t,message:a}=e.target.elements;if(t.value.trim()===""||a.value.trim()===""){alert("Fill please all fields");return}console.log({email:t.value.trim(),message:a.value.trim()}),o.reset(),localStorage.removeItem("feedback-form-state")});
//# sourceMappingURL=commonHelpers2.js.map
