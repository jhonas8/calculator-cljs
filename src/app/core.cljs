(ns app.core
  (:require [reagent.core :as r]
            [app.ui :as ui]
            [app.components :as c]
            [app.lines :as l]))

(defn app []
  (let [display "0"]
    (let [remaingValue 0]
      [ui/view {:style {:background-color "#000"
                        :height "100%"
                        :width "100%"
                        :color "#ffff"
                        :display "flex"
                        :flex-direction "column-reverse"}}
       [ui/view {:style {:display "flex"
                         :flex-direction "column-reverse"}}
        [c/buttonLine (l/fifthLine display)]
        [c/buttonLine (l/fourthLine display)]
        [c/buttonLine (l/thirdLine display)]
        [c/buttonLine (l/secondLine display)]
        [c/buttonLine (l/firstLine display)]]
       [c/calculatorDisplay display]])))

(defn ^:export -main [& args]
  (r/as-element [app]))