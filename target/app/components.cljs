(ns app.components
  (:require [reagent.core :as r]
            [app.ui :as ui]))

(defn calculatorButton 
  ([text color bgcolor]
   [ui/touchable-opacity
    {:style {:align-items "center"
             :justify-content "center"
             :display "flex"
             :text-align "center"
             :margin 5
             :width 80
             :height 80
             :border-radius 50
             :background-color bgcolor}}
    [ui/text {:style {:font-size 30
                      :font-weight "bold"
                      :color color}} text]])
  ([text color bgcolor flex]
   [ui/touchable-opacity
    {:style {:align-items "center"
             :justify-content "center"
             :display "flex"
             :text-align "center"
             :margin 5
             :width 80
             :height 80
             :border-radius 50
             :background-color bgcolor
             :flex flex}}
    [ui/text {:style {:font-size 30
                      :color color
                      :font-family "Helvetica"}} text]])
  ([text color bgcolor flex onpress]
   [ui/touchable-opacity
    {:style {:align-items "center"
             :justify-content "center"
             :display "flex"
             :text-align "center"
             :margin 5
             :width 80
             :height 80
             :border-radius 50
             :background-color bgcolor
             :flex flex}
     :on-press onpress} 
    [ui/text {:style {:font-size 30
                      :color color
                      :font-family "Helvetica"}} text]])
  )

(defn calculatorDisplay [value]
  [ui/safe-area-view
   [ui/view { :horizontal true }
    [ui/text {:style {:font-size 70
                      :color "#ffff"
                      :text-align "right"
                      :font-family "helvetica-light-587ebe5a59211"
                      :padding 20}} @value]]])

(defn buttonLine [buttons]
  [ui/view 
   {:style {:display "flex" :flex-direction "row" :justify-content "space-between" :align-items "center"}}
   (for [button buttons]
     ^{:key (:text button)}[calculatorButton
                            (:text button)
                            (:color button)
                            (:bgcolor button)
                            (:flex button)
                            (:onpress button)])])