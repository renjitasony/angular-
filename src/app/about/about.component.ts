import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  pid:string;
  pname:string;
  constructor(private actrouter:ActivatedRoute) { }

  ngOnInit() {
    this.pid = this.actrouter.snapshot.paramMap.get("pid");
    this.pname = this.actrouter.snapshot.paramMap.get("pname");
  }

}
