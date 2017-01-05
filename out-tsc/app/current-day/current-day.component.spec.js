import { async, TestBed } from '@angular/core/testing';
import { CurrentDayComponent } from './current-day.component';
describe('CurrentDayComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CurrentDayComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CurrentDayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/junior/workspace/weather-app/src/app/current-day/current-day.component.spec.js.map