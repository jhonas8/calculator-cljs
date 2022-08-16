// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__1010__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1010 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1011__i = 0, G__1011__a = new Array(arguments.length -  0);
while (G__1011__i < G__1011__a.length) {G__1011__a[G__1011__i] = arguments[G__1011__i + 0]; ++G__1011__i;}
  args = new cljs.core.IndexedSeq(G__1011__a,0,null);
} 
return G__1010__delegate.call(this,args);};
G__1010.cljs$lang$maxFixedArity = 0;
G__1010.cljs$lang$applyTo = (function (arglist__1012){
var args = cljs.core.seq(arglist__1012);
return G__1010__delegate(args);
});
G__1010.cljs$core$IFn$_invoke$arity$variadic = G__1010__delegate;
return G__1010;
})()
);

(o.error = (function() { 
var G__1013__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1013 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1014__i = 0, G__1014__a = new Array(arguments.length -  0);
while (G__1014__i < G__1014__a.length) {G__1014__a[G__1014__i] = arguments[G__1014__i + 0]; ++G__1014__i;}
  args = new cljs.core.IndexedSeq(G__1014__a,0,null);
} 
return G__1013__delegate.call(this,args);};
G__1013.cljs$lang$maxFixedArity = 0;
G__1013.cljs$lang$applyTo = (function (arglist__1015){
var args = cljs.core.seq(arglist__1015);
return G__1013__delegate(args);
});
G__1013.cljs$core$IFn$_invoke$arity$variadic = G__1013__delegate;
return G__1013;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
