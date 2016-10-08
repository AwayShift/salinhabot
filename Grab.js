API.on(API.GRAB_UPDATE, callback);
function callback(obj) {
    var media = API.getMedia();
    alert(obj.user.username + " added " + media.author + " - " + media.title);
}
