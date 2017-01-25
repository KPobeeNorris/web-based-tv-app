(function(exports) {
    'use strict';

    var settings = {
        Model: YouTubeAPIModel,
        PlayerView: YouTubePlayerView,
        PlaylistView: PlaylistPlayerView,
        showSearch: true,
        skipLength: 30,
        controlsHideTime: 3000,
        user: "SaturdayNightLive",
        devKey: "AIzaSyDMu5RV9JGBgWHVCSd6gLXV-VezXfvKx30",
        channels: [
            {
                type: "playlist",
                id: "PLS_gQd8UB-hKBv5jBQSqf4fQbjz-1BCSZ",
                title: "Music on SNL"
            },
            {
                type: "searchterm",
                query: "Kate McKinnon",
                title: "Kate McKinnon"
            },
            {
                type: "searchterm",
                query: "Kristen Wiig",
                title: "Kristen Wiig"
            },
            {
                type: "searchterm",
                query: "Lawrence Welk Show",
                title: "Lawrence Welk Show"
            },
            {
                type: "searchterm",
                query: "Gilly",
                title: "Gilly"
            },
        ],

        showLatestChannel: true,

        displayButtons: false
    };

    exports.app = new App(settings);
}(window));
