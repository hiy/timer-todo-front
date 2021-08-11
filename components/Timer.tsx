import React, { useState, useEffect } from 'react';

export type TimeRecord = {
  hours: string
  minutes: string
  seconds: string
  time: number
}

type Props = {
  isShow: boolean
  isBeingMeasured: boolean
  timeRecord: TimeRecord
  setTimeRecord: Function
}

const Timer: React.FC<Props> = (props) => {
  const [timer, setTimer] = useState<NodeJS.Timer | null>(null)

  useEffect(() => {
    if (props.isBeingMeasured) {
      update()
      start()
      return
    }

    stop();

    return () => {
      stop()
    }
  }, [props.isBeingMeasured])

  const start = () => {
    const t = setInterval(() => {
      update()
    }, 1000);

    setTimer(t)
  }

  const stop = () => {
    if (timer) clearInterval(timer);
  }

  const zeroPadding = (num: number): string => {
    return ('00' + num).slice(-2)
  }

  const update = () => {
    const time = props.timeRecord.time + 1;
    const hours = Math.floor(time / 60 / 60);
    const minutes = Math.floor(time / 60 % 60);
    const seconds = Math.floor(time % 60);
    props.timeRecord.hours = zeroPadding(hours)
    props.timeRecord.minutes = zeroPadding(minutes)
    props.timeRecord.seconds = zeroPadding(seconds)
    props.timeRecord.time = time
    props.setTimeRecord({ ...props.timeRecord });
  }

  return (
    <div>
      {props.isShow ? (
        <div>
          {props.timeRecord.hours}:
          {props.timeRecord.minutes}:
          {props.timeRecord.seconds}
        </div>
      ) : null}
    </div>
  )
}

export default Timer