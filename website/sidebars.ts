// DO NOT EDIT!
// Automatically generated from xbb-helper/templates/docusaurus/common.

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';


import toolsSidebar from './sidebars-tools.js';




/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docsSidebar: [
    {
      type: 'doc',
      id: 'getting-started/index',
      label: 'Getting Started'
    },
    {
      type: 'doc',
      id: 'install/index',
      label: 'Install Guides'
    },
    {
      type: 'doc',
      id: 'user/index',
      label: 'User\'s Guides'
    },
    {
      type: 'category',
      label: 'Contributor\'s Guides',
      link: {
        type: 'doc',
        id: 'developer/index',
      },
      items: [
        {
          type: 'doc',
          id: 'developer/install/prerequisites/index',
          label: 'Build Prerequisites'
        }
      ]
    },
    {
      type: 'doc',
      id: 'maintainer/index',
      label: 'Maintainer\'s Guides'
    },
    
    {
      type: 'doc',
      id: 'about/index',
      label: 'About'
    }
  ],
  toolsSidebar,
};

export default sidebars;
