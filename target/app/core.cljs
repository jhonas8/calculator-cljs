(ns app.core
  (:require [reagent.core :as r]
            [app.ui :as ui]
            [app.components :as c]
            [app.lines :as l]))

(defn app []
  (let [value "0"]
    [ui/view {:style {:background-color "#000"
                      :height "100%"
                      :width "100%"
                      :color "#ffff"
                      :display "flex"
                      :flex-direction "column-reverse"}} 
     [ui/view {:style {:display "flex"
                       :flex-direction "column-reverse"}}
      [c/buttonLine l/fifthLine]
      [c/buttonLine l/fourthLine]
      [c/buttonLine l/thirdLine]
      [c/buttonLine l/secondLine]
      [c/buttonLine l/firstLine]]
     [c/calculatorDisplay value]]))

(defn ^:export -main [& args]
  (r/as-element [app]))