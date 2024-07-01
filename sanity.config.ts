import { visionTool } from "@sanity/vision"
import { structureTool } from "sanity/structure"
import { schemaTypes } from "./sanity/schemaTypes"
import { defineConfig } from "sanity"


export default defineConfig({
name: "default",
title: "blog-uncommon",


projectId: "3b981aq7",
dataset: "production",

plugins: [structureTool(), visionTool()],
schema: {
  types: schemaTypes,
},
})