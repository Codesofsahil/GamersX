// Global page utilities for GamersX
// This file is loaded by various games for common functionality

// Prevent right-click context menu on games
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Add fullscreen support
function requestFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

// Console message
console.log('GamersX - Loaded everypage.js');