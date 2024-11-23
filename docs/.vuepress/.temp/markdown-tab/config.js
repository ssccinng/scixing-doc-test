import { CodeTabs } from "G:/CSharpDev/work/scixing-doc/scixing-doc/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "G:/CSharpDev/work/scixing-doc/scixing-doc/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "G:/CSharpDev/work/scixing-doc/scixing-doc/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
