// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4qavH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe27fe52f5c48570";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8ZNvh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _shadowBuildingDrawer = require("./buildings/ShadowBuildingDrawer");
var _buildingGenerator = require("./buildings/BuildingGenerator");
var _canvas = require("./Canvas");
var _canvasDefault = parcelHelpers.interopDefault(_canvas);
var _utils = require("./utils");
var _sun = require("./Sun");
var _daytime = require("./Daytime");
let animationFrameId = 0;
const startCityAnimation = (buildingDrawer, shadowCanvas)=>{
    const width = shadowCanvas.domCanvas.width;
    const height = shadowCanvas.domCanvas.height;
    let xPosition = height > width ? 0 : 150;
    const sun = new (0, _sun.Sun)(shadowCanvas.ctx);
    const daytime = new (0, _daytime.Daytime)(width, height);
    const redrawShadows = ()=>{
        shadowCanvas.ctx.clearRect(0, 0, width, height);
        shadowCanvas.setCanvasBackground();
        daytime.setXPosition(xPosition);
        sun.setPosition(...daytime.calculateSunPosition());
        sun.draw();
        const shadowOffset = daytime.calculateShadowOffset();
        buildingDrawer.drawShadows(shadowOffset);
        xPosition++;
        if (xPosition < shadowCanvas.domCanvas.width + 150) animationFrameId = requestAnimationFrame(redrawShadows);
    };
    animationFrameId = requestAnimationFrame(redrawShadows);
};
const generate = (cityCanvas, shadowsCanvas)=>{
    const startPos = [
        10,
        100
    ];
    const buildingGenerator = new (0, _buildingGenerator.BuildingGenerator)(...startPos);
    const buildingDrawer = new (0, _shadowBuildingDrawer.ShadowBuildingDrawer)(cityCanvas.ctx, buildingGenerator);
    buildingDrawer.setOffset({
        ...buildingDrawer.offset,
        y: cityCanvas.domCanvas.height / 2
    });
    buildingDrawer.setShadowCtx(shadowsCanvas.ctx);
    buildingDrawer.setInitialColor([
        231,
        44,
        74
    ]);
    buildingDrawer.setShadowColor((0, _utils.gradientBottom));
    buildingDrawer.drawCity();
    cancelAnimationFrame(animationFrameId);
    startCityAnimation(buildingDrawer, shadowsCanvas);
};
const redraw = (canvas, shadowsCanvas)=>{
    canvas.ctx.clearRect(0, 0, canvas.domCanvas.width, canvas.domCanvas.height);
    shadowsCanvas.ctx.clearRect(0, 0, canvas.domCanvas.width, canvas.domCanvas.height);
    generate(canvas, shadowsCanvas);
};
const setDebouncedResizeListener = (callback)=>{
    let timeout = false;
    window.addEventListener("resize", ()=>{
        clearTimeout(timeout);
        timeout = setTimeout(callback, 250);
    });
};
const domContentLoaded = ()=>{
    const shadowsCanvas = new (0, _canvasDefault.default)("shadowsCanvas");
    const cityCanvas = new (0, _canvasDefault.default)("cityCanvas");
    redraw(cityCanvas, shadowsCanvas);
    const generateBtn = document.querySelector(".generate-btn");
    generateBtn.addEventListener("click", ()=>redraw(cityCanvas, shadowsCanvas));
    setDebouncedResizeListener(()=>{
        shadowsCanvas.updateSize();
        cityCanvas.updateSize();
        redraw(cityCanvas, shadowsCanvas);
    });
};
document.addEventListener("DOMContentLoaded", domContentLoaded);

},{"./buildings/ShadowBuildingDrawer":"9RgQm","./buildings/BuildingGenerator":"2MePb","./Canvas":"6YPxv","./utils":"en4he","./Sun":"4I5jH","./Daytime":"fT1NO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9RgQm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ShadowBuildingDrawer", ()=>ShadowBuildingDrawer);
var _buildingDrawer = require("./BuildingDrawer");
var _utils = require("../utils");
class ShadowBuildingDrawer extends (0, _buildingDrawer.BuildingDrawer) {
    shadowCoords = [];
    setShadowCtx(ctx) {
        this.shadowCtx = ctx;
    }
    setShadowColor(color) {
        this.shadowColor = color;
    }
    saveBuildingShadow(coords) {
        let y0 = 0;
        const shadowCoords = coords.map(([x, y], i)=>{
            if (i === 0 || i === coords.length - 1) {
                y0 = y;
                return [
                    x,
                    y
                ];
            }
            const diff = y0 - y;
            return [
                x + 20,
                diff + y0
            ];
        });
        this.shadowCoords.push(shadowCoords);
    }
    drawOneBuilding(coords) {
        super.drawOneBuilding(coords);
        this.saveBuildingShadow(coords);
    }
    setShadowOffset(coords, offset) {
        return coords.map(([x, y], i)=>{
            if (i === 0 || i === coords.length - 1) return [
                x,
                y
            ];
            return [
                x + offset,
                y
            ];
        });
    }
    drawShadows(offset) {
        this.shadowCtx.fillStyle = this.shadowColor;
        this.shadowCtx.strokeStyle = "transparent";
        this.shadowCoords.forEach((shadowCoords)=>{
            const newCoords = this.setShadowOffset(shadowCoords, offset);
            (0, _utils.drawByCoordinates)(this.shadowCtx, newCoords);
        });
    }
}

},{"./BuildingDrawer":"f1Sjb","../utils":"en4he","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f1Sjb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BuildingDrawer", ()=>BuildingDrawer);
var _colorHelper = require("../ColorHelper");
var _utils = require("../utils");
class BuildingDrawer {
    minWidth = 20;
    offset = {
        x: 0,
        y: 250
    };
    rowCount = 10;
    color;
    constructor(context, buildingGenerator){
        this.ctx = context;
        this.buildingGenerator = buildingGenerator;
        this.colorHelper = new (0, _colorHelper.ColorHelper)();
    }
    setInitialColor(color) {
        this.color = color;
    }
    setOffset(offset) {
        this.offset = offset;
    }
    setMinWidth(minWidth) {
        this.minWidth = minWidth;
    }
    getRandomOffsetX(step) {
        return Math.floor(Math.random() * this.minWidth + step * 30);
    }
    getBuildingParts(coords) {
        const frontSide = coords.map(([x, y])=>[
                x - 10,
                y + 5
            ]);
        const asides = frontSide.map(([x, y], i)=>{
            return [
                [
                    x,
                    y
                ],
                coords[i],
                coords[i + 1] ? coords[i + 1] : coords[0],
                frontSide[i + 1] ? frontSide[i + 1] : frontSide[0], 
            ];
        });
        return {
            backSide: coords,
            frontSide,
            asides
        };
    }
    drawOneBuilding(coords) {
        const { frontSide , asides  } = this.getBuildingParts(coords);
        //draw asides
        this.ctx.fillStyle = this.colorHelper.arrToHsl(this.colorHelper.darken(...this.color));
        asides.forEach((rectCoords)=>{
            (0, _utils.drawByCoordinates)(this.ctx, rectCoords);
        });
        //draw front side
        this.ctx.fillStyle = this.colorHelper.arrToHsl(this.color);
        (0, _utils.drawByCoordinates)(this.ctx, frontSide);
    }
    addOffsetToCoords(buildingCoords, offset) {
        const result = [];
        buildingCoords.forEach(([x, y])=>{
            result.push([
                x + offset.x,
                y + offset.y
            ]);
        });
        return result;
    }
    getBuildingType(rowIndex) {
        if (rowIndex > this.rowCount / 3) return Math.floor(Math.random() * 3 + 3); // [3; 5]
        return Math.floor(Math.random() * 5 + 3); // [3; 7]
    }
    generateRowBuildings(offsetX, rowIndex) {
        const type = this.getBuildingType(rowIndex);
        let buildingCoords = this.buildingGenerator.generateBuilding(type);
        offsetX += this.getRandomOffsetX(rowIndex);
        buildingCoords = this.addOffsetToCoords(buildingCoords, {
            x: this.offset.x + offsetX,
            y: this.offset.y
        });
        offsetX += buildingCoords[buildingCoords.length - 1][0] - buildingCoords[0][0];
        return {
            buildingCoords,
            offsetX
        };
    }
    drawBuildingsRow(rowIndex) {
        this.ctx.strokeStyle = "transparent";
        let offsetX = 0;
        let buildingCoords;
        while(offsetX + this.offset.x < window.innerWidth){
            ({ offsetX , buildingCoords  } = this.generateRowBuildings(offsetX, rowIndex));
            this.drawOneBuilding(buildingCoords);
        }
    }
    drawCity() {
        for(let i = this.rowCount - 1; i >= 0; i--){
            this.buildingGenerator.setHeight(Math.floor(Math.random() * 12 * i + 30));
            const offsetX = Math.floor(Math.random() * 100 - 200);
            this.setOffset({
                x: offsetX,
                y: this.offset.y + 5
            });
            this.drawBuildingsRow(i);
            this.color = this.colorHelper.darken(...this.color);
        }
    }
}

},{"../ColorHelper":"hBo4i","../utils":"en4he","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBo4i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorHelper", ()=>ColorHelper);
class ColorHelper {
    darken(h, s, l) {
        return [
            h,
            Math.ceil(s * 1.1),
            Math.ceil(l * 0.9)
        ];
    }
    arrToHsl(arr) {
        return `hsl(${arr[0]}, ${arr[1]}%, ${arr[2]}%)`;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"en4he":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gradientBottom", ()=>gradientBottom);
parcelHelpers.export(exports, "drawByCoordinates", ()=>drawByCoordinates);
const gradientBottom = "hsl(5, 100%, 75%)";
const drawByCoordinates = (ctx, coords)=>{
    ctx.beginPath();
    coords.forEach(([x, y])=>{
        ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2MePb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BuildingGenerator", ()=>BuildingGenerator);
var _buildingTypes = require("./BuildingTypes");
class BuildingGenerator {
    minWidth = 20;
    height = 100;
    constructor(startX, startY){
        this.startX = startX;
        this.startY = startY;
    }
    setHeight(height) {
        this.height = height;
    }
    generateBuilding(type) {
        (0, _buildingTypes.CommonBuilding).defineStartPos(this.startX, this.startY);
        (0, _buildingTypes.CommonBuilding).defineMinWidth(this.minWidth);
        (0, _buildingTypes.CommonBuilding).setHeight(this.height);
        switch(type){
            case 3:
                return (0, _buildingTypes.Building3Sides).generateBuilding();
            case 4:
                return (0, _buildingTypes.Building4Sides).generateBuilding();
            case 5:
                return (0, _buildingTypes.Building5Sides).generateBuilding();
            case 6:
                return (0, _buildingTypes.Building3SidesWide).generateBuilding();
            case 7:
                return (0, _buildingTypes.Building5SidesShort).generateBuilding();
            default:
                return (0, _buildingTypes.Building4Sides).generateBuilding();
        }
    }
}

},{"./BuildingTypes":"i2aDE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i2aDE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CommonBuilding", ()=>CommonBuilding);
parcelHelpers.export(exports, "Building3Sides", ()=>Building3Sides);
parcelHelpers.export(exports, "Building4Sides", ()=>Building4Sides);
parcelHelpers.export(exports, "Building5Sides", ()=>Building5Sides);
parcelHelpers.export(exports, "Building3SidesWide", ()=>Building3SidesWide);
parcelHelpers.export(exports, "Building5SidesShort", ()=>Building5SidesShort);
class CommonBuilding {
    static sideCount = 3;
    static minWidth;
    static height;
    static startX;
    static startY;
    static defineStartPos(startX, startY) {
        this.startX = startX;
        this.startY = startY;
    }
    static defineMinWidth(minWidth) {
        this.minWidth = minWidth;
    }
    static setHeight(height) {
        this.height = height;
    }
    static getNextCoordinates(i, x0, y0) {
        return [
            x0,
            y0
        ];
    }
    static generateBuilding() {
        let current = [
            this.startX,
            this.startY
        ];
        let coordinates = [
            current
        ];
        for(let i = 0; i < this.sideCount; i++){
            current = this.getNextCoordinates(i, ...current);
            coordinates.push(current);
        }
        return coordinates;
    }
}
class Building3Sides extends CommonBuilding {
    static sideCount = 3;
    static getNextCoordinates(i, x0, y0) {
        let x = Math.floor(Math.random() * 30 + this.minWidth + x0);
        let y = i === this.sideCount - 1 ? this.startY : -Math.floor(Math.random() * 30 + this.height - 30);
        if (i === 0 || i === this.sideCount - 1) x = x0;
        return [
            x,
            y
        ];
    }
}
class Building4Sides extends CommonBuilding {
    static sideCount = 4;
    static getNextCoordinates(i, x0, y0) {
        //TODO: refactor, make different height
        let x;
        if (i === 1 || i === 2) x = x0 + 20;
        //TODO: magic numbers
        let y = i === 1 ? y0 - 20 : -Math.floor(Math.random() * 30 + this.height - 30);
        if (i === 2) y = y0;
        if (i === this.sideCount - 1) y = this.startY;
        if (i === 0 || i === this.sideCount - 1) x = x0;
        return [
            x,
            y
        ];
    }
}
class Building5Sides extends CommonBuilding {
    static sideCount = 5;
    static getNextCoordinates(i, x0, y0) {
        let x = Math.floor(Math.random() * 30 + this.minWidth + x0);
        let y = i === this.sideCount - 1 ? this.startY : -Math.floor(Math.random() * 30 + this.height - 30);
        if (i % 2 === 0) x = x0;
        if (i % 2 === 1) y = y0;
        return [
            x,
            y
        ];
    }
}
class Building3SidesWide extends CommonBuilding {
    static sideCount = 3;
    static getNextCoordinates(i, x0, y0) {
        let x = Math.floor(Math.random() * 30 + 150 + x0);
        let y = i === this.sideCount - 1 ? this.startY : y0;
        if (i === 0) y = -Math.floor(Math.random() * 30 + this.height - 60);
        if (i === 0 || i === this.sideCount - 1) x = x0;
        return [
            x,
            y
        ];
    }
}
class Building5SidesShort extends CommonBuilding {
    static sideCount = 5;
    static getNextCoordinates(i, x0, y0) {
        let x = x0 + 35;
        let y = i === this.sideCount - 1 ? this.startY : y0 - Math.floor(Math.random() * 30 + this.height);
        if (i % 2 === 0) x = x0;
        if (i % 2 === 1) y = y0;
        return [
            x,
            y
        ];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6YPxv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("./utils");
class Canvas {
    constructor(id){
        this.domCanvas = document.getElementById(id);
        this.domCanvas.width = window.innerWidth;
        this.domCanvas.height = window.innerHeight;
        this.ctx = this.domCanvas.getContext("2d");
    }
    updateSize() {
        this.domCanvas.width = window.innerWidth;
        this.domCanvas.height = window.innerHeight;
    }
    setCanvasBackground() {
        const grd = this.ctx.createLinearGradient(0, 0, 0, this.domCanvas.height);
        grd.addColorStop(0, "#80deea");
        grd.addColorStop(0.37, "#ffccbc");
        grd.addColorStop(1, (0, _utils.gradientBottom));
        this.ctx.fillStyle = grd;
        this.ctx.fillRect(0, 0, this.domCanvas.width, this.domCanvas.height);
    }
}
exports.default = Canvas;

},{"./utils":"en4he","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4I5jH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Sun", ()=>Sun);
class Sun {
    constructor(ctx){
        this.ctx = ctx;
        this.x = 0;
        this.y = 0;
    }
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        this.ctx.fillStyle = "#ffffe3";
        this.ctx.strokeStyle = "#ffffe3";
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 25, 0, 2 * Math.PI);
        this.ctx.stroke();
        this.ctx.shadowColor = "#fffd9e";
        this.ctx.shadowBlur = 50;
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fT1NO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Daytime", ()=>Daytime);
class Daytime {
    constructor(xMax, yMax){
        this.xMax = xMax;
        this.yMax = yMax;
        this.radius = Math.round(xMax / 2);
        let x = Math.round(xMax / 2);
        //by circle formula
        let y = Math.sqrt(this.radius ** 2 - (0 - x) ** 2) - 100 + yMax;
        //for small screens
        if (xMax < yMax) {
            y = this.radius;
            this.radius += 100;
        }
        //50 - the sun will be below the top of the screen
        const padding = 50;
        if (this.radius > y - padding) y += this.radius - y + padding;
        this.center = {
            x,
            y
        };
        this.x = 0;
    }
    setXPosition(x) {
        this.x = x;
    }
    calculateSunPosition() {
        let y = -Math.sqrt(this.radius ** 2 - (this.x - this.center.x) ** 2) + this.center.y;
        if (y > this.yMax / 2) return [];
        return [
            this.x,
            y
        ];
    }
    calculateShadowOffset() {
        return (this.center.x - this.x) * 0.2;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4qavH","8ZNvh"], "8ZNvh", "parcelRequireb4a8")

//# sourceMappingURL=index.f5c48570.js.map
