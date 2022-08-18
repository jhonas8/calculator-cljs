(ns app.ui
  (:require [reagent.core :as r]
            [react-native :as rn]))

(defn adapt [class]
  (r/adapt-react-class class))

(def view
  (adapt rn/View))

(def scroll-view
  (adapt rn/ScrollView))

(def text
  (adapt rn/Text))

(def safe-area-view
  (adapt rn/SafeAreaView))

(def touchable-opacity
  (adapt rn/TouchableOpacity))
