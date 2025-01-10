/*
 * This file is part of the xPack project (http://xpack.github.io).
 * Copyright (c) 2024 Liviu Ionescu. All rights reserved.
 *
 * Permission to use, copy, modify, and/or distribute this software
 * for any purpose is hereby granted, under the terms of the MIT license.
 *
 * If a copy of the license was not distributed with this file, it can
 * be obtained from https://opensource.org/licenses/MIT/.
 */

import type {SidebarConfig} from '@docusaurus/plugin-content-docs';

import appTools from './tools'

function itemsOf(tools) {
  return tools.map((tool) => {
    return {
      type: 'link',
      label: tool.appName,
      href: 'https://xpack-dev-tools.github.io/' + tool.appLcName + '-xpack',
    }
  })
}

const toolsSidebar: SidebarConfig = [
    {
      type: 'doc',
      label: 'Tools',
      id: 'tools/index'
    },
    {
      type: 'category',
      label: 'Main Tools',
      collapsed: false,
      items: itemsOf(appTools.mainTools)
    },
    {
      type: 'category',
      label: 'Supplementary Tools',
      collapsed: true,
      items: itemsOf(appTools.supplementaryTools)
    },
  ]
;

export default toolsSidebar;
