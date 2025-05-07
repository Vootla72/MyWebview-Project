import React, { useState, useCallback, useRef, useEffect } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

export const Test = () => {
  const [sessionTimer, setSessionTimer] = useState(10);
  const [breakTimer, setBreakTimer] = useState(5);
  const [sessionTimerActive, setSessionTimerActive] = useState(true);

  const sessionTimerId = useRef(null);
  const breakTimerId = useRef(null);


  const startBreakTimer = useCallback(() => {
    breakTimerId.current = setInterval(()=> {
        setBreakTimer((prev)=> prev-1)
    }, 500)
},[])

  const startSessionTimer = useCallback(() => {
    sessionTimerId.current = setInterval(()=> {
        setSessionTimer((prev)=> prev-1)
    }, 500)
},[])


  useEffect(() => {
    if (sessionTimer == 0) {

        clearInterval(sessionTimerId.current);
        sessionTimerId.current = null;
        setSessionTimerActive(false);

      
      startBreakTimer();


    }
    else if(sessionTimer<0){
        setSessionTimer(10);
    }
  }, [sessionTimer, startBreakTimer]);


  useEffect(() => {
    if (breakTimer == 0) {
        clearInterval(breakTimerId.current);
        breakTimerId.current = null;
        setSessionTimerActive(true);

      startSessionTimer()
    }
    else if(breakTimer<0){
        setBreakTimer(5);
    }
  }, [breakTimer, startSessionTimer]);




  const handleSessionTimer = useCallback(() => {
    if(sessionTimerActive && !sessionTimerId.current){
        startSessionTimer();
    }
    else if(!sessionTimerActive && !breakTimerId.current){
        startBreakTimer()
    }

  }, [sessionTimer, startSessionTimer,startBreakTimer ]);

  

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleSessionTimer}>
          Session Timer {sessionTimer}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          Break Timer {breakTimer}
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: 200,
    height: 200,
    backgroundColor: "grey",
    margin: 20,
  },
});
