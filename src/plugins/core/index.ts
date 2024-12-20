import type { App } from "vue";
import { __init__lang__ } from "./lang";
import { __init__helper__ } from "./helper";
import * as ScriptsSystem from "@/shared/system/scripts";
import * as ObserversPlugin from "@/plugins/observers";

export const __init__ = {
  install(app: App) {
    __init__lang__(app);
    __init__helper__(app);
    ScriptsSystem.StartAPI.__start__();
    ObserversPlugin.MainObserver.install(app);
  },
};
