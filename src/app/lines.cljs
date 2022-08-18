(ns app.lines
  (:require [clojure.core]
            [clojure.string :as clstr]))

(defn clear-display [display] (js/parseFloat (reset! display "0")))

(defn firstLine [display, acc]
  [{:text "C" :color "#000" :bgcolor "#A5A5A5" :onpress #(if (identical? @display "0") (reset! acc 0) (reset! display "0"))}
   {:text "+/-" :color "#000" :bgcolor "#A5A5A5" :onpress #(if (identical? @display "0")
                                                            (reset! display "-") 
                                                            (if (clstr/includes? @display "-")
                                                             (let [value @display]
                                                               (reset! display (clstr/replace value "-" "")))
                                                             (reset! display (str "-" @display))))}
   {:text "%" :color "#000" :bgcolor "#A5A5A5" :onpress #(reset! display
                                                                 (str (/ (js/parseFloat @display) 100)))}
   {:text "/" :color "#ffff" :bgcolor "#FE9500" :onpress #(if (== @acc 0)
                                                            (reset! acc (js/parseFloat @display) (clear-display display))
                                                            (if (identical? @display "0")
                                                              (reset! display "Can't divide by 0")
                                                              (reset! acc (/ @acc (js/parseFloat @display)) (clear-display display))))}])
(defn secondLine [display, acc]
  [{:text "7" :color "#ffff" :bgcolor "#333333" :onpress #(if (identical? @display "0") (reset! display "7") (swap! display + "7"))}
   {:text "8" :color "#ffff" :bgcolor "#333333" :onpress #(if (identical? @display "0") (reset! display "8") (swap! display + "8"))}
   {:text "9" :color "#ffff" :bgcolor "#333333" :onpress #(if (identical? @display "0") (reset! display "9") (swap! display + "9"))}
   {:text "x" :color "#ffff" :bgcolor "#FE9500" :onpress #(if (== @acc 0)
                                                            (reset! acc (js/parseFloat @display) (clear-display display))
                                                            (swap! acc * (js/parseFloat @display) (+ 1 (clear-display display))))}])
(defn thirdLine [display, acc]
  [{:text "4" :color "#ffff" :bgcolor "#333333" :onpress #(if (identical? @display "0") (reset! display "4") (swap! display + "4"))}
   {:text "5" :color "#ffff" :bgcolor "#333333" :onpress #(if (identical? @display "0") (reset! display "5") (swap! display + "5"))}
   {:text "6" :color "#ffff" :bgcolor "#333333" :onpress #(if (identical? @display "0") (reset! display "6") (swap! display + "6"))}
   {:text "-" :color "#ffff" :bgcolor "#FE9500" :onpress #(if (== @acc 0)
                                                            (reset! acc (js/parseFloat @display) (clear-display display))
                                                            (swap! acc - (js/parseFloat @display) (clear-display display)))}])
(defn fourthLine [display, acc]
  [{:text "3" :color "#ffff" :bgcolor "#333333" :onpress #(if (identical? @display "0") (reset! display "3") (swap! display + "3"))}
   {:text "2" :color "#ffff" :bgcolor "#333333" :onpress #(if (identical? @display "0") (reset! display "2") (swap! display + "2"))}
   {:text "1" :color "#ffff" :bgcolor "#333333" :onpress #(if (identical? @display "0") (reset! display "1") (swap! display + "1"))}
   {:text "+" :color "#ffff" :bgcolor "#FE9500" :onpress #(swap! acc + (js/parseFloat @display) (clear-display display))}])
(defn fifthLine [display, acc]
  [{:text "0" :color "#ffff" :bgcolor "#333333" :flex 2 :onpress #(if (identical? @display "0") (reset! display "0") (swap! display + "0"))}
   {:text "." :color "#ffff" :bgcolor "#333333" :onpress #(swap! display + ".")}
   {:text "=" :color "#ffff" :bgcolor "#FE9500" :onpress #(reset! display (str @acc))}])