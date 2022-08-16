import {
    onSourceLoad,
    onKrellReload,
} from './krell_repl.js';

var main = 'app.core';

function getIn(obj, xs) {
    if(obj == null) {
        return null;
    } else if(xs.length === 0) {
        return obj;
    } else {
        return getIn(obj[xs[0]], xs.slice(1));
    }
}

function getMainFn(ns) {
    let xs = ns.split(".").concat(["_main"]),
        fn = getIn(global, xs);
    if(fn) {
        return fn;
    } else {
        throw new Error("Could not find -main fn in namespace " + ns);
    }
}

function krellUpdateRoot(cb) {
    let path = goog.debugLoader_.getPathFromDeps_(main);
    onSourceLoad(path, function () {
        cb((props) => {
            return getMainFn(main)(props);
        });
    });
    global.CLOSURE_UNCOMPILED_DEFINES = {"cljs.core._STAR_target_STAR_":"bundle"};
    
    goog.require(main);
}

module.exports = {
    krellUpdateRoot: krellUpdateRoot,
    onKrellReload: onKrellReload
};
