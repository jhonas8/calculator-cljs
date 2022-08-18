(ns app.lines
  (:require [clojure.core]
            [app.methods :as m]))

(defn firstLine [display, acc]
  [{:text "C" :color "#000" :bgcolor "#A5A5A5" :onpress #(m/clear display acc)}
   {:text "+/-" :color "#000" :bgcolor "#A5A5A5" :onpress #(m/signal-inversion display)}
   {:text "%" :color "#000" :bgcolor "#A5A5A5" :onpress #(m/percentage display)}
   {:text "/" :color "#ffff" :bgcolor "#FE9500" :onpress #(m/division display acc)}])
(defn secondLine [display, acc]
  [{:text "7" :color "#ffff" :bgcolor "#333333" :onpress #(m/enter-value display 7)}
   {:text "8" :color "#ffff" :bgcolor "#333333" :onpress #(m/enter-value display 8)}
   {:text "9" :color "#ffff" :bgcolor "#333333" :onpress #(m/enter-value display 9)}
   {:text "x" :color "#ffff" :bgcolor "#FE9500" :onpress #(m/multiplication display acc)}])
(defn thirdLine [display, acc]
  [{:text "4" :color "#ffff" :bgcolor "#333333" :onpress #(m/enter-value display 4)}
   {:text "5" :color "#ffff" :bgcolor "#333333" :onpress #(m/enter-value display 5)}
   {:text "6" :color "#ffff" :bgcolor "#333333" :onpress #(m/enter-value display 6)}
   {:text "-" :color "#ffff" :bgcolor "#FE9500" :onpress #(m/subtraction display acc)}])
(defn fourthLine [display, acc]
  [{:text "1" :color "#ffff" :bgcolor "#333333" :onpress #(m/enter-value display 1)}
   {:text "2" :color "#ffff" :bgcolor "#333333" :onpress #(m/enter-value display 2)}
   {:text "3" :color "#ffff" :bgcolor "#333333" :onpress #(m/enter-value display 3)}
   {:text "+" :color "#ffff" :bgcolor "#FE9500" :onpress #(m/addition display acc)}])
(defn fifthLine [display, acc]
  [{:text "0" :color "#ffff" :bgcolor "#333333" :flex 2 :onpress #(m/enter-value display 0)}
   {:text "." :color "#ffff" :bgcolor "#333333" :onpress #(swap! display + ".")}
   {:text "=" :color "#ffff" :bgcolor "#FE9500" :onpress #(reset! display (str @acc))}])