import { async, TestBed } from '@angular/core/testing';
import { SearchCityComponent } from './search-city.component';
describe('SearchCityComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SearchCityComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SearchCityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/junior/workspace/weather-app/src/app/search-city/search-city.component.spec.js.map