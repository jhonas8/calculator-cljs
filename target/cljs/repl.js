// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__4437){
var map__4438 = p__4437;
var map__4438__$1 = cljs.core.__destructure_map.call(null,map__4438);
var m = map__4438__$1;
var n = cljs.core.get.call(null,map__4438__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__4438__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4160__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__4439_4467 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__4440_4468 = null;
var count__4441_4469 = (0);
var i__4442_4470 = (0);
while(true){
if((i__4442_4470 < count__4441_4469)){
var f_4471 = cljs.core._nth.call(null,chunk__4440_4468,i__4442_4470);
cljs.core.println.call(null,"  ",f_4471);


var G__4472 = seq__4439_4467;
var G__4473 = chunk__4440_4468;
var G__4474 = count__4441_4469;
var G__4475 = (i__4442_4470 + (1));
seq__4439_4467 = G__4472;
chunk__4440_4468 = G__4473;
count__4441_4469 = G__4474;
i__4442_4470 = G__4475;
continue;
} else {
var temp__5804__auto___4476 = cljs.core.seq.call(null,seq__4439_4467);
if(temp__5804__auto___4476){
var seq__4439_4477__$1 = temp__5804__auto___4476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4439_4477__$1)){
var c__4591__auto___4478 = cljs.core.chunk_first.call(null,seq__4439_4477__$1);
var G__4479 = cljs.core.chunk_rest.call(null,seq__4439_4477__$1);
var G__4480 = c__4591__auto___4478;
var G__4481 = cljs.core.count.call(null,c__4591__auto___4478);
var G__4482 = (0);
seq__4439_4467 = G__4479;
chunk__4440_4468 = G__4480;
count__4441_4469 = G__4481;
i__4442_4470 = G__4482;
continue;
} else {
var f_4483 = cljs.core.first.call(null,seq__4439_4477__$1);
cljs.core.println.call(null,"  ",f_4483);


var G__4484 = cljs.core.next.call(null,seq__4439_4477__$1);
var G__4485 = null;
var G__4486 = (0);
var G__4487 = (0);
seq__4439_4467 = G__4484;
chunk__4440_4468 = G__4485;
count__4441_4469 = G__4486;
i__4442_4470 = G__4487;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_4488 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4160__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_4488);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_4488)))?cljs.core.second.call(null,arglists_4488):arglists_4488));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__4443_4489 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__4444_4490 = null;
var count__4445_4491 = (0);
var i__4446_4492 = (0);
while(true){
if((i__4446_4492 < count__4445_4491)){
var vec__4455_4493 = cljs.core._nth.call(null,chunk__4444_4490,i__4446_4492);
var name_4494 = cljs.core.nth.call(null,vec__4455_4493,(0),null);
var map__4458_4495 = cljs.core.nth.call(null,vec__4455_4493,(1),null);
var map__4458_4496__$1 = cljs.core.__destructure_map.call(null,map__4458_4495);
var doc_4497 = cljs.core.get.call(null,map__4458_4496__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_4498 = cljs.core.get.call(null,map__4458_4496__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_4494);

cljs.core.println.call(null," ",arglists_4498);

if(cljs.core.truth_(doc_4497)){
cljs.core.println.call(null," ",doc_4497);
} else {
}


var G__4499 = seq__4443_4489;
var G__4500 = chunk__4444_4490;
var G__4501 = count__4445_4491;
var G__4502 = (i__4446_4492 + (1));
seq__4443_4489 = G__4499;
chunk__4444_4490 = G__4500;
count__4445_4491 = G__4501;
i__4446_4492 = G__4502;
continue;
} else {
var temp__5804__auto___4503 = cljs.core.seq.call(null,seq__4443_4489);
if(temp__5804__auto___4503){
var seq__4443_4504__$1 = temp__5804__auto___4503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4443_4504__$1)){
var c__4591__auto___4505 = cljs.core.chunk_first.call(null,seq__4443_4504__$1);
var G__4506 = cljs.core.chunk_rest.call(null,seq__4443_4504__$1);
var G__4507 = c__4591__auto___4505;
var G__4508 = cljs.core.count.call(null,c__4591__auto___4505);
var G__4509 = (0);
seq__4443_4489 = G__4506;
chunk__4444_4490 = G__4507;
count__4445_4491 = G__4508;
i__4446_4492 = G__4509;
continue;
} else {
var vec__4459_4510 = cljs.core.first.call(null,seq__4443_4504__$1);
var name_4511 = cljs.core.nth.call(null,vec__4459_4510,(0),null);
var map__4462_4512 = cljs.core.nth.call(null,vec__4459_4510,(1),null);
var map__4462_4513__$1 = cljs.core.__destructure_map.call(null,map__4462_4512);
var doc_4514 = cljs.core.get.call(null,map__4462_4513__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_4515 = cljs.core.get.call(null,map__4462_4513__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_4511);

cljs.core.println.call(null," ",arglists_4515);

if(cljs.core.truth_(doc_4514)){
cljs.core.println.call(null," ",doc_4514);
} else {
}


var G__4516 = cljs.core.next.call(null,seq__4443_4504__$1);
var G__4517 = null;
var G__4518 = (0);
var G__4519 = (0);
seq__4443_4489 = G__4516;
chunk__4444_4490 = G__4517;
count__4445_4491 = G__4518;
i__4446_4492 = G__4519;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__4463 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__4464 = null;
var count__4465 = (0);
var i__4466 = (0);
while(true){
if((i__4466 < count__4465)){
var role = cljs.core._nth.call(null,chunk__4464,i__4466);
var temp__5804__auto___4520__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___4520__$1)){
var spec_4521 = temp__5804__auto___4520__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_4521));
} else {
}


var G__4522 = seq__4463;
var G__4523 = chunk__4464;
var G__4524 = count__4465;
var G__4525 = (i__4466 + (1));
seq__4463 = G__4522;
chunk__4464 = G__4523;
count__4465 = G__4524;
i__4466 = G__4525;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__4463);
if(temp__5804__auto____$1){
var seq__4463__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4463__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__4463__$1);
var G__4526 = cljs.core.chunk_rest.call(null,seq__4463__$1);
var G__4527 = c__4591__auto__;
var G__4528 = cljs.core.count.call(null,c__4591__auto__);
var G__4529 = (0);
seq__4463 = G__4526;
chunk__4464 = G__4527;
count__4465 = G__4528;
i__4466 = G__4529;
continue;
} else {
var role = cljs.core.first.call(null,seq__4463__$1);
var temp__5804__auto___4530__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___4530__$2)){
var spec_4531 = temp__5804__auto___4530__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_4531));
} else {
}


var G__4532 = cljs.core.next.call(null,seq__4463__$1);
var G__4533 = null;
var G__4534 = (0);
var G__4535 = (0);
seq__4463 = G__4532;
chunk__4464 = G__4533;
count__4465 = G__4534;
i__4466 = G__4535;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__4536 = cljs.core.conj.call(null,via,t);
var G__4537 = cljs.core.ex_cause.call(null,t);
via = G__4536;
t = G__4537;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__4540 = datafied_throwable;
var map__4540__$1 = cljs.core.__destructure_map.call(null,map__4540);
var via = cljs.core.get.call(null,map__4540__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__4540__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__4540__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__4541 = cljs.core.last.call(null,via);
var map__4541__$1 = cljs.core.__destructure_map.call(null,map__4541);
var type = cljs.core.get.call(null,map__4541__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__4541__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__4541__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__4542 = data;
var map__4542__$1 = cljs.core.__destructure_map.call(null,map__4542);
var problems = cljs.core.get.call(null,map__4542__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__4542__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__4542__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__4543 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__4543__$1 = cljs.core.__destructure_map.call(null,map__4543);
var top_data = map__4543__$1;
var source = cljs.core.get.call(null,map__4543__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__4544 = phase;
var G__4544__$1 = (((G__4544 instanceof cljs.core.Keyword))?G__4544.fqn:null);
switch (G__4544__$1) {
case "read-source":
var map__4545 = data;
var map__4545__$1 = cljs.core.__destructure_map.call(null,map__4545);
var line = cljs.core.get.call(null,map__4545__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__4545__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__4546 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__4546__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__4546,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__4546);
var G__4546__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__4546__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__4546__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__4546__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__4546__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__4547 = top_data;
var G__4547__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__4547,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__4547);
var G__4547__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__4547__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__4547__$1);
var G__4547__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__4547__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__4547__$2);
var G__4547__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__4547__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__4547__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__4547__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__4547__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__4548 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__4548,(0),null);
var method = cljs.core.nth.call(null,vec__4548,(1),null);
var file = cljs.core.nth.call(null,vec__4548,(2),null);
var line = cljs.core.nth.call(null,vec__4548,(3),null);
var G__4551 = top_data;
var G__4551__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__4551,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__4551);
var G__4551__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__4551__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__4551__$1);
var G__4551__$3 = (cljs.core.truth_((function (){var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
})())?cljs.core.assoc.call(null,G__4551__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__4551__$2);
var G__4551__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__4551__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__4551__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__4551__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__4551__$4;
}

break;
case "execution":
var vec__4552 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__4552,(0),null);
var method = cljs.core.nth.call(null,vec__4552,(1),null);
var file = cljs.core.nth.call(null,vec__4552,(2),null);
var line = cljs.core.nth.call(null,vec__4552,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__4539_SHARP_){
var or__4160__auto__ = (p1__4539_SHARP_ == null);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__4539_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return line;
}
})();
var G__4555 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__4555__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__4555,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__4555);
var G__4555__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__4555__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__4555__$1);
var G__4555__$3 = (cljs.core.truth_((function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var and__4149__auto__ = source__$1;
if(cljs.core.truth_(and__4149__auto__)){
return method;
} else {
return and__4149__auto__;
}
}
})())?cljs.core.assoc.call(null,G__4555__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4160__auto__ = fn;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__4555__$2);
var G__4555__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__4555__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__4555__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__4555__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__4555__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4544__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__4559){
var map__4560 = p__4559;
var map__4560__$1 = cljs.core.__destructure_map.call(null,map__4560);
var triage_data = map__4560__$1;
var phase = cljs.core.get.call(null,map__4560__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__4560__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__4560__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__4560__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__4560__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__4560__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__4560__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__4560__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = source;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4160__auto__ = line;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4160__auto__ = class$;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__4561 = phase;
var G__4561__$1 = (((G__4561 instanceof cljs.core.Keyword))?G__4561.fqn:null);
switch (G__4561__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__4562_4571 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__4563_4572 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__4564_4573 = true;
var _STAR_print_fn_STAR__temp_val__4565_4574 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__4564_4573);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__4565_4574);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__4557_SHARP_){
return cljs.core.dissoc.call(null,p1__4557_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__4563_4572);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__4562_4571);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4702__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__4566_4575 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__4567_4576 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__4568_4577 = true;
var _STAR_print_fn_STAR__temp_val__4569_4578 = (function (x__4703__auto__){
return sb__4702__auto__.append(x__4703__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__4568_4577);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__4569_4578);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__4558_SHARP_){
return cljs.core.dissoc.call(null,p1__4558_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__4567_4576);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__4566_4575);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4702__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4561__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
