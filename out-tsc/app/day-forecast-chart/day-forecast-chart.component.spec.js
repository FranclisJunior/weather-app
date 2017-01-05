import { async, TestBed } from '@angular/core/testing';
import { DayForecastChartComponent } from './day-forecast-chart.component';
describe('DayForecastChartComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DayForecastChartComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DayForecastChartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/junior/workspace/weather-app/src/app/day-forecast-chart/day-forecast-chart.component.spec.js.map