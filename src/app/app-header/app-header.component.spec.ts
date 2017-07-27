import {TestBed} from "@angular/core/testing";
import {AppHeaderComponent} from "./app-header.component";

describe("Header Component Unit Testing",()=>{

  beforeEach(()=>{
    {
      TestBed.configureTestingModule({
        declarations:[AppHeaderComponent]
      })
      this.fixture = TestBed.createComponent(AppHeaderComponent);
      this.hdrObj = this.fixture.debugElement.componentInstance;
    }})

  it("Should Create instance of Header Cpmponent",()=>{
    expect(this.hdrObj).toBeTruthy();
  })

  it("Should Verify cmpHeading Data",()=>{
    expect(this.hdrObj.cmpHeading).toEqual("Shopping Cart");
  })
})
