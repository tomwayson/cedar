/**
* @esri/cedar - v1.0.0-beta - Tue Oct 10 2017 02:09:11 GMT-0700 (PDT)
* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
* Apache-2.0
*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.cedar = factory());
}(this, (function () { 'use strict';

/**
 * Merges n objects
 * @param  {object} source Empty object that other objects will be merged into
 * @return {object}        Merged objects
 */
function deepMerge(source) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var arrOfObjs = args.slice();
    for (var i in arrOfObjs) {
        if (i) {
            entries(arrOfObjs[i]).forEach(function (p) {
                if (Array.isArray(source)) {
                    source.push(_arrOrObj(p.value));
                }
                else {
                    source[p.key] = _arrOrObj(p.value);
                }
            });
        }
    }
    return source;
}
function _arrOrObj(val) {
    return Array.isArray(val)
        ? deepMerge([], val)
        : typeof val === 'object'
            ? deepMerge({}, val)
            : val;
}
/**
 * Iterates over an object and produces an array of key/val pairs
 * @param  {object} obj Object to iterate over
 * @return {array}     Array of key, val pairs.
 */
function entries(obj) {
    var pairs = [];
    for (var key in obj) {
        if (key) {
            pairs.push({ key: key, value: obj[key] });
        }
    }
    return pairs;
}

var area = {
    type: 'serial',
    theme: 'light',
    graphs: [{
            fillAlphas: 0.6,
            lineAlpha: 1,
            dashLengthField: 'dashLengthLine',
            useLineColorForBulletBorder: true,
            bulletBorderThickness: 3,
            bullet: 'circle',
            bulletBorderAlpha: 0.8,
            bulletAlpha: 0.8,
            bulletColor: '#FFFFFF',
        }],
    legend: {
        horizontalGap: 10,
        position: 'bottom',
        useGraphSettings: true,
        markerSize: 10
    },
    valueAxes: [{
            gridColor: '#FFFFFF',
            gridAlpha: 0.2,
            dashLength: 0,
            stackType: 'regular'
        }],
    gridAboveGraphs: true,
    startDuration: 0.1,
    startEffect: 'easeInSine',
    chartCursor: {
        categoryBalloonEnabled: false,
        cursorAlpha: 0,
        zoomable: false
    },
    categoryAxis: {
        gridPosition: 'start',
        gridAlpha: 0,
        tickPosition: 'start',
        tickLength: 20,
        guides: []
    },
    export: {
        enabled: true
    }
};

var bar = {
    type: 'serial',
    rotate: false,
    graphs: [{
            fillAlphas: 0.2,
            lineAlpha: 0.8,
            type: 'column',
            color: '#000000'
        }],
    theme: 'light',
    legend: {
        horizontalGap: 10,
        maxColumns: 1,
        position: 'right',
        useGraphSettings: true,
        markerSize: 10
    },
    gridAboveGraphs: false,
    startDuration: 0.3,
    startEffect: 'easeInSine',
    chartCursor: {
        categoryBalloonEnabled: false,
        cursorAlpha: 0,
        zoomable: false
    },
    categoryAxis: {
        axisColor: '#DADADA',
        gridAlpha: 0.07,
        gridPosition: 'start',
        // gridAlpha: 0,
        guides: [],
        position: 'bottom',
        tickPosition: 'start',
        tickLength: 0
    },
    valueAxes: [{
            gridColor: '#FFFFFF',
            gridAlpha: 0.2,
            dashLength: 0,
            stackType: 'regular'
        }],
    export: {
        enabled: true
    }
};

var horizontal = {
    type: 'serial',
    rotate: true,
    graphs: [{
            fillAlphas: 0.2,
            lineAlpha: 0.8,
            type: 'column',
            color: '#000000'
        }],
    theme: 'light',
    legend: {
        horizontalGap: 10,
        maxColumns: 1,
        position: 'right',
        useGraphSettings: true,
        markerSize: 10
    },
    gridAboveGraphs: false,
    startDuration: 0.3,
    startEffect: 'easeInSine',
    chartCursor: {
        categoryBalloonEnabled: false,
        cursorAlpha: 0,
        zoomable: false
    },
    categoryAxis: {
        axisColor: '#DADADA',
        gridAlpha: 0.07,
        gridPosition: 'start',
        // gridAlpha: 0,
        tickPosition: 'start',
        tickLength: 0,
        guides: [],
        position: 'bottom'
    },
    valueAxes: [{
            gridColor: '#FFFFFF',
            gridAlpha: 0.2,
            dashLength: 0,
            stackType: 'regular'
        }],
    export: {
        enabled: true
    }
};

var line = {
    type: 'serial',
    theme: 'light',
    graphs: [{
            fillAlphas: 0,
            lineAlpha: 1,
            dashLengthField: 'dashLengthLine',
            useLineColorForBulletBorder: true,
            bulletBorderThickness: 3,
            bullet: 'circle',
            bulletBorderAlpha: 0.8,
            bulletAlpha: 0.8,
            bulletColor: '#FFFFFF',
        }],
    legend: {
        horizontalGap: 10,
        position: 'bottom',
        useGraphSettings: true,
        markerSize: 10
    },
    valueAxes: [{
            gridColor: '#FFFFFF',
            gridAlpha: 0.2,
            dashLength: 0
        }],
    gridAboveGraphs: true,
    startDuration: 0.1,
    startEffect: 'easeInSine',
    chartCursor: {
        categoryBalloonEnabled: false,
        cursorAlpha: 0,
        zoomable: false
    },
    categoryAxis: {
        gridPosition: 'start',
        gridAlpha: 0,
        tickPosition: 'start',
        tickLength: 20,
        guides: []
    },
    export: {
        enabled: true
    }
};

var pie = {
    type: 'pie',
    innerRadius: '30%',
    startDuration: 0,
    graphs: [{}],
    groupPercent: 5,
    balloon: {
        fixedPosition: true
    },
    legend: {
        position: 'bottom',
        autoMargins: false
    },
};

var radar = {
    theme: 'light',
    type: 'radar',
    valueAxes: [{
            gridType: 'circles',
            minimum: 0
        }],
    polarScatter: {
        minimum: 0,
        maximum: 400,
        step: 1
    },
    startDuration: 0,
    graphs: [{}],
    groupPercent: 5,
    balloon: {
        fixedPosition: true
    },
    legend: {
        position: 'right',
        marginRight: 100,
        autoMargins: false
    },
};

var scatter = {
    type: 'xy',
    autoMarginOffset: 20,
    startDuration: 0,
    valueAxes: [{
            position: 'bottom',
            axisAlpha: 0
        }, {
            axisAlpha: 0,
            position: 'left'
        }],
    chartScrollbar: {
        scrollbarHeight: 2,
        offset: -1,
        backgroundAlpha: 0.1,
        backgroundColor: '#888888',
        selectedBackgroundColor: '#67b7dc',
        selectedBackgroundAlpha: 1
    },
    chartCursor: {
        fullWidth: true,
        valueLineEabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5,
        cursorAlpha: 0
    },
    graphs: [{
            fillAlphas: 0,
            lineAlpha: 0,
            bullet: 'circle',
            bulletBorderAlpha: 0.2,
            bulletAlpha: 0.8,
            color: '#000000',
            valueField: null,
            xField: null,
            yField: null,
        }]
};

var timeline = {
    type: 'serial',
    theme: 'light',
    marginRight: 40,
    marginLeft: 40,
    autoMarginOffset: 20,
    mouseWheelZoomEnabled: true,
    dataDateFormat: 'YYYY-MM-DD',
    valueAxes: [
        {
            id: 'v1',
            axisAlpha: 0,
            position: 'left',
            ignoreAxisWidth: true
        }
    ],
    balloon: {
        borderThickness: 1,
        shadowAlpha: 0
    },
    graphs: [
        {
            id: 'g1',
            balloon: {
                drop: true,
                adjustBorderColor: false,
                color: '#ffffff'
            },
            bullet: 'round',
            bulletBorderAlpha: 1,
            bulletColor: '#FFFFFF',
            bulletSize: 5,
            hideBulletsCount: 50,
            lineThickness: 2,
            title: 'red line',
            useLineColorForBulletBorder: true,
            valueField: null
        }
    ],
    chartScrollbar: {
        graph: 'g1',
        oppositeAxis: false,
        offset: 30,
        scrollbarHeight: 80,
        backgroundAlpha: 0,
        selectedBackgroundAlpha: 0.1,
        selectedBackgroundColor: '#888888',
        graphFillAlpha: 0,
        graphLineAlpha: 0.5,
        selectedGraphFillAlpha: 0,
        selectedGraphLineAlpha: 1,
        autoGridCount: true,
        color: '#AAAAAA'
    },
    chartCursor: {
        pan: true,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        cursorAlpha: 1,
        cursorColor: '#258cbb',
        limitToGraph: 'g1',
        valueLineAlpha: 0.2,
        valueZoomable: true
    },
    valueScrollbar: {
        oppositeAxis: false,
        offset: 50,
        scrollbarHeight: 10
    },
    categoryField: 'date',
    categoryAxis: {
        parseDates: true,
        dashLength: 1,
        minorGridEnabled: true
    },
    export: {
        enabled: true
    }
};

var specs = {
    bar: bar,
    horizontal: horizontal,
    line: line,
    area: area,
    pie: pie,
    radar: radar,
    scatter: scatter,
    timeline: timeline
};

function renderChart(elementId, config, data) {
    if (config.type === 'custom') {
        var chart_1 = AmCharts.makeChart(elementId, config.specification);
        return;
    }
    // Clone/copy spec and data
    var spec = fetchSpec(config.type);
    var copyData = clone$1(data);
    // Set the data and defaults
    spec.dataProvider = copyData;
    spec.categoryField = 'categoryField';
    // Apply the series
    if (!!config.datasets) {
        spec = fillInSpec(spec, config);
    }
    // Apply overrides
    if (!!config.overrides) {
        spec = deepMerge({}, spec, config.overrides);
    }
    var chart = AmCharts.makeChart(elementId, spec);
    return;
}
function fillInSpec(spec, config) {
    // Grab the graphSpec from the spec
    var graphSpec = spec.graphs.pop();
    // Iterate over datasets
    config.datasets.forEach(function (dataset, d) {
        // For each dataset iterate over series
        config.series.forEach(function (series, s) {
            if (dataset.id === series.datasetId) {
                var graph = clone$1(graphSpec);
                // Set graph title
                graph.title = series.value.label;
                // TODO: Look at all fields
                graph.valueField = series.value.field + "_" + d;
                graph.balloonText = graph.title + " [[" + spec.categoryField + "]]: <b>[[" + graph.valueField + "]]</b>";
                graph.labelText = "[[" + series.value.field + "]]";
                spec.titleField = 'categoryField';
                spec.valueField = graph.valueField;
                // Group vs. stack
                if (!!series.group) {
                    graph.newStack = true;
                }
                // x/y types (scatter, bubble)
                if (spec.type === 'xy' && !!series.category && !!series.value) {
                    graph.xField = series.category.field;
                    graph.yField = series.value.field;
                    graph.balloonText = series.name + " [[" + series.label + "]] <br/>\n          " + series.category.label + ": [[" + series.category.field + "]],\n          " + series.value.label + ": [[" + series.value.field + "]]";
                    graph.labelText = '';
                }
                // Bubble charts
                if (!!graphSpec.valueField && !!series.size) {
                    graphSpec.valueField = series.size.field;
                    graph.balloonText = graph.balloonText + " <br/> " + series.size.label + ": [[" + graph.valueField + "]]";
                }
                spec.graphs.push(graph);
            }
        });
    });
    return spec;
}
function fetchSpec(type) {
    return clone$1(specs[type]);
}
function clone$1(json) {
    return JSON.parse(JSON.stringify(json));
}

var render = {
    renderChart: renderChart,
    fillInSpec: fillInSpec,
    fetchSpec: fetchSpec
};

function cedarAmCharts(elementId, spec, data) {
    if ((!elementId || !spec || !data) && (spec.type && spec.type !== 'custom')) {
        var err = new Error('Element Id, specification, and data are all required.');
        throw err;
    }
    if (spec.type && spec.type === 'custom') {
        return render.renderChart(elementId, spec);
    }
    return render.renderChart(elementId, spec, data);
}

function _defaultTransformFunc(feature) {
    return feature.attributes;
}
function getTransformFunc(transformFunc) {
    return typeof transformFunc === 'function' ? transformFunc : _defaultTransformFunc;
}
function buildIndex(joinKeys, featureSets, transformFuncs) {
    var index = {};
    featureSets.forEach(function (featureSet, i) {
        var transformFunc = getTransformFunc(transformFuncs[i]);
        featureSet.features.forEach(function (features, j) {
            var idx = features.attributes[joinKeys[i]];
            if (index[idx] === undefined) {
                index[idx] = [];
            }
            index[idx].push(transformFunc(features));
        });
    });
    return index;
}
function flattenFeatures(featureSets, joinKeys, transformFuncs) {
    // TODO: Transform data
    var features = [];
    // If we aren't joining, but we are merging
    if (joinKeys.length === 0) {
        featureSets.forEach(function (featureSet, i) {
            var transformFunc = getTransformFunc(transformFuncs[i]);
            featureSet.features.forEach(function (feature, j) {
                features.push(transformFunc(feature));
            });
        });
        return features;
    }
    // Otherwise join
    var index = buildIndex(joinKeys, featureSets, transformFuncs);
    var key = joinKeys[0]; // TODO: support different `category` keys
    var keys = Object.keys(index);
    keys.forEach(function (indKey, i) {
        var idxArr = index[indKey];
        var feature = { categoryField: idxArr[0][key] };
        idxArr.forEach(function (idx, k) {
            var attrKeys = Object.keys(idx);
            attrKeys.forEach(function (ak, j) {
                var attr = ak + "_" + k;
                feature[attr] = idx[ak];
            });
        });
        features.push(feature);
    });
    return features;
}

/**
 * Convert feature service response to an array
 * @param  {object}    fs Feature service response
 * @return {array}    response object as an array
 */

/**
 * Convert array of attributes into a fs response
 * @param  {any[]} arr Array of attribute objects
 * @return {object}       FS response
 */

/**
 * Handle FS errors && response
 * @param  {object}          response Response from a fetch
 * @return {Promise<any>}          Returns a promise that resolves as JSON
 */
function checkStatusAndParseJson(response) {
    var err;
    if (response.status >= 200 && response.status < 300) {
        // check if this is a 200, but really a 400 error
        return response.json().then(function (json) {
            if (json.error) {
                err = new Error(json.error.message);
                err.code = json.error.code || 404;
                err.response = response;
                throw err;
            }
            else {
                return json;
            }
        });
    }
    else {
        // response has a non 200 http code
        err = new Error("Got " + response.status + " " + response.statusText);
        throw err;
    }
}
/**
 * Fetch data from a feature service
 * @param  {string}       url     URL to fetch against
 * @param  {any}          options Potential options passed into fetch
 * @return {Promise<any>}         FS response as JSON
 */
function getData(url, options) {
    var opts = options || {};
    return fetch(url, opts)
        .then(function (response) {
        return checkStatusAndParseJson(response);
    });
}

function defaultQuery() {
    return {
        where: '1=1',
        returnGeometry: false,
        returnDistinctValues: false,
        returnIdsOnly: false,
        returnCountOnly: false,
        outFields: '*',
        sqlFormat: 'standard',
        f: 'json'
    };
}
function serializeQueryParams(params) {
    var str = [];
    for (var param in params) {
        if (params.hasOwnProperty(param)) {
            var val = params[param];
            if (typeof val !== 'string') {
                val = JSON.stringify(val);
            }
            str.push(encodeURIComponent(param) + "=" + encodeURIComponent(val));
        }
    }
    return str.join('&');
}
function createFeatureServiceRequest(dataset) {
    var query = deepMerge({}, defaultQuery(), dataset.query);
    // Handle bbox
    if (query.bbox) {
        // make sure a geometry was not also passed in
        if (query.geometry) {
            throw new Error('Dataset.query can not have both a geometry and a bbox specified');
        }
        // Get the bbox (w,s,e,n)
        var bboxArr = query.bbox.split(',');
        // Remove it so it's not serialized as-is
        delete query.bbox;
        // cook it into a json string
        query.geometry = JSON.stringify({
            xmin: bboxArr[0],
            ymin: bboxArr[2],
            xmax: bboxArr[1],
            ymax: bboxArr[3]
        });
        // set spatial ref as geographic
        query.inSR = '4326';
    }
    if (!!query.outStatistics && typeof query.outStatistics !== 'string') {
        query.outStatistics = JSON.stringify(query.outStatistics);
    }
    var builtUrl = dataset.url + "/query?" + serializeQueryParams(query);
    if (dataset.token) {
        builtUrl = builtUrl + "&token=" + dataset.token;
    }
    return builtUrl;
}

function clone(json) {
    return JSON.parse(JSON.stringify(json));
}
var Chart = /** @class */ (function () {
    function Chart(options) {
        // Clone options
        var opts = clone(options || {});
        // If there are datasets...
        if (!!opts.datasets) {
            this.datasets = opts.datasets;
        }
        // If there are series...
        if (!!opts.series) {
            this.series = opts.series;
        }
        if (!!opts) {
            this.cedarSpecification = opts;
        }
    }
    Object.defineProperty(Chart.prototype, "datasets", {
        // Setters and getters
        // Datasets
        get: function () {
            return this._datasets;
        },
        set: function (val) {
            // TODO: type any[] can't be a function, why is this code checking for that
            if (typeof val !== 'function' && (val instanceof Array)) {
                this._datasets = clone(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "series", {
        // Series
        get: function () {
            return this._series;
        },
        set: function (val) {
            // TODO: type any[] can't be a function, why is this code checking for that
            if (typeof val !== 'function' && (val instanceof Array)) {
                this._series = deepMerge([], val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "data", {
        // Data
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = deepMerge([], data);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "chartSpecification", {
        // Chart Specification
        get: function () {
            return this._chartSpecification;
        },
        set: function (chartSpec) {
            this._chartSpecification = clone(chartSpec);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chart.prototype, "cedarSpecification", {
        // Cedar Spec
        get: function () {
            return this._cedarSpecification;
        },
        set: function (spec) {
            // NOTE: we can only use clone here if spec is JSON
            this._cedarSpecification = clone(spec);
        },
        enumerable: true,
        configurable: true
    });
    Chart.prototype.show = function (domNode, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var opts = clone(options);
        var requests = [];
        var joinKeys = [];
        var transformFunctions = [];
        if (!!this.datasets && !!this.series) {
            this.datasets.forEach(function (dataset, i) {
                requests.push(getData(createFeatureServiceRequest(dataset)));
                if (!dataset.merge) {
                    joinKeys.push(_this.series[i].category.field);
                }
            });
            //
            // for (const series of this.series) {
            //   joinKeys.push(series.category.field)
            // }
        }
        Promise.all(requests)
            .then(function (responses) {
            _this.data = flattenFeatures(responses, joinKeys, transformFunctions);
            cedarAmCharts(domNode, _this.cedarSpecification, _this.data);
        });
    };
    return Chart;
}());

var index = {
    Chart: Chart
};

return index;

})));
//# sourceMappingURL=cedar.js.map
