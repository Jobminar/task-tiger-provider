import{d as t}from"./chunk-HJO2KOHN.js";import{g as e}from"./chunk-MON7YFGF.js";var n=class extends t{constructor(){super(),this.handleVisibilityChange=()=>{let i={isActive:document.hidden!==!0};this.notifyListeners("appStateChange",i),document.hidden?this.notifyListeners("pause",null):this.notifyListeners("resume",null)},document.addEventListener("visibilitychange",this.handleVisibilityChange,!1)}exitApp(){throw this.unimplemented("Not implemented on web.")}getInfo(){return e(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}getLaunchUrl(){return e(this,null,function*(){return{url:""}})}getState(){return e(this,null,function*(){return{isActive:document.hidden!==!0}})}minimizeApp(){return e(this,null,function*(){throw this.unimplemented("Not implemented on web.")})}};export{n as AppWeb};
