// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('app.ui');
goog.require('app.components');
goog.require('app.lines');
goog.require('clojure.string');
app.core.app = (function app$core$app(){
var display_value = reagent.core.atom.call(null,"0");
var remainingValue = reagent.core.atom.call(null,(0));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.safe_area_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#000",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"color","color",1011675173),"#ffff",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.buttonLine,app.lines.fifthLine.call(null,display_value,remainingValue)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.buttonLine,app.lines.fourthLine.call(null,display_value,remainingValue)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.buttonLine,app.lines.thirdLine.call(null,display_value,remainingValue)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.buttonLine,app.lines.secondLine.call(null,display_value,remainingValue)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.buttonLine,app.lines.firstLine.call(null,display_value,remainingValue)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.calculatorDisplay,display_value], null)], null);
});
app.core._main = (function app$core$_main(var_args){
var args__4777__auto__ = [];
var len__4771__auto___1168 = arguments.length;
var i__4772__auto___1169 = (0);
while(true){
if((i__4772__auto___1169 < len__4771__auto___1168)){
args__4777__auto__.push((arguments[i__4772__auto___1169]));

var G__1170 = (i__4772__auto___1169 + (1));
i__4772__auto___1169 = G__1170;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return app.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});
goog.exportSymbol('app.core._main', app.core._main);

(app.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.app], null));
}));

(app.core._main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.core._main.cljs$lang$applyTo = (function (seq1167){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq1167));
}));


//# sourceMappingURL=core.js.map
