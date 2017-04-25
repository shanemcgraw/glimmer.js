import Application from '@glimmer/application';
import { Simple } from '@glimmer/runtime';
import { AppBuilder, AppBuilderOptions } from '@glimmer/application-test-helpers';
import ComponentManager from '../../src/component-manager';

export class TestApplication extends Application {
  rootElement: Simple.Element;
}

export default function buildApp(appName: string = 'test-app', options: AppBuilderOptions = {}) {
  options.ApplicationClass = options.ApplicationClass || TestApplication;
  options.ComponentManager = options.ComponentManager || ComponentManager;
  return new AppBuilder(appName, options);
}
