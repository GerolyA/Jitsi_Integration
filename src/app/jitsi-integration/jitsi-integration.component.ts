import { Component, OnInit } from '@angular/core';
declare const JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-jitsi-integration',
  templateUrl: './jitsi-integration.component.html',
  styleUrls: ['./jitsi-integration.component.css']
})
export class JitsiIntegrationComponent implements OnInit {

  meetingModalVisibility: boolean = false;

  domain: string = 'meet.jit.si';
  options: any;
  api: any;
  userName: string = "TesztElek";

  ngOnInit(): void {

    this.options = {
      roomName: 'JitsiMeetAPIExample',
      width: "90vw",
      height: "50vh",
      parentNode: document.querySelector('#meet'),
      lang: 'hu',
      userInfo: {
        displayName: this.userName,

      }
    };
  }

  startMeeting() {
    this.api = new JitsiMeetExternalAPI(this.domain, this.options);
    this.meetingModalVisibility = true;
    this.api.executeCommand("avatarUrl", "");
  
  }

  apiCommand(command: string, arg?: string) {
    this.api.executeCommand(command, arg);
    console.log(this.api);
  }

  stopMeeting() {
    this.api.dispose();
    this.meetingModalVisibility = false;
  }
}
