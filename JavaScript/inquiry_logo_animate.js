(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 210,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.ロゴ_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231815").s().p("Ag6CiQgsgagagrQgbgrAAgyQAAgvAagtQAagqAsgbQAtgZAwAAQAWAAAWAGQAYAGARAKQAVALAQAPIAAAfQgXgagggPQghgQgjAAQghAAgdANQgdANgYAYQgXAYgNAeQgNAgAAAeQAAAfANAeQANAeAXAWQAYAXAfAOQAeAOAeAAQAVAAAYgIQAXgGAVgNQAUgNAOgRIAAAhQg3AthDAAQgwAAgsgZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-18.7,31.3,37.5);


(lib.ロゴ_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231815").s().p("AhyELQgfgIgegQQgegRgXgVIAAgvQAfAnAyAXQAyAXAyAAQAvAAAsgUQAtgTAigjQAigkATgsQATgsAAgvQAAgvgTgrQgTgqgigiQgkgigtgUQgrgUguAAQggAAgjAKQgjALgdATQgeASgUAYIAAgvQBShDBhAAQBHAABBAlQBAAlAnBAQAnBAAABIQAABJgnBAQglA/hBAmQhBAlhJAAQgfAAghgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,-27.5,45.9,55.2);


(lib.ロゴ_center = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AguAuQgTgSAAgcQAAgaATgTQAUgUAaAAQAbAAAUAUQATATAAAaQAAAbgTATQgUAUgbAAQgaAAgUgUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.6,-6.6,13.3,13.3);


(lib.moji = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAhQgNgMAAgVQAAgTANgOQALgLAQAAQAPAAAMAMQALALAAAVIg9AAQAAAQAIAIQAHAHAJAAQALAAAFgFQAFgFAAgHIARAAQgDAOgHAHQgKAKgSAAQgRAAgLgMgAgOgYQgGAFgBAIIAqAAQABgIgHgGQgFgFgKAAQgIAAgGAGg");
	this.shape.setTransform(127.7,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAsIAAhWIAQAAIAAAXIAIgMQALgMAWAAIAAASIgJgBQgMgBgIAKQgJAJgDAIIAAAsg");
	this.shape_1.setTransform(119.8,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeAlQgHgHAAgLIAAg+IAQAAIAAA5QAAAJAFAFQADAEAIgBQAIAAAIgHQALgMAAgMIAAgrIAQAAIAABVIgQAAIAAgPQgMARgQAAQgRAAgHgHg");
	this.shape_2.setTransform(110.8,18.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA0QgHgHAAgKIAAgyIgTAAIAAgNIATAAIAAgeIANAAIAAAeIAaAAIAAANIgaAAIAAAxQAAAEAEAEQADADAHAAQALAAAIgFIAAAPQgIAEgLAAQgOAAgGgHg");
	this.shape_3.setTransform(102.1,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_4.setTransform(96.6,16.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAlQgIgHAAgLIAAg+IAQAAIAAA5QAAAJAEAFQAFAEAHgBQAHAAAJgHQALgMAAgMIAAgrIAQAAIAABVIgQAAIAAgPQgMARgQAAQgRAAgGgHg");
	this.shape_5.setTransform(89.5,18.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgjA1QgTgTAAgiQAAggATgUQAPgPAWAAQAXAAANAOQAOAOABAVIgTAAQgBgQgJgJQgJgJgNAAQgNAAgKALQgPAOAAAbQAAAdAPAOQAKAKANAAQAPAAAJgIQALgLAAgVIASAAQAAAbgPAPQgNANgZAAQgWAAgPgPg");
	this.shape_6.setTransform(77.9,16.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcBFIAAgOIApAAIAAh7IAQAAIAACJg");
	this.shape_7.setTransform(52.4,18.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgsBXIAAhLQgMAYgSARIgLgNQAdgcALghIgkAAIAAgPIAlAAIAAgZQgTAEgLABIgHgPQAogDAfgMIAJAOQABAGgFgEIgXAGIAAAcIAhAAIAAAPIghAAIAAAQQAXAJALAOIgJAPQgOgQgLgIIAABOgAANBTIAAiSIBKAAIAACNIgQAAIAAgKIgrAAIAAAPgAAcA1IArAAIAAhlIgrAAg");
	this.shape_8.setTransform(37.6,16.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgcBFIAAiJIA5AAIAAAOIgpAAIAAB7g");
	this.shape_9.setTransform(23.3,13.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZBKQAhgIAAgiIAAggIgIABQAAAFgDgCIgEgQIAKAAIAQgiIgcAAIAAgPIAjAAIAAgcIAOAAQAGAAgFAFIAAAXIAsAAIAAAPIgxAAIgRAhIAogBIgNgPIAMgJQARAQALATIgOAIIgGgHIgJABIAAA/QABAHAFAAIAHAAQAEAAABgHIABgMIAQAFIgCANQgBAQgMAAIgVAAQgPAAAAgOIAAhGIgSAAIAAAhQAAAugqALgAg5BZIAAhUIgbADQgBAFgCgCIgDgQIAPAAIANgPIgcgVIAJgNIAGAFIAYgoIANAIQAGADgHACIgYAhIALAJIAUgfIAMAIQAGAEgHgBIgjAvIAagBIgHgMIANgHQAOAUAEALIgPAHIgDgIIgSABIAABVgAhYBDQAFgYABgXIARACQAEACgGACQAAAWgHAagAgkATIANgDQAJAPACAYIgPAEQgDgZgGgPg");
	this.shape_10.setTransform(7.9,16.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABABFIhZAJQAAAGgDgDIgJgWIAUAAQAQgoABgTIgnAAIAAgQICAAAIAAAQIhEAAQgFASgRApIA4gFQgJgOgJgLIARgJQATAWASAiIgSAMIgJgTgAhABXIAAhYQgFAIgLALIgKgRQAgggAGg4IASAGQAEADgHABQgDAWgJAWQAJACgJADIAABzgAgYg1IAAgRIBhAAIAAARg");
	this.shape_11.setTransform(-12.2,16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAEA6QAvgRABgpQADgfgRgOQgNgMgYAAQgWABgPASQgRAUAAAaQAAASAEALQAFAIAGABQANAAAIgZQAJgVAHgzIAPACQgIBEgQAbQgLASgSAAQgKAAgJgNQgOgTACgeQADgZAQgWQAXgcAfAAQAhABATAVQAQAUAAAbQAAAWgKATQgNAWggAPg");
	this.shape_12.setTransform(-30.2,16.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHBYIAAgqIgeAAIAAgPIAeAAIAAgvQgWAwgzAeIgJgRQA1gdAXg1IhEAAIAAgPIBKAAIAAgjIANAAQAGAAgFAEIAAAfIBLAAIAAAPIhGAAQAbAtAzAgIgJARQgwgdgagsIAAAvIAgAAIAAAPIggAAIAAAqg");
	this.shape_13.setTransform(-48.5,16);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag8BLIAAiVIB5AAIAACSIgSAAIAAgLIhVAAIAAAOgAgqAuIBVAAIAAguIhVAAgAgqgPIBVAAIAAgsIhVAAg");
	this.shape_14.setTransform(-68.4,16.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgaAhQgNgMAAgVQAAgTANgOQALgLAQAAQAPAAAMAMQAMALgBAVIg9AAQAAAQAIAIQAHAHAJAAQALAAAFgFQAFgFAAgHIARAAQgDAOgHAHQgKAKgSAAQgRAAgLgMgAgOgYQgGAFgBAIIAqAAQAAgIgGgGQgFgFgKAAQgIAAgGAGg");
	this.shape_15.setTransform(174.9,-6.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_16.setTransform(167.8,-9.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZAiQgOgOgBgUQAAgUANgMQAMgMAPAAQATAAAJAKQAJAIABANIgRAAQgBgHgGgFQgEgFgJAAQgIAAgGAGQgJAKAAAOQAAAQAIAIQAGAHAIAAQALAAAGgHQAGgGAAgKIARAAQAAAQgKALQgKAKgUAAQgPAAgKgLg");
	this.shape_17.setTransform(160.7,-6.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgcAsIAAhWIAQAAIAAAXIAIgMQALgMAWAAIAAASIgJgBQgMgBgIALQgJAJgDAHIAAAsg");
	this.shape_18.setTransform(152.7,-6.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGBCIAAhWIANAAIAABWgAgGgtIAAgUIANAAIAAAUg");
	this.shape_19.setTransform(146.6,-9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgjA1QgTgTAAgiQAAggATgUQAPgPAWAAQAXAAANAOQAOAOABAVIgTAAQgBgQgJgJQgJgJgNAAQgNAAgKALQgPAOAAAbQAAAdAPAOQAKAKANAAQAPAAAJgIQALgLAAgVIASAAQAAAbgPAPQgNANgZAAQgWAAgPgPg");
	this.shape_20.setTransform(137.9,-9.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgcBFIAAgOIApAAIAAh7IAQAAIAACJg");
	this.shape_21.setTransform(112.4,-7.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag6BZIAAgiIgdAAIAAgMIAdAAIAAgOIgMAAIgOAAIAAhDIAaAAIAAgOIgbAAIAAgMIAbAAIAAgYIANAAQAGABgFADIAAAUIAbAAIAAAMIgbAAIAAAOIAZAAIAABDIgZAAIAAAOIAdAAIAAAMIgdAAIAAAigAgsAQIAMAAIAAgQIgMAAgAhGAQIAMAAIAAgQIgMAAgAgsgJIAMAAIAAgRIgMAAgAhGgJIAMAAIAAgRIgMAAgAA+BZIgDgNIAFAAQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBAAgBIAAgiIgLAAIAAAtIgOAAIAAgtIgLAAIAAAtIgNAAIAAgtIgMAAIAAAyIgLAAIAAhlIBWAAIAABZQAAAMgJAAgAA3AbIALAAIAAgbIgLAAgAAeAbIALAAIAAgbIgLAAgAAFAbIAMAAIAAgbIgMAAgAgQglQAdgTAMggIAQACQADADgGABIAAACQATAaAgANIgHARQghgRgSgcQgOAcgbASgAAIgYIAAgNIA1AAIAAANg");
	this.shape_22.setTransform(97.9,-9.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgcBFIAAiKIA5AAIAAAPIgpAAIAAB7g");
	this.shape_23.setTransform(83.3,-11.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag4BMQAfgQAAgZIAAghIAPAAQAGABgGADIAAAgQAAAhgjASgAhKBWIgPgMQARgbAMggIAOAJQgMAkgNAWQAAABAAABQAAABAAAAQAAABgBAAQAAAAgBAAIgBAAgAA3BVQgNAAAAgNIAAhHIAPAAQAGABgFAEIAAA6QAAAGAFAAIAFAAQAEAAABgFIABgMIAQADQgBALgCAJQgDAJgJAAgAAIBNIAAhKIAPAAQAGAAgGAEIAABGgAhVgSIAKgPQARAKAKAJIgLAOIgagSgAA7gNIhbAHQAAAGgDgDIgGgSIAbgBIAOgfIgpAAIAAgOIAxAAIAAgVIARAAQAIABgHAFIAAAPIA6AAIAAAOIhCAAIgSAeIAugCIgRgNIAMgIQAaAPASAUIgNALgAhShBIAMgOQAOAJAKALIgLAPQgLgMgOgJg");
	this.shape_24.setTransform(67.9,-9.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AADA0QgbAag0AIIgHgSQA0gJAXgSQgTgWgLgTIARgHQALAVAMANQAMgPAJgWIAQAJQAFABgHABQgKAXgMAPQAVASAwAKIgHAUQgugLgcgYgAAVgdIAMgMQATAUAcAOIgNAOQgbgNgTgXgAhMgHQAdgNASgXIAPAMQAAABAAAAQAAAAAAABQgBAAgBAAQgBABgBAAQgRAYggALgAhOgvIAAgPIBIAAIAAgYIAQAAQAHACgHAFIAAARIBKAAIAAAPg");
	this.shape_25.setTransform(47.7,-9.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAEA6QAvgRABgpQADgfgRgOQgNgLgYAAQgWAAgPASQgRAUAAAaQAAATAEAJQAFAJAGAAQANAAAIgYQAJgVAHgzIAPACQgIBEgQAbQgLASgSAAQgKAAgJgNQgOgTACgeQADgZAQgWQAXgcAfAAQAhABATAVQAQATAAAcQAAAXgKARQgNAXggAPg");
	this.shape_26.setTransform(29.8,-9.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhKBPIAAgSIBCAAIAAhIIhLAAIAAgRIBLAAIAAgyIAPAAQAIACgHAFIAAArIBMAAIAAARIhMAAIAABIIBAAAIAAASg");
	this.shape_27.setTransform(11.5,-9.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhMBSIAAiiICYAAIAACUQABALgMAAIgVAAIgEgPIARAAQABAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAAh/Ih4AAIAACUgAgmA4IAAhDIBKAAIAAA9IgQAAIAAgFIgqAAIAAALgAgWAgIAqAAIAAggIgqAAgAgygfIAAgPIBiAAIAAAPg");
	this.shape_28.setTransform(-8.4,-8.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgnBZIAAhHQgVALgXAGIgGgOQAWgFAcgPIAAgDIALAAQAQgJAMgKIhSAAIAAgPIBEAAIAAgSIgwAAIAAgPIAwAAIAAgTIAOAAQAFABgFAEIAAAOIAlAAIAAANIATgXIALAHQAGAEgHABQgPASgPANIA2AAIAAAPIhGAAQgQAOgHAFIA/AAIAABZIgPAAIAAgIIhFAAIAAAKgAgYBCIBFAAIAAgYIhFAAgAgYAeIBFAAIAAgWIhFAAgAAAgkIAPAAQAJgHAMgLIgkAAg");
	this.shape_29.setTransform(-28.6,-9.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhBBXIgPgQQAVgZAMgeIANAMQgOAfgOAYQAAABAAABQAAABAAAAQAAABAAAAQgBAAgBAAIgBAAgAgRBWIAAiIIAcAAIAIgkIAUADQADADgFABIgJAdIA1AAIAACHIgQAAIAAgLIhDAAIAAAMgAgCA7IBDAAIAAgpIhDAAgAgCADIBDAAIAAgmIhDAAgAhLgSIAJgOQAUAHAOAOIgKANQgOgKgTgKgAhGhAIAKgPQATAIAPAOIgKARQgRgQgRgIg");
	this.shape_30.setTransform(-48.8,-9.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AA6BZIAAgGIg/AAIAAAGIgPAAIAAhcIAgAAIADgQIgpAAIAAgPIBiAAIAAAPIgoAAIgEAQIAuAAIAABcgAgFBEIA/AAIAAgXIg/AAgAgFAeIA/AAIAAgUIg/AAgAg9BZIAAhJQgIAKgIAJIgKgQQAbgWAQgtIAOAIQAEADgGABQgFAQgIAQIAABdgAhPghIAAglIBMAAIAAgSIANAAQAGABgFAEIAAANIBNAAIAAAgIgQAAIAAgRIiHAAIAAAWg");
	this.shape_31.setTransform(-68.8,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.4,-21.3,262.5,49.3);


// stage content:
(lib.inquiry_logo_animate = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// ロゴ_center
	this.instance = new lib.ロゴ_center();
	this.instance.setTransform(173.6,-47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-43},0).wait(1).to({y:-38.4},0).wait(1).to({y:-33.7},0).wait(1).to({y:-29.1},0).wait(1).to({y:-24.5},0).wait(1).to({y:-19.9},0).wait(1).to({y:-15.2},0).wait(1).to({y:-10.6},0).wait(1).to({y:-6},0).wait(1).to({y:-1.4},0).wait(1).to({y:3.3},0).wait(1).to({y:7.9},0).wait(1).to({y:12.5},0).wait(1).to({y:17.1},0).wait(1).to({y:21.8},0).wait(1).to({y:26.4},0).wait(1).to({y:31},0).wait(1).to({y:35.6},0).wait(1).to({y:40.3},0).wait(1).to({y:44.9},0).wait(1).to({y:49.5},0).wait(1).to({y:54.1},0).wait(1).to({y:58.8},0).wait(1).to({y:63.4},0).wait(1).to({y:68},0).wait(1).to({y:72.6},0).wait(1).to({y:77.3},0).wait(1).to({y:81.9},0).wait(1).to({y:86.5},0).wait(1).to({y:91.1},0).wait(1).to({y:95.8},0).wait(1).to({y:100.4},0).wait(1).to({y:105},0).wait(12).to({y:107.6},0).wait(1).to({y:110.3},0).wait(1).to({y:112.9},0).wait(1).to({y:115.5},0).wait(1).to({y:118.2},0).wait(1).to({y:120.8},0).wait(1).to({y:123.4},0).wait(1).to({y:126.1},0).wait(1).to({y:128.7},0).wait(1).to({y:131.3},0).wait(1).to({y:133.9},0).wait(1).to({y:136.6},0).wait(1).to({y:139.2},0).wait(1).to({y:141.8},0).wait(1).to({y:144.5},0).wait(1).to({y:147.1},0).wait(1).to({y:149.7},0).wait(1).to({y:152.4},0).wait(1).to({y:155},0).wait(1));

	// ロゴ_left
	this.instance_1 = new lib.ロゴ_left();
	this.instance_1.setTransform(-57.3,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-51.3},0).wait(1).to({x:-45.2},0).wait(1).to({x:-39.1},0).wait(1).to({x:-33.1},0).wait(1).to({x:-27},0).wait(1).to({x:-20.9},0).wait(1).to({x:-14.9},0).wait(1).to({x:-8.8},0).wait(1).to({x:-2.7},0).wait(1).to({x:3.4},0).wait(1).to({x:9.4},0).wait(1).to({x:15.5},0).wait(1).to({x:21.6},0).wait(1).to({x:27.6},0).wait(1).to({x:33.7},0).wait(1).to({x:39.8},0).wait(1).to({x:45.9},0).wait(1).to({x:51.9},0).wait(1).to({x:58},0).wait(1).to({x:64.1},0).wait(1).to({x:70.1},0).wait(1).to({x:76.2},0).wait(1).to({x:82.3},0).wait(1).to({x:88.4},0).wait(1).to({x:94.4},0).wait(1).to({x:100.5},0).wait(1).to({x:106.6},0).wait(1).to({x:112.6},0).wait(1).to({x:118.7},0).wait(1).to({x:124.8},0).wait(1).to({x:130.9},0).wait(1).to({x:136.9},0).wait(1).to({x:143},0).wait(12).to({y:107.6},0).wait(1).to({y:110.3},0).wait(1).to({y:112.9},0).wait(1).to({y:115.5},0).wait(1).to({y:118.2},0).wait(1).to({y:120.8},0).wait(1).to({y:123.4},0).wait(1).to({y:126.1},0).wait(1).to({y:128.7},0).wait(1).to({y:131.3},0).wait(1).to({y:133.9},0).wait(1).to({y:136.6},0).wait(1).to({y:139.2},0).wait(1).to({y:141.8},0).wait(1).to({y:144.5},0).wait(1).to({y:147.1},0).wait(1).to({y:149.7},0).wait(1).to({y:152.4},0).wait(1).to({y:155},0).wait(1));

	// ロゴ_right
	this.instance_2 = new lib.ロゴ_right();
	this.instance_2.setTransform(365.7,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:359.6},0).wait(1).to({x:353.5},0).wait(1).to({x:347.4},0).wait(1).to({x:341.3},0).wait(1).to({x:335.2},0).wait(1).to({x:329.1},0).wait(1).to({x:323},0).wait(1).to({x:316.9},0).wait(1).to({x:310.8},0).wait(1).to({x:304.7},0).wait(1).to({x:298.6},0).wait(1).to({x:292.5},0).wait(1).to({x:286.4},0).wait(1).to({x:280.3},0).wait(1).to({x:274.2},0).wait(1).to({x:268.1},0).wait(1).to({x:262.1},0).wait(1).to({x:256},0).wait(1).to({x:249.9},0).wait(1).to({x:243.8},0).wait(1).to({x:237.7},0).wait(1).to({x:231.6},0).wait(1).to({x:225.5},0).wait(1).to({x:219.4},0).wait(1).to({x:213.3},0).wait(1).to({x:207.2},0).wait(1).to({x:201.1},0).wait(1).to({x:195},0).wait(1).to({x:188.9},0).wait(1).to({x:182.8},0).wait(1).to({x:176.7},0).wait(1).to({x:170.6},0).wait(1).to({x:164.6},0).wait(12).to({y:107.6},0).wait(1).to({y:110.3},0).wait(1).to({y:112.9},0).wait(1).to({y:115.5},0).wait(1).to({y:118.2},0).wait(1).to({y:120.8},0).wait(1).to({y:123.4},0).wait(1).to({y:126.1},0).wait(1).to({y:128.7},0).wait(1).to({y:131.3},0).wait(1).to({y:133.9},0).wait(1).to({y:136.6},0).wait(1).to({y:139.2},0).wait(1).to({y:141.8},0).wait(1).to({y:144.5},0).wait(1).to({y:147.1},0).wait(1).to({y:149.7},0).wait(1).to({y:152.4},0).wait(1).to({y:155},0).wait(1));

	// 文字
	this.instance_3 = new lib.moji();
	this.instance_3.setTransform(148.7,13.2,1,1,0,0,0,52.3,4.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50).to({_off:false},0).wait(1).to({regX:50.7,regY:3.3,x:147.1,y:17.2},0).wait(1).to({y:22.3},0).wait(1).to({y:27.4},0).wait(1).to({y:32.4},0).wait(1).to({y:37.5},0).wait(1).to({y:42.6},0).wait(1).to({y:47.7},0).wait(1).to({y:52.8},0).wait(1).to({y:57.9},0).wait(1).to({y:62.9},0).wait(1).to({y:68},0).wait(1).to({y:73.1},0).wait(1).to({y:78.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.7,50.8,461.6,186.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;