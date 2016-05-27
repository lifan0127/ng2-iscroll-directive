import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2IscrollDirectiveAppComponent } from '../app/ng2-iscroll-directive.component';

beforeEachProviders(() => [Ng2IscrollDirectiveAppComponent]);

describe('App: Ng2IscrollDirective', () => {
  it('should create the app',
      inject([Ng2IscrollDirectiveAppComponent], (app: Ng2IscrollDirectiveAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-iscroll-directive works!\'',
      inject([Ng2IscrollDirectiveAppComponent], (app: Ng2IscrollDirectiveAppComponent) => {
    expect(app.title).toEqual('ng2-iscroll-directive works!');
  }));
});
