import "G:/CSharpDev/work/scixing-doc/scixing-doc/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "G:/CSharpDev/work/scixing-doc/scixing-doc/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "G:/CSharpDev/work/scixing-doc/scixing-doc/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "G:/CSharpDev/work/scixing-doc/scixing-doc/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "G:/CSharpDev/work/scixing-doc/scixing-doc/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "G:/CSharpDev/work/scixing-doc/scixing-doc/node_modules/@vuepress/highlighter-helper/lib/client/composables/collapsedLines.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
