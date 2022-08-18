// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('app.lines');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('app.methods$');
app.lines.firstLine = (function app$lines$firstLine(display,acc){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"C",new cljs.core.Keyword(null,"color","color",1011675173),"#000",new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),"#A5A5A5",new cljs.core.Keyword(null,"onpress","onpress",-1107055862),(function (){
return app.methods$.clear.call(null,display,acc);
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"+/-",new cljs.core.Keyword(null,"color","color",1011675173),"#000",new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),"#A5A5A5",new cljs.core.Keyword(null,"onpress","onpress",-1107055862),(function (){
return app.methods$.signal_inversion.call(null,display);
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"%",new cljs.core.Keyword(null,"color","color",1011675173),"#000",new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),"#A5A5A5",new cljs.core.Keyword(null,"onpress","onpress",-1107055862),(function (){
return app.methods$.percentage.call(null,display);
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"/",new cljs.core.Keyword(null,"color","color",1011675173),"#ffff",new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),"#FE9500",new cljs.core.Keyword(null,"onpress","onpress",-1107055862),(function (){
return app.methods$.division.call(null,display,acc);
})], null)], null);
});
app.lines.secondLine = (function app$lines$secondLine(display,acc){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"7",new cljs.core.Keyword(null,"color","color",1011675173),"#ffff",new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),"#333333",new cljs.core.Keyword(null,"onpress","onpress",-1107055862),(function (){
return app.methods$.enter_value.call(null,display,(7));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"8",new cljs.core.Keyword(null,"color","color",1011675173),"#ffff",new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),"#333333",new cljs.core.Keyword(null,"onpress","onpress",-1107055862),(function (){
return app.methods$.enter_value.call(null,display,(8));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"9",new cljs.core.Keyword(null,"color","color",1011675173),"#ffff",new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),"#333333",new cljs.core.Keyword(null,"onpress","onpress",-1107055862),(function (){
return app.methods$.enter_value.call(null,display,(9));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"x",new cljs.core.Keyword(null,"color","color",1011675173),"#ffff",new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),"#FE9500",new cljs.core.Keyword(null,"onpress","onpress",-1107055862),(function (){
return app.methods$.multiplication.call(null,display,acc);
})], null)], null);
});
app.lines.thirdLine = (function app$lines$thirdLine(display,acc){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"4",new cljs.core.Keyword(null,"color","color",1011675173),"#ffff",new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),"#333333",new cljs.core.Keyword(null,"onpress","onpress",-1107055862),(function (){
return app.methods$.enter_value.call(null,display,(4));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"5",new cljs.core.Keyword(null,"color","color",1011675173),"#ffff",new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),"#333333",new cljs.core.Keyword(null,"onpress","onpress",-1107055862),(function (){
return app.methods$.enter_value.call(null,display,(5));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"6",new cljs.core.Keyword(null,"color","color",1011675173),"#ffff",new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),"#333333",new cljs.core.Keyword(null,"onpress","onpress",-1107055862),(function (){
return app.methods$.enter_value.call(null,display,(6));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"-",new cljs.core.Keyword(null,"color","color",1011675173),"#ffff",new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),"#FE9500",new cljs.core.Keyword(null,"onpress","onpress",-1107055862),(function (){
return app.methods$.subtraction.call(null,display,acc);
})], null)], null);
});
app.lines.fourthLine = (function app$lines$fourthLine(display,acc){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"1",new cljs.core.Keyword(null,"color","color",1011675173),"#ffff",new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),"#333333",new cljs.core.Keyword(null,"onpress","onpress",-1107055862),(function (){
return app.methods$.enter_value.call(null,display,(1));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"2",new cljs.core.Keyword(null,"color","color",1011675173),"#ffff",new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),"#333333",new cljs.core.Keyword(null,"onpress","onpress",-1107055862),(function (){
return app.methods$.enter_value.call(null,display,(2));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"3",new cljs.core.Keyword(null,"color","color",1011675173),"#ffff",new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),"#333333",new cljs.core.Keyword(null,"onpress","onpress",-1107055862),(function (){
return app.methods$.enter_value.call(null,display,(3));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"+",new cljs.core.Keyword(null,"color","color",1011675173),"#ffff",new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),"#FE9500",new cljs.core.Keyword(null,"onpress","onpress",-1107055862),(function (){
return app.methods$.addition.call(null,display,acc);
})], null)], null);
});
app.lines.fifthLine = (function app$lines$fifthLine(display,acc){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),"0",new cljs.core.Keyword(null,"color","color",1011675173),"#ffff",new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),"#333333",new cljs.core.Keyword(null,"flex","flex",-1425124628),(2),new cljs.core.Keyword(null,"onpress","onpress",-1107055862),(function (){
return app.methods$.enter_value.call(null,display,(0));
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),".",new cljs.core.Keyword(null,"color","color",1011675173),"#ffff",new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),"#333333",new cljs.core.Keyword(null,"onpress","onpress",-1107055862),(function (){
return cljs.core.swap_BANG_.call(null,display,cljs.core._PLUS_,".");
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"=",new cljs.core.Keyword(null,"color","color",1011675173),"#ffff",new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),"#FE9500",new cljs.core.Keyword(null,"onpress","onpress",-1107055862),(function (){
return cljs.core.reset_BANG_.call(null,display,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,acc)));
})], null)], null);
});

//# sourceMappingURL=lines.js.map
