var MapData = {     
        'gateMap': {
            numberOfRows : 20,
            numberOfColumns : 21,
            initialViewportX : SCALE_WIDTH * 0.5,
            initialViewportY : SCALE_WIDTH * 10,
            secondWalkableTileValue : 47,
            exitTileValue: 39,
            tileArray : [    
                5,  6,  5,  6,  5,  6, 14, 15, 15, 15, 15, 15, 15, 15, 16,  5,  6,  5,  6,  5,  6,
                3,  4,  3,  4,  3,  4, 14, 15, 15, 15, 15, 15, 15, 15, 16,  3,  4,  3,  4,  3,  4,    
                5,  6,  5,  6,  5,  6, 14, 15, 15, 15, 15, 15, 15, 15, 16,  5,  6,  5,  6,  5,  6,
                3,  4,  3,  4,  3,  4, 14, 15, 15, 15, 15, 15, 15, 15, 16,  3,  4,  3,  4,  3,  4,
                5,  6,  5,  6,  5,  6, 17, 18, 19, 20, 21, 22, 23, 24, 25,  5,  6,  5,  6,  5,  6,
                3,  4,  3,  4,  3,  4, 26, 27, 28, 29, 30, 31, 32, 33, 34,  3,  4,  3,  4,  3,  4,
                5,  6,  5,  6,  5,  6, 35, 36, 37, 38, 39, 40, 41, 42, 43,  5,  6,  5,  6,  5,  6,
                3,  4,  3,  4,  3,  4,  0, 44, 45, 46, 47, 48, 49, 50,  0,  3,  4,  3,  4,  3,  4,
                5,  6,  5,  6,  5,  6, 13, 13,  0,  0,  0,  0,  0, 13, 13,  5,  6,  5,  6,  5,  6,
                3,  4,  3,  4,  3,  4, 13,  0,  0,  0,  0,  0,  0, 99, 13,  3,  4,  3,  4,  3,  4,
                5,  6,  5,  6,  5,  6, 13,  0,  0,  0,  0,  0,  0,  0, 13,  5,  6,  5,  6,  5,  6,
                3,  4,  3,  4,  3,  4, 13,  0,  0,  0, 98,  0,  0,  0, 13,  3,  4,  3,  4,  3,  4,
                5,  6,  5,  6,  5,  6, 13,  0,  0,  0,  0,  0,  0,  0, 13,  5,  6,  5,  6,  5,  6,
                7,  8,  7,  8,  7,  8, 13,  0,  0,  0,  0,  0,  0,  0, 13,  7,  8,  7,  8,  7,  8,
               51, 51, 51, 51, 51, 53, 13, 13, 11,  0,  0,  0, 11, 13, 13, 54, 51, 51, 51, 51, 51,
               52, 52, 52, 52, 52, 55,  0,  0, 12,  0,  0,  0, 12,  0,  0, 56, 52, 52, 52, 52, 52,
               52, 52, 52, 52, 52, 52, 51, 51, 51, 51, 51, 51, 51, 51, 51, 52, 52, 52, 52, 52, 52,
               52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52,
               52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52,
               52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52,
               52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52,
                ]
        },

        'room': {
                numberOfRows : 12,
                numberOfColumns : 13,
                initialViewportX : SCALE_WIDTH * 0.5,
                initialViewportY : SCALE_WIDTH * 10,
                secondWalkableTileValue : 0,
                exitTileValue: 14,
                tileArray : [    
                    5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,
                    6,  7,  6,  7,  6,  8,  9, 10,  7,  6,  7,  6,  7,
                   11, 12, 11, 12, 11, 13, 14, 15, 12, 11, 12, 11, 12,
                    1,  0,  2,  0,  0,  0,  0,  0,  0,  0,  2,  0,  1,
                    1,  0,  3,  0,  0,  0,  0,  0,  0, 99,  3,  0,  1,
                    1,  0,  4,  0,  0,  0,  0,  0,  0,  0,  4,  0,  1,
                    1,  0,  0,  0,  0,  0, 98,  0,  0,  0,  0,  0,  1,
                    1,  0,  2,  0,  0,  0,  0,  0,  0,  0,  2,  0,  1,
                    1,  0,  3,  0,  0,  0,  0,  0,  0,  0,  3,  0,  1,
                    1,  0,  4,  0,  0,  0,  0,  0,  0,  0,  4,  0,  1,
                    1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,
                   16, 16, 16, 16, 16, 16,  0, 16, 16, 16, 16, 16, 16,      
                ]
        },

        'finalRoom': {
                numberOfRows : 12,
                numberOfColumns : 13,
                initialViewportX : SCALE_WIDTH * 0.5,
                initialViewportY : SCALE_WIDTH * 10,
                secondWalkableTileValue : 0,
                exitTileValue: 14,
                tileArray : [    
                    5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,
                    6,  7,  6,  7,  6,  7,  6,  7,  6,  7,  6,  7,  6,
                   11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 11, 12, 11,
                    1,  0,  2,  0,  0,  0,  0,  0,  0,  0,  2,  0,  1,
                    1,  0,  3,  0,  0,  0,  0,  0,  0,  0,  3,  0,  1,
                    1,  0,  4,  0,  0,  0,  0,  0,  0,  0,  4,  0,  1,
                    1,  0,  0,  0,  0,  0, 98,  0,  0,  0,  0,  0,  1,
                    1,  0,  2,  0,  0,  0,  0,  0,  0,  0,  2,  0,  1,
                    1,  0,  3,  0,  0,  0,  0,  0,  0,  0,  3,  0,  1,
                    1,  0,  4,  0,  0,  0,  0,  0,  0,  0,  4,  0,  1,
                    1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,
                   16, 16, 16, 16, 16, 16,  0, 16, 16, 16, 16, 16, 16,      
                    ]
            }
}