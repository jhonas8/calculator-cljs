(ns app.lines)
(defn firstLine [display]
  [{:text "C" :color "#000" :bgcolor "#A5A5A5"}
   {:text "+/-" :color "#000" :bgcolor "#A5A5A5"}
   {:text "%" :color "#000" :bgcolor "#A5A5A5"}
   {:text "/" :color "#ffff" :bgcolor "#FE9500" :onpress (fn [](reset! display "/"))}])
(defn secondLine [display]
  [{:text "7" :color "#ffff" :bgcolor "#333333"}
   {:text "8" :color "#ffff" :bgcolor "#333333"}
   {:text "9" :color "#ffff" :bgcolor "#333333"}
   {:text "x" :color "#ffff" :bgcolor "#FE9500"}])
(defn thirdLine [display]
  [{:text "4" :color "#ffff" :bgcolor "#333333"}
   {:text "5" :color "#ffff" :bgcolor "#333333"}
   {:text "6" :color "#ffff" :bgcolor "#333333"}
   {:text "-" :color "#ffff" :bgcolor "#FE9500"}])
(defn fourthLine [display]
  [{:text "3" :color "#ffff" :bgcolor "#333333"}
   {:text "2" :color "#ffff" :bgcolor "#333333"}
   {:text "1" :color "#ffff" :bgcolor "#333333"}
   {:text "+" :color "#ffff" :bgcolor "#FE9500"}])
(defn fifthLine [display]
  [{:text "0" :color "#ffff" :bgcolor "#333333" :flex 2}
   {:text "." :color "#ffff" :bgcolor "#333333"}
   {:text "=" :color "#ffff" :bgcolor "#FE9500"}])