import"./assets/styles-b3f003b0.js";const o=document.querySelector(".feedback-form");document.querySelector(".input-email");document.querySelector(".textarea-message");o.addEventListener("input",()=>{const e=new FormData(o),t=e.get("email"),a=e.get("message");n("feedback-form-state",{email:t,message:a})});function n(e,t){const a=JSON.stringify(t);localStorage.setItem(e,a)}
//# sourceMappingURL=commonHelpers2.js.map
