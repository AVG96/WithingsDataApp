import React, { Component } from "react";

class SleepData extends Component {
  state = {};
  render() {
    return (
      <div>
        <h4 className="m-4">Unimaton Data</h4>
        <ul>
          {this.props.saatuUniData.map(d => (
            <li key={d.id}>
              {d.date},<br />
              {"Sleepscore: " + d.data.sleep_score},<br />
              {"Lightsleep Duration (in seconds): " + d.data.lightsleepduration}
              ,
              <br />{" "}
              {"Deepsleep Duration (in seconds): " + d.data.deepsleepduration},
              <br />
              {"REM Sleep Duration (in seconds): " + d.data.remsleepduration},
              <br />
              {"Duration to Sleep (in seconds): " + d.data.durationtosleep},
              <br />
              {"Wake Up Duration (in seconds): " + d.data.wakeupduration},<br />
              {"Wake Up Count: " + d.data.wakeupcount},<br />
              {"Duration to Wake Up (in seconds): " + d.data.durationtowakeup},
              <br />
              {"Average Heart Rate: " + d.data.hr_average},<br />
              {"Minimum Heart Rate: " + d.data.hr_min},<br />
              {"Maximum Heart Rate: " + d.data.hr_max},<br />
              {"Average Respiration Rate: " + d.data.rr_average},<br />
              {"Minimum Respiration Rate: " + d.data.rr_min},<br />
              {"Maximum Respiration Rate: " + d.data.rr_max},<br />
              {"Intensity of Breathing Disturbances: " +
                d.data.breathing_disturbances_intensity}
              ,<br /> {"Total Snoring Time: " + d.data.snoring},<br />
              {"Number of Snoring Episodes of at Least 1 Minute: " +
                d.data.snoringepisodecount}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SleepData;
