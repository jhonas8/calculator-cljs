(ns app.lines
  (:require [reagent.core :as r]
            [cuerdas.core :as str]))

(defn firstLine [display, acc]
  [{:text "C" :color "#000" :bgcolor "#A5A5A5" :onpress #(reset! display "0" (reset! acc 0))}
   {:text "+/-" :color "#000" :bgcolor "#A5A5A5" :onpress #(println "pressed")}
   {:text "%" :color "#000" :bgcolor "#A5A5A5" :onpress #(println "pressed")}
   {:text "/" :color "#ffff" :bgcolor "#FE9500" :onpress #(println "pressed")}])
(defn secondLine [display, acc]
  [{:text "7" :color "#ffff" :bgcolor "#333333" :onpress #(if (identical? @display "0") (reset! display "7") (swap! display + "7"))}
   {:text "8" :color "#ffff" :bgcolor "#333333" :onpress #(if (identical? @display "0") (reset! display "8") (swap! display + "8"))}
   {:text "9" :color "#ffff" :bgcolor "#333333" :onpress #(if (identical? @display "0") (reset! display "9") (swap! display + "9"))}
   {:text "x" :color "#ffff" :bgcolor "#FE9500" :onpress #(println "pressed")}]) 
(defn thirdLine [display, acc]
  [{:text "4" :color "#ffff" :bgcolor "#333333" :onpress #(if (identical? @display "0") (reset! display "4") (swap! display + "4"))}
   {:text "5" :color "#ffff" :bgcolor "#333333" :onpress #(if (identical? @display "0") (reset! display "5") (swap! display + "5"))}
   {:text "6" :color "#ffff" :bgcolor "#333333" :onpress #(if (identical? @display "0") (reset! display "6") (swap! display + "6"))}
   {:text "-" :color "#ffff" :bgcolor "#FE9500" :onpress #(println "pressed")}])
(defn fourthLine [display, acc]
  [{:text "3" :color "#ffff" :bgcolor "#333333" :onpress #(if (identical? @display "0") (reset! display "3") (swap! display + "3"))}
   {:text "2" :color "#ffff" :bgcolor "#333333" :onpress #(if (identical? @display "0") (reset! display "2") (swap! display + "2"))}
   {:text "1" :color "#ffff" :bgcolor "#333333" :onpress #(if (identical? @display "0") (reset! display "1") (swap! display + "1"))}
   {:text "+" :color "#ffff" :bgcolor "#FE9500" :onpress #(swap! acc + 1.1)}])
(defn fifthLine [display, acc]
  [{:text "0" :color "#ffff" :bgcolor "#333333" :flex 2 :onpress #(if (identical? @display "0") (reset! display "0") (swap! display + "0"))}
   {:text "." :color "#ffff" :bgcolor "#333333" :onpress #(swap! display +".")}
   {:text "=" :color "#ffff" :bgcolor "#FE9500" :onpress #(reset! display (str @acc))}])