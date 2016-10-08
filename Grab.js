API.on(API.GRAB_UPDATE, callback);
function callback(obj) {
    var media = API.getMedia();
    API.sendchat(obj.user.username + " added " + media.author + " - " + media.title);
}
