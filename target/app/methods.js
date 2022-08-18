// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('app.methods$');
goog.require('cljs.core');
goog.require('clojure.string');
app.methods$.clear_display = (function app$methods$clear_display(display){
return parseFloat(cljs.core.reset_BANG_.call(null,display,"0"));
});
app.methods$.enter_value = (function app$methods$enter_value(display,value){
if((cljs.core.deref.call(null,display) === "0")){
return cljs.core.reset_BANG_.call(null,display,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
} else {
return cljs.core.swap_BANG_.call(null,display,cljs.core._PLUS_,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
}
});
app.methods$.addition = (function app$methods$addition(display,acc){
return cljs.core.swap_BANG_.call(null,acc,cljs.core._PLUS_,parseFloat(cljs.core.deref.call(null,display)),app.methods$.clear_display.call(null,display));
});
app.methods$.subtraction = (function app$methods$subtraction(display,acc){
if((cljs.core.deref.call(null,acc) === (0))){
return cljs.core.reset_BANG_.call(null,acc,parseFloat(cljs.core.deref.call(null,display)),app.methods$.clear_display.call(null,display));
} else {
return cljs.core.swap_BANG_.call(null,acc,cljs.core._,parseFloat(cljs.core.deref.call(null,display)),app.methods$.clear_display.call(null,display));
}
});
app.methods$.multiplication = (function app$methods$multiplication(display,acc){
if((cljs.core.deref.call(null,acc) === (0))){
return cljs.core.reset_BANG_.call(null,acc,parseFloat(cljs.core.deref.call(null,display)),app.methods$.clear_display.call(null,display));
} else {
return cljs.core.swap_BANG_.call(null,acc,cljs.core._STAR_,parseFloat(cljs.core.deref.call(null,display)),((1) + app.methods$.clear_display.call(null,display)));
}
});
app.methods$.division = (function app$methods$division(display,acc){
if((cljs.core.deref.call(null,acc) === (0))){
return cljs.core.reset_BANG_.call(null,acc,parseFloat(cljs.core.deref.call(null,display)),app.methods$.clear_display.call(null,display));
} else {
if((cljs.core.deref.call(null,display) === "0")){
return cljs.core.reset_BANG_.call(null,display,"Can't divide by 0");
} else {
return cljs.core.reset_BANG_.call(null,acc,(cljs.core.deref.call(null,acc) / parseFloat(cljs.core.deref.call(null,display))),app.methods$.clear_display.call(null,display));
}
}
});
app.methods$.signal_inversion = (function app$methods$signal_inversion(display){
if((cljs.core.deref.call(null,display) === "0")){
return cljs.core.reset_BANG_.call(null,display,"-");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.deref.call(null,display),"-")){
var value = cljs.core.deref.call(null,display);
return cljs.core.reset_BANG_.call(null,display,clojure.string.replace.call(null,value,"-",""));
} else {
return cljs.core.reset_BANG_.call(null,display,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,display))].join(''));
}
}
});
app.methods$.percentage = (function app$methods$percentage(display){


return cljs.core.str.cljs$core$IFn$_invoke$arity$1((parseFloat(cljs.core.deref.call(null,display)) / (100)));
});
app.methods$.clear = (function app$methods$clear(display,acc){
if((cljs.core.deref.call(null,display) === "0")){
return cljs.core.reset_BANG_.call(null,acc,(0));
} else {
return cljs.core.reset_BANG_.call(null,display,"0");
}
});

//# sourceMappingURL=methods.js.map
