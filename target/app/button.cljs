(ns app.button
  (:require [reagent.core :as r]
            [app.ui :as ui]))

(defn *calculatorButton [text color bgcolor]
  [ui/touchable-opacity
   {:style {:align-items "center"
            :justify-content "center"
            :display "flex"
            :width 50
            :height 50
            :border-radius 40
            :background-color bgcolor}}
   [ui/text {:style {
                     :font-size 30 
                     :font-weight "bold"
                     :color color}} text]])

(defn calculatorButton [text color bgcolor] 
  (r/as-element [*calculatorButton (text color bgcolor)]))