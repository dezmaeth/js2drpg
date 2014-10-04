(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }})("map",
{ "height":20,
 "layers":[
        {
         "data":[13, 2, 1, 2, 1, 2, 1, 28, 9, 7, 8, 8, 20, 27, 1, 2, 1, 2, 1, 2, 1, 14, 11, 14, 11, 14, 11, 28, 21, 7, 10, 19, 7, 27, 13, 1, 1, 14, 13, 14, 1, 14, 11, 2, 11, 2, 14, 40, 21, 22, 8, 21, 7, 39, 2, 2, 1, 2, 16, 38, 13, 14, 11, 11, 11, 14, 11, 28, 22, 9, 8, 21, 9, 27, 13, 16, 38, 38, 18, 22, 1, 2, 11, 2, 11, 2, 11, 40, 9, 20, 8, 10, 7, 39, 16, 18, 20, 8, 20, 8, 13, 14, 11, 14, 11, 14, 11, 1, 6, 8, 10, 7, 20, 17, 18, 7, 19, 21, 10, 5, 1, 2, 1, 2, 1, 2, 16, 37, 18, 9, 22, 8, 19, 22, 21, 7, 21, 7, 5, 3, 13, 14, 13, 14, 16, 37, 18, 20, 19, 19, 8, 21, 19, 22, 19, 19, 5, 26, 3, 14, 1, 16, 37, 38, 18, 22, 21, 22, 7, 9, 22, 5, 6, 5, 26, 26, 2, 1, 1, 2, 38, 18, 7, 10, 7, 9, 19, 7, 21, 5, 26, 14, 4, 3, 14, 2, 14, 1, 13, 14, 20, 20, 7, 20, 8, 9, 5, 25, 26, 3, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 22, 20, 22, 5, 25, 26, 3, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 21, 9, 5, 3, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 11, 2, 25, 26, 3, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 23, 14, 1, 2, 1, 2, 1, 11, 1, 2, 1, 2, 1, 2, 11, 2, 1, 2, 1, 2, 1, 2, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 1, 2, 1, 2, 11, 2, 1, 2, 1, 11, 1, 2, 1, 11, 1, 2, 1, 2, 1, 2, 13, 14, 13, 14, 23, 14, 13, 14, 13, 14, 13, 14, 13, 23, 13, 14, 13, 14, 13, 14, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14, 13, 14],
         "height":20,
         "name":"Background",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 123, 124, 125, 126, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131, 132, 133, 134, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "name":"Foreground",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 74, 75, 76, 77, 78, 79, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81, 82, 83, 84, 85, 86, 87, 88, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 89, 90, 91, 92, 93, 94, 95, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 98, 99, 100, 101, 102, 103, 104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 106, 107, 108, 109, 110, 111, 112, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 113, 114, 115, 116, 117, 118, 119, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 121, 122, 0, 0, 0, 0, 127, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 130, 0, 0, 0, 0, 135, 136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "name":"Top",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "height":20,
         "name":"Collision",
         "objects":[
                {
                 "height":60,
                 "name":"",
                 "properties":
                    {

                    },
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":127,
                 "x":287,
                 "y":354
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }],
 "orientation":"orthogonal",
 "properties":
    {

    },
 "renderorder":"right-down",
 "tileheight":32,
 "tilesets":[
        {
         "firstgid":1,
         "image":"tileset\/grass-tiles-2-small.png",
         "imageheight":192,
         "imagewidth":384,
         "margin":0,
         "name":"grass-tiles-2-small",
         "properties":
            {

            },
         "spacing":0,
         "tileheight":32,
         "tilewidth":32
        },
        {
         "firstgid":73,
         "image":"tileset\/tree2-final.png",
         "imageheight":256,
         "imagewidth":256,
         "margin":0,
         "name":"tree2-final",
         "properties":
            {

            },
         "spacing":0,
         "tileheight":32,
         "tilewidth":32
        },
        {
         "firstgid":137,
         "image":"tileset\/littleshrooms_0.png",
         "imageheight":40,
         "imagewidth":32,
         "margin":0,
         "name":"littleshrooms_0",
         "properties":
            {

            },
         "spacing":0,
         "tileheight":32,
         "tilewidth":32
        },
        {
         "firstgid":138,
         "image":"tileset\/qubodup-bush_berries_0.png",
         "imageheight":32,
         "imagewidth":32,
         "margin":0,
         "name":"qubodup-bush_berries_0",
         "properties":
            {

            },
         "spacing":0,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "firstgid":139,
         "image":"tileset\/tree2-final.png",
         "imageheight":256,
         "imagewidth":256,
         "margin":0,
         "name":"tree2-final",
         "properties":
            {

            },
         "spacing":0,
         "tileheight":256,
         "tilewidth":256
        }],
 "tilewidth":32,
 "version":1,
 "width":20
});