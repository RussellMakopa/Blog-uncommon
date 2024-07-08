'use client'

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';

import MyLogo from './app/components/StudioLogo';
// import StudioNavbar from './components/StudioNavbar'; // Import your custom navbar

export default defineConfig({
  basePath: '/blog/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  studio: {
    components: {
      logo: MyLogo,
    },
  },
  // Import global CSS file for consistent styling
  styles: [
    {
      name: 'custom-styles',
      path: './app/globals.css'
    }
  ],
});
