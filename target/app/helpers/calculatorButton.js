// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('app.helpers.calculatorButton');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('app.ui');
app.helpers.calculatorButton.node$module$react_native = require('react-native');
app.helpers.calculatorButton._STAR_calculator_button = (function app$helpers$calculatorButton$_STAR_calculator_button(text,color,bgcolor){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.touchable_opacity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(40),new cljs.core.Keyword(null,"background-color","background-color",570434026),bgcolor], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(30),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),text], null)], null);
});
app.helpers.calculatorButton.calculator_button = (function app$helpers$calculatorButton$calculator_button(text,color,bgcolor){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.helpers.calculatorButton._STAR_calculator_button,text.call(null,color,bgcolor)], null));
});

//# sourceMappingURL=calculatorButton.js.map
