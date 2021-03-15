import Template from './template';
import { decorateSelector } from '../utils/decorate-selector';

export default new Template(
  'ember',
  'Ember',
  'https://emberjs.com/',
  /**
   * Ideally, we'd point to https://github.com/ember-cli/ember-new-output
   * but there are a few tweaks that must be addressed before then.
   *  - Auto-detection of ember-cli projects as node projects,
   *    without requiring a sandbox.config.json
   *    PR: https://github.com/codesandbox-app/codesandbox-importers/pull/16
   *  - Ember-CLI initial build chokes on empty app/styles/app.css file
   *  - A small livereload fix, for proper port detection through the CSB proxy stuff
   *    BUG: https://github.com/ember-cli/ember-cli/issues/8073
   *
   * Here is a complete diff of these changes, w.r.t. the code generated by
   * `ember new my-app`
   *
   * https://github.com/ember-cli/ember-new-output/compare/master...mike-north:master
   */
  'github/mike-north/ember-new-output',
  decorateSelector(() => '#E04E39'),
  {
    showOnHomePage: true,
    main: false,
    staticDeployment: false,
  }
);
