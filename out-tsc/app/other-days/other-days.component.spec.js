import { async, TestBed } from '@angular/core/testing';
import { OtherDaysComponent } from './other-days.component';
describe('OtherDaysComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [OtherDaysComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(OtherDaysComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/junior/workspace/weather-app/src/app/other-days/other-days.component.spec.js.map