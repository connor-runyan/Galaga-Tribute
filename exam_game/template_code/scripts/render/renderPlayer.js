Galaga.render.Player = (function (graphics) {
    'use strict';

    //drawTexture(image, center, rotation, size)

    function renderPlayer(player) {
        let scale = 1
        let center = {
            x: player.coords.x + (player.size / 2),
            y: player.coords.y + (player.size / 2),
        };
        if (player.image.isReady && player.won) {
            graphics.drawTexture(player.image, player.center, player.rotation, { width: player.size * scale, height: player.size * scale });
        }
    }

    let api = {
        renderPlayer: renderPlayer,
    };

    return api;

}(Galaga.graphics));
