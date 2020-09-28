/******/ (function(modules) { // webpackBootstrap
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest() {
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch (e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/
/******/ 	//eslint-disable-next-line no-unused-vars
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "1ec7b0aa31ff541b5afa";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "server";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/database.ts":
/*!*************************!*\
  !*** ./src/database.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default.a.config();\n\nconst connectDB = () => {\n  return new Promise((resolve, reject) => {\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Promise = global.Promise;\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on(\"error\", error => reject(error)).on(\"close\", () => console.log(\"Database connection closed.\")).once(\"open\", () => resolve(mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connections[0]));\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.DB_URI, {\n      useNewUrlParser: true,\n      useCreateIndex: true,\n      useUnifiedTopology: true\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (connectDB);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YWJhc2UudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UudHM/YjY4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcbmRvdGVudi5jb25maWcoKTtcblxuY29uc3QgY29ubmVjdERCID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIG1vbmdvb3NlLlByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbiAgICBtb25nb29zZS5jb25uZWN0aW9uLm9uKFwiZXJyb3JcIiwgZXJyb3IgPT4gcmVqZWN0KGVycm9yKSkub24oXCJjbG9zZVwiLCAoKSA9PiBjb25zb2xlLmxvZyhcIkRhdGFiYXNlIGNvbm5lY3Rpb24gY2xvc2VkLlwiKSkub25jZShcIm9wZW5cIiwgKCkgPT4gcmVzb2x2ZShtb25nb29zZS5jb25uZWN0aW9uc1swXSkpO1xuICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuREJfVVJJLCB7XG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/database.ts\n");

/***/ }),

/***/ "./src/graphql.ts":
/*!************************!*\
  !*** ./src/graphql.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphql/schema */ \"./src/graphql/schema.ts\");\n/* harmony import */ var _loaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loaders */ \"./src/loaders/index.ts\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/auth */ \"./src/utils/auth.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nconst graphql = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (req, res) {\n    const {\n      user\n    } = yield Object(_utils_auth__WEBPACK_IMPORTED_MODULE_2__[\"getUser\"])(req.header.authorization);\n    const AllLoaders = _loaders__WEBPACK_IMPORTED_MODULE_1__;\n    const dataloaders = Object.keys(AllLoaders).reduce((acc, loaderKey) => _objectSpread(_objectSpread({}, acc), {}, {\n      [loaderKey]: AllLoaders[loaderKey].getLoader()\n    }), {});\n    return {\n      graphiql: \"development\" !== \"production\",\n      schema: _graphql_schema__WEBPACK_IMPORTED_MODULE_0__[\"schema\"],\n      context: {\n        req,\n        res,\n        user,\n        dataloaders\n      }\n    };\n  });\n\n  return function graphql(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (graphql);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ncmFwaHFsLnRzPzI5NDIiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpOyB9IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7IGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTsgfSBmdW5jdGlvbiBfdGhyb3coZXJyKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpOyB9IF9uZXh0KHVuZGVmaW5lZCk7IH0pOyB9OyB9XG5cbmltcG9ydCB7IHNjaGVtYSB9IGZyb20gXCIuL2dyYXBocWwvc2NoZW1hXCI7XG5pbXBvcnQgKiBhcyBsb2FkZXJzIGZyb20gXCIuL2xvYWRlcnNcIjtcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tIFwiLi91dGlscy9hdXRoXCI7XG5cbmNvbnN0IGdyYXBocWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAocmVxLCByZXMpIHtcbiAgICBjb25zdCB7XG4gICAgICB1c2VyXG4gICAgfSA9IHlpZWxkIGdldFVzZXIocmVxLmhlYWRlci5hdXRob3JpemF0aW9uKTtcbiAgICBjb25zdCBBbGxMb2FkZXJzID0gbG9hZGVycztcbiAgICBjb25zdCBkYXRhbG9hZGVycyA9IE9iamVjdC5rZXlzKEFsbExvYWRlcnMpLnJlZHVjZSgoYWNjLCBsb2FkZXJLZXkpID0+IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgYWNjKSwge30sIHtcbiAgICAgIFtsb2FkZXJLZXldOiBBbGxMb2FkZXJzW2xvYWRlcktleV0uZ2V0TG9hZGVyKClcbiAgICB9KSwge30pO1xuICAgIHJldHVybiB7XG4gICAgICBncmFwaGlxbDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiLFxuICAgICAgc2NoZW1hLFxuICAgICAgY29udGV4dDoge1xuICAgICAgICByZXEsXG4gICAgICAgIHJlcyxcbiAgICAgICAgdXNlcixcbiAgICAgICAgZGF0YWxvYWRlcnNcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gZnVuY3Rpb24gZ3JhcGhxbChfeCwgX3gyKSB7XG4gICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/graphql.ts\n");

/***/ }),

/***/ "./src/graphql/MutationType.ts":
/*!*************************************!*\
  !*** ./src/graphql/MutationType.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_User_mutations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/User/mutations */ \"./src/modules/User/mutations/index.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst MutationType = new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLObjectType\"]({\n  name: \"Mutation\",\n  fields: () => _objectSpread({}, _modules_User_mutations__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (MutationType);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9NdXRhdGlvblR5cGUudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhxbC9NdXRhdGlvblR5cGUudHM/ZWNkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgR3JhcGhRTE9iamVjdFR5cGUgfSBmcm9tIFwiZ3JhcGhxbFwiO1xuaW1wb3J0IFVzZXJNdXRhdGlvbiBmcm9tIFwiLi4vbW9kdWxlcy9Vc2VyL211dGF0aW9uc1wiO1xuY29uc3QgTXV0YXRpb25UeXBlID0gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgbmFtZTogXCJNdXRhdGlvblwiLFxuICBmaWVsZHM6ICgpID0+IF9vYmplY3RTcHJlYWQoe30sIFVzZXJNdXRhdGlvbilcbn0pO1xuZXhwb3J0IGRlZmF1bHQgTXV0YXRpb25UeXBlOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/graphql/MutationType.ts\n");

/***/ }),

/***/ "./src/graphql/QueryType.ts":
/*!**********************************!*\
  !*** ./src/graphql/QueryType.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-relay */ \"graphql-relay\");\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_relay__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_User_UserType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/User/UserType */ \"./src/modules/User/UserType.ts\");\n/* harmony import */ var _modules_User_UserConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/User/UserConnection */ \"./src/modules/User/UserConnection.ts\");\n/* harmony import */ var _modules_User_UserLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/User/UserLoader */ \"./src/modules/User/UserLoader.ts\");\n/* harmony import */ var _interface_NodeInterface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interface/NodeInterface */ \"./src/interface/NodeInterface.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst QueryType = new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLObjectType\"]({\n  name: \"Query\",\n  description: \"The root of all... queries\",\n  fields: () => ({\n    node: _interface_NodeInterface__WEBPACK_IMPORTED_MODULE_5__[\"NodeField\"],\n    currentUser: {\n      type: _modules_User_UserType__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      resolve: (_, args, context) => context.user\n    },\n    getUsers: {\n      type: _modules_User_UserConnection__WEBPACK_IMPORTED_MODULE_3__[\"default\"].connectionType,\n      args: _objectSpread(_objectSpread({}, graphql_relay__WEBPACK_IMPORTED_MODULE_1__[\"connectionArgs\"]), {}, {\n        search: {\n          type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]\n        }\n      }),\n      resolve: function () {\n        var _ref = _asyncToGenerator(function* (_, args, context) {\n          return yield _modules_User_UserLoader__WEBPACK_IMPORTED_MODULE_4__[\"loadUsers\"](context, args);\n        });\n\n        return function resolve(_x, _x2, _x3) {\n          return _ref.apply(this, arguments);\n        };\n      }()\n    }\n  })\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (QueryType);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9RdWVyeVR5cGUudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhxbC9RdWVyeVR5cGUudHM/YjVlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTsgfSB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50czsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpOyBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7IH0gZnVuY3Rpb24gX3Rocm93KGVycikgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTsgfSBfbmV4dCh1bmRlZmluZWQpOyB9KTsgfTsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgR3JhcGhRTE9iamVjdFR5cGUsIEdyYXBoUUxTdHJpbmcgfSBmcm9tIFwiZ3JhcGhxbFwiO1xuaW1wb3J0IHsgY29ubmVjdGlvbkFyZ3MgfSBmcm9tIFwiZ3JhcGhxbC1yZWxheVwiO1xuaW1wb3J0IFVzZXJUeXBlIGZyb20gXCIuLi9tb2R1bGVzL1VzZXIvVXNlclR5cGVcIjtcbmltcG9ydCBVc2VyQ29ubmVjdGlvbiBmcm9tIFwiLi4vbW9kdWxlcy9Vc2VyL1VzZXJDb25uZWN0aW9uXCI7XG5pbXBvcnQgKiBhcyBVc2VyTG9hZGVyIGZyb20gXCIuLi9tb2R1bGVzL1VzZXIvVXNlckxvYWRlclwiO1xuaW1wb3J0IHsgTm9kZUZpZWxkIH0gZnJvbSBcIi4uL2ludGVyZmFjZS9Ob2RlSW50ZXJmYWNlXCI7XG5jb25zdCBRdWVyeVR5cGUgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICBuYW1lOiBcIlF1ZXJ5XCIsXG4gIGRlc2NyaXB0aW9uOiBcIlRoZSByb290IG9mIGFsbC4uLiBxdWVyaWVzXCIsXG4gIGZpZWxkczogKCkgPT4gKHtcbiAgICBub2RlOiBOb2RlRmllbGQsXG4gICAgY3VycmVudFVzZXI6IHtcbiAgICAgIHR5cGU6IFVzZXJUeXBlLFxuICAgICAgcmVzb2x2ZTogKF8sIGFyZ3MsIGNvbnRleHQpID0+IGNvbnRleHQudXNlclxuICAgIH0sXG4gICAgZ2V0VXNlcnM6IHtcbiAgICAgIHR5cGU6IFVzZXJDb25uZWN0aW9uLmNvbm5lY3Rpb25UeXBlLFxuICAgICAgYXJnczogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBjb25uZWN0aW9uQXJncyksIHt9LCB7XG4gICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmdcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICByZXNvbHZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qIChfLCBhcmdzLCBjb250ZXh0KSB7XG4gICAgICAgICAgcmV0dXJuIHlpZWxkIFVzZXJMb2FkZXIubG9hZFVzZXJzKGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gcmVzb2x2ZShfeCwgX3gyLCBfeDMpIHtcbiAgICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfSgpXG4gICAgfVxuICB9KVxufSk7XG5leHBvcnQgZGVmYXVsdCBRdWVyeVR5cGU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/graphql/QueryType.ts\n");

/***/ }),

/***/ "./src/graphql/schema.ts":
/*!*******************************!*\
  !*** ./src/graphql/schema.ts ***!
  \*******************************/
/*! exports provided: schema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"schema\", function() { return schema; });\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _QueryType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryType */ \"./src/graphql/QueryType.ts\");\n/* harmony import */ var _MutationType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MutationType */ \"./src/graphql/MutationType.ts\");\n\n\n\nconst schema = new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLSchema\"]({\n  query: _QueryType__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  mutation: _MutationType__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9zY2hlbWEudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhxbC9zY2hlbWEudHM/MTc4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMU2NoZW1hIH0gZnJvbSBcImdyYXBocWxcIjtcbmltcG9ydCBRdWVyeVR5cGUgZnJvbSBcIi4vUXVlcnlUeXBlXCI7XG5pbXBvcnQgTXV0YXRpb25UeXBlIGZyb20gXCIuL011dGF0aW9uVHlwZVwiO1xuZXhwb3J0IGNvbnN0IHNjaGVtYSA9IG5ldyBHcmFwaFFMU2NoZW1hKHtcbiAgcXVlcnk6IFF1ZXJ5VHlwZSxcbiAgbXV0YXRpb246IE11dGF0aW9uVHlwZVxufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/graphql/schema.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @koa/cors */ \"@koa/cors\");\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_koa_cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _koa_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @koa/router */ \"@koa/router\");\n/* harmony import */ var _koa_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_koa_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-bodyparser */ \"koa-bodyparser\");\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var koa_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! koa-logger */ \"koa-logger\");\n/* harmony import */ var koa_logger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(koa_logger__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(koa_helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var koa_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! koa-graphql */ \"koa-graphql\");\n/* harmony import */ var koa_graphql__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(koa_graphql__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var graphql_playground_middleware_koa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-playground-middleware-koa */ \"graphql-playground-middleware-koa\");\n/* harmony import */ var graphql_playground_middleware_koa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_playground_middleware_koa__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./database */ \"./src/database.ts\");\n/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./graphql */ \"./src/graphql.ts\");\n\n\n\n\n\n\n\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_0___default.a.config();\nconst app = new koa__WEBPACK_IMPORTED_MODULE_1___default.a();\nconst router = new _koa_router__WEBPACK_IMPORTED_MODULE_3___default.a();\nconst graphqlServer = koa_graphql__WEBPACK_IMPORTED_MODULE_7___default()(_graphql__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\nrouter.all(\"/graphql\", koa_bodyparser__WEBPACK_IMPORTED_MODULE_4___default()(), graphqlServer);\nrouter.all(\"/graphiql\", graphql_playground_middleware_koa__WEBPACK_IMPORTED_MODULE_8___default()({\n  endpoint: \"/graphql\"\n}));\napp.listen(process.env.GRAPHQL_PORT);\napp.use(koa_logger__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(_koa_cors__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(koa_helmet__WEBPACK_IMPORTED_MODULE_6___default()());\napp.use(router.routes()).use(router.allowedMethods());\nObject(_database__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/MWMyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcbmltcG9ydCBLb2EgZnJvbSBcImtvYVwiO1xuaW1wb3J0IGNvcnMgZnJvbSBcIkBrb2EvY29yc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwiQGtvYS9yb3V0ZXJcIjtcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gXCJrb2EtYm9keXBhcnNlclwiO1xuaW1wb3J0IGxvZ2dlciBmcm9tIFwia29hLWxvZ2dlclwiO1xuaW1wb3J0IGhlbG1ldCBmcm9tIFwia29hLWhlbG1ldFwiO1xuaW1wb3J0IGdyYXBocWxIdHRwIGZyb20gXCJrb2EtZ3JhcGhxbFwiO1xuaW1wb3J0IGtvYVBsYXlncm91bmQgZnJvbSBcImdyYXBocWwtcGxheWdyb3VuZC1taWRkbGV3YXJlLWtvYVwiO1xuaW1wb3J0IGNvbm5lY3REQiBmcm9tIFwiLi9kYXRhYmFzZVwiO1xuaW1wb3J0IGdyYXBocWwgZnJvbSBcIi4vZ3JhcGhxbFwiO1xuZG90ZW52LmNvbmZpZygpO1xuY29uc3QgYXBwID0gbmV3IEtvYSgpO1xuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xuY29uc3QgZ3JhcGhxbFNlcnZlciA9IGdyYXBocWxIdHRwKGdyYXBocWwpO1xucm91dGVyLmFsbChcIi9ncmFwaHFsXCIsIGJvZHlQYXJzZXIoKSwgZ3JhcGhxbFNlcnZlcik7XG5yb3V0ZXIuYWxsKFwiL2dyYXBoaXFsXCIsIGtvYVBsYXlncm91bmQoe1xuICBlbmRwb2ludDogXCIvZ3JhcGhxbFwiXG59KSk7XG5hcHAubGlzdGVuKHByb2Nlc3MuZW52LkdSQVBIUUxfUE9SVCk7XG5hcHAudXNlKGxvZ2dlcigpKTtcbmFwcC51c2UoY29ycygpKTtcbmFwcC51c2UoaGVsbWV0KCkpO1xuYXBwLnVzZShyb3V0ZXIucm91dGVzKCkpLnVzZShyb3V0ZXIuYWxsb3dlZE1ldGhvZHMoKSk7XG5jb25uZWN0REIoKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/interface/NodeInterface.ts":
/*!****************************************!*\
  !*** ./src/interface/NodeInterface.ts ***!
  \****************************************/
/*! exports provided: NodeInterface, NodeField, NodesField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NodeInterface\", function() { return NodeInterface; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NodeField\", function() { return NodeField; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NodesField\", function() { return NodesField; });\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-relay */ \"graphql-relay\");\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_relay__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_User_UserLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/User/UserLoader */ \"./src/modules/User/UserLoader.ts\");\n/* harmony import */ var _modules_User_UserType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/User/UserType */ \"./src/modules/User/UserType.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nconst {\n  nodeField,\n  nodesField,\n  nodeInterface\n} = Object(graphql_relay__WEBPACK_IMPORTED_MODULE_0__[\"nodeDefinitions\"])( /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (globalId, context) {\n    const {\n      id,\n      type\n    } = Object(graphql_relay__WEBPACK_IMPORTED_MODULE_0__[\"fromGlobalId\"])(globalId);\n    if (type === \"User\") return yield _modules_User_UserLoader__WEBPACK_IMPORTED_MODULE_1__[\"load\"](context, id);\n    return null;\n  });\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}(), obj => {\n  if (obj instanceof _modules_User_UserLoader__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) return _modules_User_UserType__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  return null;\n});\nconst NodeInterface = nodeInterface;\nconst NodeField = nodeField;\nconst NodesField = nodesField;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW50ZXJmYWNlL05vZGVJbnRlcmZhY2UudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJmYWNlL05vZGVJbnRlcmZhY2UudHM/NWQ1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTsgfSB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50czsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpOyBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7IH0gZnVuY3Rpb24gX3Rocm93KGVycikgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTsgfSBfbmV4dCh1bmRlZmluZWQpOyB9KTsgfTsgfVxuXG5pbXBvcnQgeyBub2RlRGVmaW5pdGlvbnMsIGZyb21HbG9iYWxJZCB9IGZyb20gXCJncmFwaHFsLXJlbGF5XCI7XG5pbXBvcnQgVXNlciwgKiBhcyBVc2VyTG9hZGVyIGZyb20gXCIuLi9tb2R1bGVzL1VzZXIvVXNlckxvYWRlclwiO1xuaW1wb3J0IFVzZXJUeXBlIGZyb20gXCIuLi9tb2R1bGVzL1VzZXIvVXNlclR5cGVcIjtcbmNvbnN0IHtcbiAgbm9kZUZpZWxkLFxuICBub2Rlc0ZpZWxkLFxuICBub2RlSW50ZXJmYWNlXG59ID0gbm9kZURlZmluaXRpb25zKCAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoZ2xvYmFsSWQsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHR5cGVcbiAgICB9ID0gZnJvbUdsb2JhbElkKGdsb2JhbElkKTtcbiAgICBpZiAodHlwZSA9PT0gXCJVc2VyXCIpIHJldHVybiB5aWVsZCBVc2VyTG9hZGVyLmxvYWQoY29udGV4dCwgaWQpO1xuICAgIHJldHVybiBudWxsO1xuICB9KTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94LCBfeDIpIHtcbiAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpLCBvYmogPT4ge1xuICBpZiAob2JqIGluc3RhbmNlb2YgVXNlcikgcmV0dXJuIFVzZXJUeXBlO1xuICByZXR1cm4gbnVsbDtcbn0pO1xuZXhwb3J0IGNvbnN0IE5vZGVJbnRlcmZhY2UgPSBub2RlSW50ZXJmYWNlO1xuZXhwb3J0IGNvbnN0IE5vZGVGaWVsZCA9IG5vZGVGaWVsZDtcbmV4cG9ydCBjb25zdCBOb2Rlc0ZpZWxkID0gbm9kZXNGaWVsZDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/interface/NodeInterface.ts\n");

/***/ }),

/***/ "./src/loaders/index.ts":
/*!******************************!*\
  !*** ./src/loaders/index.ts ***!
  \******************************/
/*! exports provided: UserLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loaders */ \"./src/loaders/loaders.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"UserLoader\", function() { return _loaders__WEBPACK_IMPORTED_MODULE_0__[\"UserLoader\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9hZGVycy9pbmRleC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9sb2FkZXJzL2luZGV4LnRzP2FmZDciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vbG9hZGVyc1wiOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/loaders/index.ts\n");

/***/ }),

/***/ "./src/loaders/loaders.ts":
/*!********************************!*\
  !*** ./src/loaders/loaders.ts ***!
  \********************************/
/*! exports provided: UserLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_User_UserLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/User/UserLoader */ \"./src/modules/User/UserLoader.ts\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"UserLoader\", function() { return _modules_User_UserLoader__WEBPACK_IMPORTED_MODULE_0__; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9hZGVycy9sb2FkZXJzLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWRlcnMvbG9hZGVycy50cz9mOGE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFVzZXJMb2FkZXIgZnJvbSBcIi4uL21vZHVsZXMvVXNlci9Vc2VyTG9hZGVyXCI7XG5leHBvcnQgeyBVc2VyTG9hZGVyIH07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/loaders/loaders.ts\n");

/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_User_UserModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/User/UserModel */ \"./src/modules/User/UserModel.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return _modules_User_UserModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL2luZGV4LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9pbmRleC50cz8wNzQzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlciB9IGZyb20gXCIuLi9tb2R1bGVzL1VzZXIvVXNlck1vZGVsXCI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/models/index.ts\n");

/***/ }),

/***/ "./src/modules/Notifications/NotificationsType.ts":
/*!********************************************************!*\
  !*** ./src/modules/Notifications/NotificationsType.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n\nconst NotificationsType = new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLObjectType\"]({\n  name: \"Notifications\",\n  description: \"Notifications\",\n  fields: () => ({\n    weekly: {\n      type: new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLNonNull\"](graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLBoolean\"]),\n      resolve: ({\n        weekly\n      }) => weekly\n    },\n    news: {\n      type: new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLNonNull\"](graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLBoolean\"]),\n      resolve: ({\n        news\n      }) => news\n    }\n  })\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotificationsType);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Ob3RpZmljYXRpb25zL05vdGlmaWNhdGlvbnNUeXBlLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvTm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25zVHlwZS50cz9hMjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxPYmplY3RUeXBlLCBHcmFwaFFMQm9vbGVhbiwgR3JhcGhRTE5vbk51bGwgfSBmcm9tIFwiZ3JhcGhxbFwiO1xuY29uc3QgTm90aWZpY2F0aW9uc1R5cGUgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICBuYW1lOiBcIk5vdGlmaWNhdGlvbnNcIixcbiAgZGVzY3JpcHRpb246IFwiTm90aWZpY2F0aW9uc1wiLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgd2Vla2x5OiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTEJvb2xlYW4pLFxuICAgICAgcmVzb2x2ZTogKHtcbiAgICAgICAgd2Vla2x5XG4gICAgICB9KSA9PiB3ZWVrbHlcbiAgICB9LFxuICAgIG5ld3M6IHtcbiAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMQm9vbGVhbiksXG4gICAgICByZXNvbHZlOiAoe1xuICAgICAgICBuZXdzXG4gICAgICB9KSA9PiBuZXdzXG4gICAgfVxuICB9KVxufSk7XG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25zVHlwZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/Notifications/NotificationsType.ts\n");

/***/ }),

/***/ "./src/modules/Provider/ProviderType.ts":
/*!**********************************************!*\
  !*** ./src/modules/Provider/ProviderType.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProviderType = new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLObjectType\"]({\n  name: \"Provider\",\n  description: \"Provider\",\n  fields: () => ({\n    id: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: ({\n        id\n      }) => id\n    },\n    provider: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: ({\n        provider\n      }) => provider\n    }\n  })\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProviderType);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Qcm92aWRlci9Qcm92aWRlclR5cGUudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Qcm92aWRlci9Qcm92aWRlclR5cGUudHM/ODM5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMT2JqZWN0VHlwZSwgR3JhcGhRTFN0cmluZyB9IGZyb20gXCJncmFwaHFsXCI7XG5jb25zdCBQcm92aWRlclR5cGUgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICBuYW1lOiBcIlByb3ZpZGVyXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlByb3ZpZGVyXCIsXG4gIGZpZWxkczogKCkgPT4gKHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIHJlc29sdmU6ICh7XG4gICAgICAgIGlkXG4gICAgICB9KSA9PiBpZFxuICAgIH0sXG4gICAgcHJvdmlkZXI6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICByZXNvbHZlOiAoe1xuICAgICAgICBwcm92aWRlclxuICAgICAgfSkgPT4gcHJvdmlkZXJcbiAgICB9XG4gIH0pXG59KTtcbmV4cG9ydCBkZWZhdWx0IFByb3ZpZGVyVHlwZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/Provider/ProviderType.ts\n");

/***/ }),

/***/ "./src/modules/User/UserConnection.ts":
/*!********************************************!*\
  !*** ./src/modules/User/UserConnection.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-relay */ \"graphql-relay\");\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_relay__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserType */ \"./src/modules/User/UserType.ts\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(graphql_relay__WEBPACK_IMPORTED_MODULE_1__[\"connectionDefinitions\"])({\n  name: \"User\",\n  nodeType: _UserType__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  connectionFields: {\n    count: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLInt\"]\n    }\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Vc2VyL1VzZXJDb25uZWN0aW9uLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvVXNlci9Vc2VyQ29ubmVjdGlvbi50cz85MWRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxJbnQgfSBmcm9tIFwiZ3JhcGhxbFwiO1xuaW1wb3J0IHsgY29ubmVjdGlvbkRlZmluaXRpb25zIH0gZnJvbSBcImdyYXBocWwtcmVsYXlcIjtcbmltcG9ydCBVc2VyVHlwZSBmcm9tIFwiLi9Vc2VyVHlwZVwiO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdGlvbkRlZmluaXRpb25zKHtcbiAgbmFtZTogXCJVc2VyXCIsXG4gIG5vZGVUeXBlOiBVc2VyVHlwZSxcbiAgY29ubmVjdGlvbkZpZWxkczoge1xuICAgIGNvdW50OiB7XG4gICAgICB0eXBlOiBHcmFwaFFMSW50XG4gICAgfVxuICB9XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/User/UserConnection.ts\n");

/***/ }),

/***/ "./src/modules/User/UserLoader.ts":
/*!****************************************!*\
  !*** ./src/modules/User/UserLoader.ts ***!
  \****************************************/
/*! exports provided: default, getLoader, load, clearCache, loadUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLoader\", function() { return getLoader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"load\", function() { return load; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearCache\", function() { return clearCache; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadUsers\", function() { return loadUsers; });\n/* harmony import */ var _entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @entria/graphql-mongoose-loader */ \"@entria/graphql-mongoose-loader\");\n/* harmony import */ var _entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dataloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dataloader */ \"dataloader\");\n/* harmony import */ var dataloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dataloader__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserModel */ \"./src/modules/User/UserModel.ts\");\n/* harmony import */ var _utils_escapeRegex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/escapeRegex */ \"./src/utils/escapeRegex.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass User {\n  constructor(data) {\n    _defineProperty(this, \"id\", void 0);\n\n    _defineProperty(this, \"_id\", void 0);\n\n    _defineProperty(this, \"email\", void 0);\n\n    _defineProperty(this, \"password\", void 0);\n\n    _defineProperty(this, \"notifications\", void 0);\n\n    _defineProperty(this, \"providers\", void 0);\n\n    this.id = data._id;\n    this._id = data._id;\n    this.email = data.email;\n    this.notifications = data.notifications;\n    this.providers = data.providers;\n  }\n\n}\nconst getLoader = () => new dataloader__WEBPACK_IMPORTED_MODULE_1___default.a(ids => Object(_entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_0__[\"mongooseLoader\"])(_UserModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], ids));\n\nconst viewerCanSee = () => true;\n\nconst load = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (context, id) {\n    if (!id && typeof id !== \"string\") {\n      return null;\n    }\n\n    let data;\n\n    try {\n      data = yield context.dataloaders.UserLoader.load(id);\n    } catch (err) {\n      return null;\n    }\n\n    return viewerCanSee() ? new User(data) : null;\n  });\n\n  return function load(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\nconst clearCache = ({\n  dataloaders\n}, id) => dataloaders.UserLoader.clear(id.toString());\nconst loadUsers = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator(function* (context, args) {\n    const defaultWhere = {\n      removedAt: null\n    };\n    const where = args.search ? _objectSpread(_objectSpread({}, defaultWhere), {}, {\n      name: {\n        $regex: new RegExp(`^${Object(_utils_escapeRegex__WEBPACK_IMPORTED_MODULE_3__[\"escapeRegex\"])(args.search)}`, \"ig\")\n      }\n    }) : defaultWhere;\n    const users = _UserModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(where, {\n      _id: 1\n    }).sort({\n      createdAt: -1\n    }).lean();\n    return Object(_entria_graphql_mongoose_loader__WEBPACK_IMPORTED_MODULE_0__[\"connectionFromMongoCursor\"])({\n      cursor: users,\n      context,\n      args,\n      loader: load\n    });\n  });\n\n  return function loadUsers(_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Vc2VyL1VzZXJMb2FkZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Vc2VyL1VzZXJMb2FkZXIudHM/YWIyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7IH0gfVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTsgZnVuY3Rpb24gX25leHQodmFsdWUpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpOyB9IGZ1bmN0aW9uIF90aHJvdyhlcnIpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7IH0gX25leHQodW5kZWZpbmVkKTsgfSk7IH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHsgY29ubmVjdGlvbkZyb21Nb25nb0N1cnNvciwgbW9uZ29vc2VMb2FkZXIgfSBmcm9tIFwiQGVudHJpYS9ncmFwaHFsLW1vbmdvb3NlLWxvYWRlclwiO1xuaW1wb3J0IERhdGFMb2FkZXIgZnJvbSBcImRhdGFsb2FkZXJcIjtcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSBcIi4vVXNlck1vZGVsXCI7XG5pbXBvcnQgeyBlc2NhcGVSZWdleCB9IGZyb20gXCIuLi8uLi91dGlscy9lc2NhcGVSZWdleFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpZFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2lkXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJlbWFpbFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicGFzc3dvcmRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm5vdGlmaWNhdGlvbnNcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInByb3ZpZGVyc1wiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5pZCA9IGRhdGEuX2lkO1xuICAgIHRoaXMuX2lkID0gZGF0YS5faWQ7XG4gICAgdGhpcy5lbWFpbCA9IGRhdGEuZW1haWw7XG4gICAgdGhpcy5ub3RpZmljYXRpb25zID0gZGF0YS5ub3RpZmljYXRpb25zO1xuICAgIHRoaXMucHJvdmlkZXJzID0gZGF0YS5wcm92aWRlcnM7XG4gIH1cblxufVxuZXhwb3J0IGNvbnN0IGdldExvYWRlciA9ICgpID0+IG5ldyBEYXRhTG9hZGVyKGlkcyA9PiBtb25nb29zZUxvYWRlcihVc2VyTW9kZWwsIGlkcykpO1xuXG5jb25zdCB2aWV3ZXJDYW5TZWUgPSAoKSA9PiB0cnVlO1xuXG5leHBvcnQgY29uc3QgbG9hZCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qIChjb250ZXh0LCBpZCkge1xuICAgIGlmICghaWQgJiYgdHlwZW9mIGlkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgZGF0YTtcblxuICAgIHRyeSB7XG4gICAgICBkYXRhID0geWllbGQgY29udGV4dC5kYXRhbG9hZGVycy5Vc2VyTG9hZGVyLmxvYWQoaWQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZpZXdlckNhblNlZSgpID8gbmV3IFVzZXIoZGF0YSkgOiBudWxsO1xuICB9KTtcblxuICByZXR1cm4gZnVuY3Rpb24gbG9hZChfeCwgX3gyKSB7XG4gICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKTtcbmV4cG9ydCBjb25zdCBjbGVhckNhY2hlID0gKHtcbiAgZGF0YWxvYWRlcnNcbn0sIGlkKSA9PiBkYXRhbG9hZGVycy5Vc2VyTG9hZGVyLmNsZWFyKGlkLnRvU3RyaW5nKCkpO1xuZXhwb3J0IGNvbnN0IGxvYWRVc2VycyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmMiA9IF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoY29udGV4dCwgYXJncykge1xuICAgIGNvbnN0IGRlZmF1bHRXaGVyZSA9IHtcbiAgICAgIHJlbW92ZWRBdDogbnVsbFxuICAgIH07XG4gICAgY29uc3Qgd2hlcmUgPSBhcmdzLnNlYXJjaCA/IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZGVmYXVsdFdoZXJlKSwge30sIHtcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgJHJlZ2V4OiBuZXcgUmVnRXhwKGBeJHtlc2NhcGVSZWdleChhcmdzLnNlYXJjaCl9YCwgXCJpZ1wiKVxuICAgICAgfVxuICAgIH0pIDogZGVmYXVsdFdoZXJlO1xuICAgIGNvbnN0IHVzZXJzID0gVXNlck1vZGVsLmZpbmQod2hlcmUsIHtcbiAgICAgIF9pZDogMVxuICAgIH0pLnNvcnQoe1xuICAgICAgY3JlYXRlZEF0OiAtMVxuICAgIH0pLmxlYW4oKTtcbiAgICByZXR1cm4gY29ubmVjdGlvbkZyb21Nb25nb0N1cnNvcih7XG4gICAgICBjdXJzb3I6IHVzZXJzLFxuICAgICAgY29udGV4dCxcbiAgICAgIGFyZ3MsXG4gICAgICBsb2FkZXI6IGxvYWRcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGxvYWRVc2VycyhfeDMsIF94NCkge1xuICAgIHJldHVybiBfcmVmMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/User/UserLoader.ts\n");

/***/ }),

/***/ "./src/modules/User/UserModel.ts":
/*!***************************************!*\
  !*** ./src/modules/User/UserModel.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  email: {\n    type: String,\n    trim: true,\n    index: true,\n    required: true,\n    lowercase: true\n  },\n  password: {\n    type: String,\n    hidden: true,\n    required: true,\n    minlength: 6\n  },\n  notifications: {\n    weekly: {\n      type: Boolean,\n      required: false,\n      hidden: false\n    },\n    news: {\n      type: Boolean,\n      required: false,\n      hidden: false\n    }\n  },\n  providers: [{\n    id: {\n      type: String\n    },\n    provider: {\n      type: String\n    }\n  }]\n}, {\n  timestamps: true,\n  collection: \"User\"\n});\nUserSchema.methods = {\n  authenticate: function (plainTextPassword) {\n    return bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.compare(plainTextPassword, this.password);\n  }\n};\nUserSchema.pre(\"save\", function (next) {\n  if (!this.isModified(\"password\")) return next();\n  if (!this.password) return next();\n  return bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hash(this.password, 8).then(hash => {\n    this.password = hash;\n    next();\n  });\n}); // This line is only to fix \"Cannot overwrite `User` model once compiled.\" error.\n// https://stackoverflow.com/questions/19051041/cannot-overwrite-model-once-compiled-mongoose\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models = {};\nconst UserModel = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(\"User\", UserSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserModel);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Vc2VyL1VzZXJNb2RlbC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1VzZXIvVXNlck1vZGVsLnRzPzdkMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIGVtYWlsOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHRyaW06IHRydWUsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbG93ZXJjYXNlOiB0cnVlXG4gIH0sXG4gIHBhc3N3b3JkOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGhpZGRlbjogdHJ1ZSxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBtaW5sZW5ndGg6IDZcbiAgfSxcbiAgbm90aWZpY2F0aW9uczoge1xuICAgIHdlZWtseToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgIGhpZGRlbjogZmFsc2VcbiAgICB9LFxuICAgIG5ld3M6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICBoaWRkZW46IGZhbHNlXG4gICAgfVxuICB9LFxuICBwcm92aWRlcnM6IFt7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgcHJvdmlkZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH1cbiAgfV1cbn0sIHtcbiAgdGltZXN0YW1wczogdHJ1ZSxcbiAgY29sbGVjdGlvbjogXCJVc2VyXCJcbn0pO1xuVXNlclNjaGVtYS5tZXRob2RzID0ge1xuICBhdXRoZW50aWNhdGU6IGZ1bmN0aW9uIChwbGFpblRleHRQYXNzd29yZCkge1xuICAgIHJldHVybiBiY3J5cHQuY29tcGFyZShwbGFpblRleHRQYXNzd29yZCwgdGhpcy5wYXNzd29yZCk7XG4gIH1cbn07XG5Vc2VyU2NoZW1hLnByZShcInNhdmVcIiwgZnVuY3Rpb24gKG5leHQpIHtcbiAgaWYgKCF0aGlzLmlzTW9kaWZpZWQoXCJwYXNzd29yZFwiKSkgcmV0dXJuIG5leHQoKTtcbiAgaWYgKCF0aGlzLnBhc3N3b3JkKSByZXR1cm4gbmV4dCgpO1xuICByZXR1cm4gYmNyeXB0Lmhhc2godGhpcy5wYXNzd29yZCwgOCkudGhlbihoYXNoID0+IHtcbiAgICB0aGlzLnBhc3N3b3JkID0gaGFzaDtcbiAgICBuZXh0KCk7XG4gIH0pO1xufSk7IC8vIFRoaXMgbGluZSBpcyBvbmx5IHRvIGZpeCBcIkNhbm5vdCBvdmVyd3JpdGUgYFVzZXJgIG1vZGVsIG9uY2UgY29tcGlsZWQuXCIgZXJyb3IuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xOTA1MTA0MS9jYW5ub3Qtb3ZlcndyaXRlLW1vZGVsLW9uY2UtY29tcGlsZWQtbW9uZ29vc2VcblxubW9uZ29vc2UubW9kZWxzID0ge307XG5jb25zdCBVc2VyTW9kZWwgPSBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBVc2VyTW9kZWw7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/User/UserModel.ts\n");

/***/ }),

/***/ "./src/modules/User/UserType.ts":
/*!**************************************!*\
  !*** ./src/modules/User/UserType.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-relay */ \"graphql-relay\");\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_relay__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _interface_NodeInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interface/NodeInterface */ \"./src/interface/NodeInterface.ts\");\n/* harmony import */ var _Notifications_NotificationsType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Notifications/NotificationsType */ \"./src/modules/Notifications/NotificationsType.ts\");\n/* harmony import */ var _Provider_ProviderType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Provider/ProviderType */ \"./src/modules/Provider/ProviderType.ts\");\n\n\n\n\n\nconst UserType = new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLObjectType\"]({\n  name: \"User\",\n  description: \"User data\",\n  fields: () => ({\n    id: Object(graphql_relay__WEBPACK_IMPORTED_MODULE_1__[\"globalIdField\"])(\"User\"),\n    _id: {\n      type: Object(graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLNonNull\"])(graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]),\n      resolve: ({\n        _id\n      }) => _id\n    },\n    email: {\n      type: Object(graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLNonNull\"])(graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"]),\n      resolve: ({\n        email\n      }) => email\n    },\n    notifications: {\n      type: _Notifications_NotificationsType__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      resolve: ({\n        notifications\n      }) => notifications\n    },\n    providers: {\n      type: Object(graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLList\"])(_Provider_ProviderType__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n      resolve: ({\n        providers\n      }) => providers\n    }\n  }),\n  interfaces: () => [_interface_NodeInterface__WEBPACK_IMPORTED_MODULE_2__[\"NodeInterface\"]]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserType);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Vc2VyL1VzZXJUeXBlLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvVXNlci9Vc2VyVHlwZS50cz8xODZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxPYmplY3RUeXBlLCBHcmFwaFFMU3RyaW5nLCBHcmFwaFFMTm9uTnVsbCwgR3JhcGhRTExpc3QgfSBmcm9tIFwiZ3JhcGhxbFwiO1xuaW1wb3J0IHsgZ2xvYmFsSWRGaWVsZCB9IGZyb20gXCJncmFwaHFsLXJlbGF5XCI7XG5pbXBvcnQgeyBOb2RlSW50ZXJmYWNlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS9Ob2RlSW50ZXJmYWNlXCI7XG5pbXBvcnQgTm90aWZpY2F0aW9uc1R5cGUgZnJvbSBcIi4uL05vdGlmaWNhdGlvbnMvTm90aWZpY2F0aW9uc1R5cGVcIjtcbmltcG9ydCBQcm92aWRlclR5cGUgZnJvbSBcIi4uL1Byb3ZpZGVyL1Byb3ZpZGVyVHlwZVwiO1xuY29uc3QgVXNlclR5cGUgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICBuYW1lOiBcIlVzZXJcIixcbiAgZGVzY3JpcHRpb246IFwiVXNlciBkYXRhXCIsXG4gIGZpZWxkczogKCkgPT4gKHtcbiAgICBpZDogZ2xvYmFsSWRGaWVsZChcIlVzZXJcIiksXG4gICAgX2lkOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMTm9uTnVsbChHcmFwaFFMU3RyaW5nKSxcbiAgICAgIHJlc29sdmU6ICh7XG4gICAgICAgIF9pZFxuICAgICAgfSkgPT4gX2lkXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZyksXG4gICAgICByZXNvbHZlOiAoe1xuICAgICAgICBlbWFpbFxuICAgICAgfSkgPT4gZW1haWxcbiAgICB9LFxuICAgIG5vdGlmaWNhdGlvbnM6IHtcbiAgICAgIHR5cGU6IE5vdGlmaWNhdGlvbnNUeXBlLFxuICAgICAgcmVzb2x2ZTogKHtcbiAgICAgICAgbm90aWZpY2F0aW9uc1xuICAgICAgfSkgPT4gbm90aWZpY2F0aW9uc1xuICAgIH0sXG4gICAgcHJvdmlkZXJzOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMTGlzdChQcm92aWRlclR5cGUpLFxuICAgICAgcmVzb2x2ZTogKHtcbiAgICAgICAgcHJvdmlkZXJzXG4gICAgICB9KSA9PiBwcm92aWRlcnNcbiAgICB9XG4gIH0pLFxuICBpbnRlcmZhY2VzOiAoKSA9PiBbTm9kZUludGVyZmFjZV1cbn0pO1xuZXhwb3J0IGRlZmF1bHQgVXNlclR5cGU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/User/UserType.ts\n");

/***/ }),

/***/ "./src/modules/User/mutations/UserChangeNotifications.ts":
/*!***************************************************************!*\
  !*** ./src/modules/User/mutations/UserChangeNotifications.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-relay */ \"graphql-relay\");\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_relay__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(graphql_relay__WEBPACK_IMPORTED_MODULE_1__[\"mutationWithClientMutationId\"])({\n  name: \"UserChangeNotifications\",\n  inputFields: {\n    weekly: {\n      type: new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLNonNull\"](graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLBoolean\"])\n    },\n    news: {\n      type: new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLNonNull\"](graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLBoolean\"])\n    }\n  },\n  mutateAndGetPayload: function () {\n    var _ref = _asyncToGenerator(function* ({\n      weekly,\n      news\n    }, {\n      user\n    }) {\n      if (!user) {\n        return {\n          error: \"User not authenticated\"\n        };\n      }\n\n      user.notifications.weekly = weekly;\n      user.notifications.news = news;\n      yield user.save();\n      return {\n        message: \"Notifications updated successfully\",\n        error: null\n      };\n    });\n\n    return function mutateAndGetPayload(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }(),\n  outputFields: {\n    message: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: ({\n        message\n      }) => message\n    },\n    error: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: ({\n        error\n      }) => error\n    }\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Vc2VyL211dGF0aW9ucy9Vc2VyQ2hhbmdlTm90aWZpY2F0aW9ucy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1VzZXIvbXV0YXRpb25zL1VzZXJDaGFuZ2VOb3RpZmljYXRpb25zLnRzP2E0MTMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7IH0gfVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTsgZnVuY3Rpb24gX25leHQodmFsdWUpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpOyB9IGZ1bmN0aW9uIF90aHJvdyhlcnIpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7IH0gX25leHQodW5kZWZpbmVkKTsgfSk7IH07IH1cblxuaW1wb3J0IHsgR3JhcGhRTEJvb2xlYW4sIEdyYXBoUUxOb25OdWxsLCBHcmFwaFFMU3RyaW5nIH0gZnJvbSBcImdyYXBocWxcIjtcbmltcG9ydCB7IG11dGF0aW9uV2l0aENsaWVudE11dGF0aW9uSWQgfSBmcm9tIFwiZ3JhcGhxbC1yZWxheVwiO1xuZXhwb3J0IGRlZmF1bHQgbXV0YXRpb25XaXRoQ2xpZW50TXV0YXRpb25JZCh7XG4gIG5hbWU6IFwiVXNlckNoYW5nZU5vdGlmaWNhdGlvbnNcIixcbiAgaW5wdXRGaWVsZHM6IHtcbiAgICB3ZWVrbHk6IHtcbiAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMQm9vbGVhbilcbiAgICB9LFxuICAgIG5ld3M6IHtcbiAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMQm9vbGVhbilcbiAgICB9XG4gIH0sXG4gIG11dGF0ZUFuZEdldFBheWxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoe1xuICAgICAgd2Vla2x5LFxuICAgICAgbmV3c1xuICAgIH0sIHtcbiAgICAgIHVzZXJcbiAgICB9KSB7XG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkXCJcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdXNlci5ub3RpZmljYXRpb25zLndlZWtseSA9IHdlZWtseTtcbiAgICAgIHVzZXIubm90aWZpY2F0aW9ucy5uZXdzID0gbmV3cztcbiAgICAgIHlpZWxkIHVzZXIuc2F2ZSgpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVzc2FnZTogXCJOb3RpZmljYXRpb25zIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICAgIGVycm9yOiBudWxsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG11dGF0ZUFuZEdldFBheWxvYWQoX3gsIF94Mikge1xuICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9KCksXG4gIG91dHB1dEZpZWxkczoge1xuICAgIG1lc3NhZ2U6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICByZXNvbHZlOiAoe1xuICAgICAgICBtZXNzYWdlXG4gICAgICB9KSA9PiBtZXNzYWdlXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIHJlc29sdmU6ICh7XG4gICAgICAgIGVycm9yXG4gICAgICB9KSA9PiBlcnJvclxuICAgIH1cbiAgfVxufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/User/mutations/UserChangeNotifications.ts\n");

/***/ }),

/***/ "./src/modules/User/mutations/UserChangePassword.ts":
/*!**********************************************************!*\
  !*** ./src/modules/User/mutations/UserChangePassword.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-relay */ \"graphql-relay\");\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_relay__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(graphql_relay__WEBPACK_IMPORTED_MODULE_1__[\"mutationWithClientMutationId\"])({\n  name: \"UserChangePassword\",\n  inputFields: {\n    oldPassword: {\n      type: new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLNonNull\"](graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"])\n    },\n    newPassword: {\n      type: new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLNonNull\"](graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"])\n    }\n  },\n  mutateAndGetPayload: function () {\n    var _ref = _asyncToGenerator(function* ({\n      oldPassword,\n      newPassword\n    }, {\n      user\n    }) {\n      if (!user) {\n        return {\n          error: \"User not authenticated\"\n        };\n      }\n\n      const correctPassword = user.authenticate(oldPassword);\n\n      if (!correctPassword) {\n        return {\n          error: \"INVALID_PASSWORD\"\n        };\n      }\n\n      user.password = newPassword;\n      yield user.save();\n      return {\n        message: \"Password updated successfully\",\n        error: null\n      };\n    });\n\n    return function mutateAndGetPayload(_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }(),\n  outputFields: {\n    message: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: ({\n        message\n      }) => message\n    },\n    error: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: ({\n        error\n      }) => error\n    }\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Vc2VyL211dGF0aW9ucy9Vc2VyQ2hhbmdlUGFzc3dvcmQudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Vc2VyL211dGF0aW9ucy9Vc2VyQ2hhbmdlUGFzc3dvcmQudHM/ZWUwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTsgfSB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50czsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpOyBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7IH0gZnVuY3Rpb24gX3Rocm93KGVycikgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTsgfSBfbmV4dCh1bmRlZmluZWQpOyB9KTsgfTsgfVxuXG5pbXBvcnQgeyBHcmFwaFFMU3RyaW5nLCBHcmFwaFFMTm9uTnVsbCB9IGZyb20gXCJncmFwaHFsXCI7XG5pbXBvcnQgeyBtdXRhdGlvbldpdGhDbGllbnRNdXRhdGlvbklkIH0gZnJvbSBcImdyYXBocWwtcmVsYXlcIjtcbmV4cG9ydCBkZWZhdWx0IG11dGF0aW9uV2l0aENsaWVudE11dGF0aW9uSWQoe1xuICBuYW1lOiBcIlVzZXJDaGFuZ2VQYXNzd29yZFwiLFxuICBpbnB1dEZpZWxkczoge1xuICAgIG9sZFBhc3N3b3JkOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZylcbiAgICB9LFxuICAgIG5ld1Bhc3N3b3JkOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZylcbiAgICB9XG4gIH0sXG4gIG11dGF0ZUFuZEdldFBheWxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKiAoe1xuICAgICAgb2xkUGFzc3dvcmQsXG4gICAgICBuZXdQYXNzd29yZFxuICAgIH0sIHtcbiAgICAgIHVzZXJcbiAgICB9KSB7XG4gICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcjogXCJVc2VyIG5vdCBhdXRoZW50aWNhdGVkXCJcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29ycmVjdFBhc3N3b3JkID0gdXNlci5hdXRoZW50aWNhdGUob2xkUGFzc3dvcmQpO1xuXG4gICAgICBpZiAoIWNvcnJlY3RQYXNzd29yZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVycm9yOiBcIklOVkFMSURfUEFTU1dPUkRcIlxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB1c2VyLnBhc3N3b3JkID0gbmV3UGFzc3dvcmQ7XG4gICAgICB5aWVsZCB1c2VyLnNhdmUoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lc3NhZ2U6IFwiUGFzc3dvcmQgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgZXJyb3I6IG51bGxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbXV0YXRlQW5kR2V0UGF5bG9hZChfeCwgX3gyKSB7XG4gICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH0oKSxcbiAgb3V0cHV0RmllbGRzOiB7XG4gICAgbWVzc2FnZToge1xuICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIHJlc29sdmU6ICh7XG4gICAgICAgIG1lc3NhZ2VcbiAgICAgIH0pID0+IG1lc3NhZ2VcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgcmVzb2x2ZTogKHtcbiAgICAgICAgZXJyb3JcbiAgICAgIH0pID0+IGVycm9yXG4gICAgfVxuICB9XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/User/mutations/UserChangePassword.ts\n");

/***/ }),

/***/ "./src/modules/User/mutations/UserSignInWithEmail.ts":
/*!***********************************************************!*\
  !*** ./src/modules/User/mutations/UserSignInWithEmail.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-relay */ \"graphql-relay\");\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_relay__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserModel */ \"./src/modules/User/UserModel.ts\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/auth */ \"./src/utils/auth.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(graphql_relay__WEBPACK_IMPORTED_MODULE_1__[\"mutationWithClientMutationId\"])({\n  name: \"UserSignInWithEmail\",\n  inputFields: {\n    email: {\n      type: new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLNonNull\"](graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"])\n    },\n    password: {\n      type: new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLNonNull\"](graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"])\n    }\n  },\n  mutateAndGetPayload: function () {\n    var _ref = _asyncToGenerator(function* ({\n      email,\n      password\n    }) {\n      const user = yield _UserModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n        email: email.toLowerCase()\n      });\n\n      if (!user) {\n        return {\n          token: null,\n          error: \"User doesn't exist\"\n        };\n      }\n\n      const correctPassword = yield user.authenticate(password);\n\n      if (!correctPassword) {\n        return {\n          token: null,\n          error: \"Invalid password\"\n        };\n      }\n\n      return {\n        token: Object(_utils_auth__WEBPACK_IMPORTED_MODULE_3__[\"generateToken\"])(user),\n        error: null\n      };\n    });\n\n    return function mutateAndGetPayload(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }(),\n  outputFields: {\n    token: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: ({\n        token\n      }) => token\n    },\n    error: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: ({\n        error\n      }) => error\n    }\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Vc2VyL211dGF0aW9ucy9Vc2VyU2lnbkluV2l0aEVtYWlsLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvVXNlci9tdXRhdGlvbnMvVXNlclNpZ25JbldpdGhFbWFpbC50cz84MWNiIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpOyB9IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7IGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTsgfSBmdW5jdGlvbiBfdGhyb3coZXJyKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpOyB9IF9uZXh0KHVuZGVmaW5lZCk7IH0pOyB9OyB9XG5cbmltcG9ydCB7IEdyYXBoUUxTdHJpbmcsIEdyYXBoUUxOb25OdWxsIH0gZnJvbSBcImdyYXBocWxcIjtcbmltcG9ydCB7IG11dGF0aW9uV2l0aENsaWVudE11dGF0aW9uSWQgfSBmcm9tIFwiZ3JhcGhxbC1yZWxheVwiO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tIFwiLi4vVXNlck1vZGVsXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVRva2VuIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2F1dGhcIjtcbmV4cG9ydCBkZWZhdWx0IG11dGF0aW9uV2l0aENsaWVudE11dGF0aW9uSWQoe1xuICBuYW1lOiBcIlVzZXJTaWduSW5XaXRoRW1haWxcIixcbiAgaW5wdXRGaWVsZHM6IHtcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxTdHJpbmcpXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxTdHJpbmcpXG4gICAgfVxuICB9LFxuICBtdXRhdGVBbmRHZXRQYXlsb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKHtcbiAgICAgIGVtYWlsLFxuICAgICAgcGFzc3dvcmRcbiAgICB9KSB7XG4gICAgICBjb25zdCB1c2VyID0geWllbGQgVXNlck1vZGVsLmZpbmRPbmUoe1xuICAgICAgICBlbWFpbDogZW1haWwudG9Mb3dlckNhc2UoKVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgIGVycm9yOiBcIlVzZXIgZG9lc24ndCBleGlzdFwiXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvcnJlY3RQYXNzd29yZCA9IHlpZWxkIHVzZXIuYXV0aGVudGljYXRlKHBhc3N3b3JkKTtcblxuICAgICAgaWYgKCFjb3JyZWN0UGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b2tlbjogbnVsbCxcbiAgICAgICAgICBlcnJvcjogXCJJbnZhbGlkIHBhc3N3b3JkXCJcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9rZW46IGdlbmVyYXRlVG9rZW4odXNlciksXG4gICAgICAgIGVycm9yOiBudWxsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG11dGF0ZUFuZEdldFBheWxvYWQoX3gpIHtcbiAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfSgpLFxuICBvdXRwdXRGaWVsZHM6IHtcbiAgICB0b2tlbjoge1xuICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIHJlc29sdmU6ICh7XG4gICAgICAgIHRva2VuXG4gICAgICB9KSA9PiB0b2tlblxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICByZXNvbHZlOiAoe1xuICAgICAgICBlcnJvclxuICAgICAgfSkgPT4gZXJyb3JcbiAgICB9XG4gIH1cbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/User/mutations/UserSignInWithEmail.ts\n");

/***/ }),

/***/ "./src/modules/User/mutations/UserSignUpWithEmail.ts":
/*!***********************************************************!*\
  !*** ./src/modules/User/mutations/UserSignUpWithEmail.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ \"graphql\");\n/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-relay */ \"graphql-relay\");\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_relay__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserModel */ \"./src/modules/User/UserModel.ts\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/auth */ \"./src/utils/auth.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(graphql_relay__WEBPACK_IMPORTED_MODULE_1__[\"mutationWithClientMutationId\"])({\n  name: \"UserSignUpWithEmail\",\n  inputFields: {\n    email: {\n      type: new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLNonNull\"](graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"])\n    },\n    password: {\n      type: new graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLNonNull\"](graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"])\n    }\n  },\n  mutateAndGetPayload: function () {\n    var _ref = _asyncToGenerator(function* ({\n      email,\n      password\n    }) {\n      let user = yield _UserModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n        email\n      });\n\n      if (user) {\n        return {\n          token: null,\n          error: \"Email is already in use\"\n        };\n      }\n\n      user = new _UserModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        email,\n        password,\n        notifications: {\n          weekly: false,\n          news: false\n        },\n        providers: []\n      });\n      yield user.save();\n      return {\n        token: Object(_utils_auth__WEBPACK_IMPORTED_MODULE_3__[\"generateToken\"])(user)\n      };\n    });\n\n    return function mutateAndGetPayload(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }(),\n  outputFields: {\n    token: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: ({\n        token\n      }) => token\n    },\n    error: {\n      type: graphql__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLString\"],\n      resolve: ({\n        error\n      }) => error\n    }\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Vc2VyL211dGF0aW9ucy9Vc2VyU2lnblVwV2l0aEVtYWlsLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvVXNlci9tdXRhdGlvbnMvVXNlclNpZ25VcFdpdGhFbWFpbC50cz80MTc4Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpOyB9IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7IGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTsgfSBmdW5jdGlvbiBfdGhyb3coZXJyKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpOyB9IF9uZXh0KHVuZGVmaW5lZCk7IH0pOyB9OyB9XG5cbmltcG9ydCB7IEdyYXBoUUxTdHJpbmcsIEdyYXBoUUxOb25OdWxsIH0gZnJvbSBcImdyYXBocWxcIjtcbmltcG9ydCB7IG11dGF0aW9uV2l0aENsaWVudE11dGF0aW9uSWQgfSBmcm9tIFwiZ3JhcGhxbC1yZWxheVwiO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tIFwiLi4vVXNlck1vZGVsXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVRva2VuIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2F1dGhcIjtcbmV4cG9ydCBkZWZhdWx0IG11dGF0aW9uV2l0aENsaWVudE11dGF0aW9uSWQoe1xuICBuYW1lOiBcIlVzZXJTaWduVXBXaXRoRW1haWxcIixcbiAgaW5wdXRGaWVsZHM6IHtcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxTdHJpbmcpXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxTdHJpbmcpXG4gICAgfVxuICB9LFxuICBtdXRhdGVBbmRHZXRQYXlsb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKHtcbiAgICAgIGVtYWlsLFxuICAgICAgcGFzc3dvcmRcbiAgICB9KSB7XG4gICAgICBsZXQgdXNlciA9IHlpZWxkIFVzZXJNb2RlbC5maW5kT25lKHtcbiAgICAgICAgZW1haWxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodXNlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgIGVycm9yOiBcIkVtYWlsIGlzIGFscmVhZHkgaW4gdXNlXCJcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdXNlciA9IG5ldyBVc2VyTW9kZWwoe1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIG5vdGlmaWNhdGlvbnM6IHtcbiAgICAgICAgICB3ZWVrbHk6IGZhbHNlLFxuICAgICAgICAgIG5ld3M6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHByb3ZpZGVyczogW11cbiAgICAgIH0pO1xuICAgICAgeWllbGQgdXNlci5zYXZlKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b2tlbjogZ2VuZXJhdGVUb2tlbih1c2VyKVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmdW5jdGlvbiBtdXRhdGVBbmRHZXRQYXlsb2FkKF94KSB7XG4gICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH0oKSxcbiAgb3V0cHV0RmllbGRzOiB7XG4gICAgdG9rZW46IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICByZXNvbHZlOiAoe1xuICAgICAgICB0b2tlblxuICAgICAgfSkgPT4gdG9rZW5cbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgcmVzb2x2ZTogKHtcbiAgICAgICAgZXJyb3JcbiAgICAgIH0pID0+IGVycm9yXG4gICAgfVxuICB9XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/User/mutations/UserSignUpWithEmail.ts\n");

/***/ }),

/***/ "./src/modules/User/mutations/index.ts":
/*!*********************************************!*\
  !*** ./src/modules/User/mutations/index.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UserSignInWithEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSignInWithEmail */ \"./src/modules/User/mutations/UserSignInWithEmail.ts\");\n/* harmony import */ var _UserSignUpWithEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSignUpWithEmail */ \"./src/modules/User/mutations/UserSignUpWithEmail.ts\");\n/* harmony import */ var _UserChangePassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserChangePassword */ \"./src/modules/User/mutations/UserChangePassword.ts\");\n/* harmony import */ var _UserChangeNotifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserChangeNotifications */ \"./src/modules/User/mutations/UserChangeNotifications.ts\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  UserSignInWithEmail: _UserSignInWithEmail__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  UserSignUpWithEmail: _UserSignUpWithEmail__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  UserChangePassword: _UserChangePassword__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  UserChangeNotifications: _UserChangeNotifications__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Vc2VyL211dGF0aW9ucy9pbmRleC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1VzZXIvbXV0YXRpb25zL2luZGV4LnRzP2M5MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXJTaWduSW5XaXRoRW1haWwgZnJvbSBcIi4vVXNlclNpZ25JbldpdGhFbWFpbFwiO1xuaW1wb3J0IFVzZXJTaWduVXBXaXRoRW1haWwgZnJvbSBcIi4vVXNlclNpZ25VcFdpdGhFbWFpbFwiO1xuaW1wb3J0IFVzZXJDaGFuZ2VQYXNzd29yZCBmcm9tIFwiLi9Vc2VyQ2hhbmdlUGFzc3dvcmRcIjtcbmltcG9ydCBVc2VyQ2hhbmdlTm90aWZpY2F0aW9ucyBmcm9tIFwiLi9Vc2VyQ2hhbmdlTm90aWZpY2F0aW9uc1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBVc2VyU2lnbkluV2l0aEVtYWlsLFxuICBVc2VyU2lnblVwV2l0aEVtYWlsLFxuICBVc2VyQ2hhbmdlUGFzc3dvcmQsXG4gIFVzZXJDaGFuZ2VOb3RpZmljYXRpb25zXG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/User/mutations/index.ts\n");

/***/ }),

/***/ "./src/utils/auth.ts":
/*!***************************!*\
  !*** ./src/utils/auth.ts ***!
  \***************************/
/*! exports provided: getUser, generateToken, authenticate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUser\", function() { return getUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateToken\", function() { return generateToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authenticate\", function() { return authenticate; });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ \"./src/models/index.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_2___default.a.config();\nfunction getUser(_x) {\n  return _getUser.apply(this, arguments);\n}\n\nfunction _getUser() {\n  _getUser = _asyncToGenerator(function* (token) {\n    if (!token) return {\n      user: null\n    };\n\n    try {\n      const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.verify(token.substring(4), process.env.JWT_SECRET);\n      const user = yield _models__WEBPACK_IMPORTED_MODULE_3__[\"User\"].findOne({\n        _id: decodedToken.id\n      });\n      return {\n        user\n      };\n    } catch (err) {\n      return {\n        user: null\n      };\n    }\n  });\n  return _getUser.apply(this, arguments);\n}\n\nfunction generateToken(user) {\n  return `JWT ${jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n    id: user._id\n  }, process.env.JWT_SECRET)}`;\n}\nfunction authenticate(plainTextPassword) {\n  return bcrypt__WEBPACK_IMPORTED_MODULE_0___default.a.compare(plainTextPassword, this.password);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYXV0aC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlscy9hdXRoLnRzP2UzM2YiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykgeyB0cnkgeyB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7IHZhciB2YWx1ZSA9IGluZm8udmFsdWU7IH0gY2F0Y2ggKGVycm9yKSB7IHJlamVjdChlcnJvcik7IHJldHVybjsgfSBpZiAoaW5mby5kb25lKSB7IHJlc29sdmUodmFsdWUpOyB9IGVsc2UgeyBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7IH0gfVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTsgZnVuY3Rpb24gX25leHQodmFsdWUpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpOyB9IGZ1bmN0aW9uIF90aHJvdyhlcnIpIHsgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7IH0gX25leHQodW5kZWZpbmVkKTsgfSk7IH07IH1cblxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9tb2RlbHNcIjtcbmRvdGVudi5jb25maWcoKTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyKF94KSB7XG4gIHJldHVybiBfZ2V0VXNlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfZ2V0VXNlcigpIHtcbiAgX2dldFVzZXIgPSBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKHRva2VuKSB7XG4gICAgaWYgKCF0b2tlbikgcmV0dXJuIHtcbiAgICAgIHVzZXI6IG51bGxcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IGp3dC52ZXJpZnkodG9rZW4uc3Vic3RyaW5nKDQpLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKTtcbiAgICAgIGNvbnN0IHVzZXIgPSB5aWVsZCBVc2VyLmZpbmRPbmUoe1xuICAgICAgICBfaWQ6IGRlY29kZWRUb2tlbi5pZFxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1c2VyXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcjogbnVsbFxuICAgICAgfTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gX2dldFVzZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVG9rZW4odXNlcikge1xuICByZXR1cm4gYEpXVCAke2p3dC5zaWduKHtcbiAgICBpZDogdXNlci5faWRcbiAgfSwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCl9YDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhdXRoZW50aWNhdGUocGxhaW5UZXh0UGFzc3dvcmQpIHtcbiAgcmV0dXJuIGJjcnlwdC5jb21wYXJlKHBsYWluVGV4dFBhc3N3b3JkLCB0aGlzLnBhc3N3b3JkKTtcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/auth.ts\n");

/***/ }),

/***/ "./src/utils/escapeRegex.ts":
/*!**********************************!*\
  !*** ./src/utils/escapeRegex.ts ***!
  \**********************************/
/*! exports provided: escapeRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"escapeRegex\", function() { return escapeRegex; });\n// https://stackoverflow.com/a/2593661/710693\nconst escapeRegex = str => `${str}`.replace(/[.?*+^$[\\]\\\\(){}|-]/g, \"\\\\$&\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZXNjYXBlUmVnZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZXNjYXBlUmVnZXgudHM/NzcyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjU5MzY2MS83MTA2OTNcbmV4cG9ydCBjb25zdCBlc2NhcGVSZWdleCA9IHN0ciA9PiBgJHtzdHJ9YC5yZXBsYWNlKC9bLj8qK14kW1xcXVxcXFwoKXt9fC1dL2csIFwiXFxcXCQmXCIpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/escapeRegex.ts\n");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


/***/ }),

/***/ "@entria/graphql-mongoose-loader":
/*!**************************************************!*\
  !*** external "@entria/graphql-mongoose-loader" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@entria/graphql-mongoose-loader");

/***/ }),

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@koa/cors");

/***/ }),

/***/ "@koa/router":
/*!******************************!*\
  !*** external "@koa/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@koa/router");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "dataloader":
/*!*****************************!*\
  !*** external "dataloader" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dataloader");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "graphql-playground-middleware-koa":
/*!****************************************************!*\
  !*** external "graphql-playground-middleware-koa" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-playground-middleware-koa");

/***/ }),

/***/ "graphql-relay":
/*!********************************!*\
  !*** external "graphql-relay" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-relay");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),

/***/ "koa-graphql":
/*!******************************!*\
  !*** external "koa-graphql" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-graphql");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-helmet");

/***/ }),

/***/ "koa-logger":
/*!*****************************!*\
  !*** external "koa-logger" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-logger");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });