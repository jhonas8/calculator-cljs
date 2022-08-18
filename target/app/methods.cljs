(ns app.methods
  (:require [clojure.string :as clstr]))

(defn clear-display [display] (js/parseFloat (reset! display "0")))

(defn enter-value
  [display, value]
  (if (identical? @display "0") (reset! display (str value)) (swap! display + (str value))))

(defn addition
  [display acc]
  (swap! acc + (js/parseFloat @display) (clear-display display)))

(defn subtraction
  [display acc]
  (if (== @acc 0)
    (reset! acc (js/parseFloat @display) (clear-display display))
    (swap! acc - (js/parseFloat @display) (clear-display display))))

(defn multiplication
  [display acc]
  (if (== @acc 0)
    (reset! acc (js/parseFloat @display) (clear-display display))
    (swap! acc * (js/parseFloat @display) (+ 1 (clear-display display)))))

(defn division
  [display acc]
  (if (== @acc 0)
    (reset! acc (js/parseFloat @display) (clear-display display))
    (if (identical? @display "0")
      (reset! display "Can't divide by 0")
      (reset! acc (/ @acc (js/parseFloat @display)) (clear-display display)))))

(defn signal-inversion
  [display]
  (if (identical? @display "0")
    (reset! display "-")
    (if (clstr/includes? @display "-")
      (let [value @display]
        (reset! display (clstr/replace value "-" "")))
      (reset! display (str "-" @display)))))

(defn percentage
  [display]
  reset! display
  (str (/ (js/parseFloat @display) 100)))

(defn clear 
  [display acc]
  (if (identical? @display "0") (reset! acc 0) (reset! display "0")))