// Compiled by ClojureScript 1.10.844 {:target :nodejs, :nodejs-rt false}
goog.provide('app.ui');
goog.require('cljs.core');
goog.require('reagent.core');
app.ui.node$module$react_native = require('react-native');
app.ui.adapt = (function app$ui$adapt(class$){
return reagent.core.adapt_react_class.call(null,class$);
});
app.ui.view = app.ui.adapt.call(null,app.ui.node$module$react_native.View);
app.ui.scroll_view = app.ui.adapt.call(null,app.ui.node$module$react_native.ScrollView);
app.ui.text = app.ui.adapt.call(null,app.ui.node$module$react_native.Text);
app.ui.safe_area_view = app.ui.adapt.call(null,app.ui.node$module$react_native.SafeAreaView);
app.ui.touchable_opacity = app.ui.adapt.call(null,app.ui.node$module$react_native.TouchableOpacity);

//# sourceMappingURL=ui.js.map
