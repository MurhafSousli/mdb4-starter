/**
 * Import this file to include only the icons you want in your main bundle
 */

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faBomb } from '@fortawesome/free-solid-svg-icons/faBomb';

// We are only using the user-astronaut icon
library.add(faBomb)

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch();