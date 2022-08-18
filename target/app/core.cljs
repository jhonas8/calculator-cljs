(ns app.core
  (:require [reagent.core :as r]
            [app.ui :as ui]
            [app.components :as c]
            [app.lines :as l]
            [clojure.string]))

(defn app []
  (let [display-value (r/atom "0")]
    (let [remainingValue (r/atom 0)]
      [ui/safe-area-view {:style {:background-color "#000"
                                  :height "100%"
                                  :width "100%"
                                  :color "#ffff"
                                  :display "flex"
                                  :flex-direction "column-reverse"}}
       [ui/view {:style {:display "flex"
                         :flex-direction "column-reverse"}}
        [c/buttonLine (l/fifthLine display-value remainingValue)]
        [c/buttonLine (l/fourthLine display-value remainingValue)]
        [c/buttonLine (l/thirdLine display-value remainingValue)]
        [c/buttonLine (l/secondLine display-value remainingValue)]
        [c/buttonLine (l/firstLine display-value remainingValue)]]
       [c/calculatorDisplay display-value]])))

(defn ^:export -main [& args]
  (r/as-element [app]))