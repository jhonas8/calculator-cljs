// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('app.components');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('app.ui');
app.components.calculatorButton = (function app$components$calculatorButton(var_args){
var G__1170 = arguments.length;
switch (G__1170) {
case 3:
return app.components.calculatorButton.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.components.calculatorButton.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.components.calculatorButton.cljs$core$IFn$_invoke$arity$3 = (function (text,color,bgcolor){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.touchable_opacity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["center","center",bgcolor,(80),"center","flex",(50),(80),(5)])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(30),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),text], null)], null);
}));

(app.components.calculatorButton.cljs$core$IFn$_invoke$arity$4 = (function (text,color,bgcolor,flex){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.touchable_opacity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["center","center",bgcolor,(80),flex,"center","flex",(50),(80),(5)])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(30),new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Helvetica"], null)], null),text], null)], null);
}));

(app.components.calculatorButton.cljs$lang$maxFixedArity = 4);

app.components.calculatorDisplay = (function app$components$calculatorDisplay(value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(70),new cljs.core.Keyword(null,"color","color",1011675173),"#ffff",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"helvetica-light-587ebe5a59211",new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),value], null)], null);
});
app.components.buttonLine = (function app$components$buttonLine(buttons){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),(function (){var iter__4564__auto__ = (function app$components$buttonLine_$_iter__1172(s__1173){
return (new cljs.core.LazySeq(null,(function (){
var s__1173__$1 = s__1173;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__1173__$1);
if(temp__5804__auto__){
var s__1173__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1173__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__1173__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__1175 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__1174 = (0);
while(true){
if((i__1174 < size__4563__auto__)){
var button = cljs.core._nth.call(null,c__4562__auto__,i__1174);
cljs.core.chunk_append.call(null,b__1175,app.components.calculatorButton.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"flex","flex",-1425124628).cljs$core$IFn$_invoke$arity$1(button)));

var G__1176 = (i__1174 + (1));
i__1174 = G__1176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1175),app$components$buttonLine_$_iter__1172.call(null,cljs.core.chunk_rest.call(null,s__1173__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1175),null);
}
} else {
var button = cljs.core.first.call(null,s__1173__$2);
return cljs.core.cons.call(null,app.components.calculatorButton.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770).cljs$core$IFn$_invoke$arity$1(button),new cljs.core.Keyword(null,"flex","flex",-1425124628).cljs$core$IFn$_invoke$arity$1(button)),app$components$buttonLine_$_iter__1172.call(null,cljs.core.rest.call(null,s__1173__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__.call(null,buttons);
})()], null);
});

//# sourceMappingURL=components.js.map
