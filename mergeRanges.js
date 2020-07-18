function mergeMeeting(meetingList) {
  mergedMeetingList = [];
  for (let i = 0; i < meetingList.length; i++) {
    if (mergedMeetingList.indexOf(meetingList[i].startTime) === -1) {
      mergedMeetingList[meetingList[i].startTime] = [
        meetingList[i].startTime,
        "startTime",
        i,
      ];
    }
    if (mergedMeetingList.indexOf(meetingList[i].endTime) === -1) {
      mergedMeetingList[meetingList[i].endTime] = [
        meetingList[i].endTime,
        "endTime",
        i,
      ];
    }
  }
  console.log(mergedMeetingList);
}

mergeMeeting([
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
]);
