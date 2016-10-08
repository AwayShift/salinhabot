API.on(API.GRAB_UPDATE, function(user) {
    var media = API.getMedia();
    API.sendchat(obj.user.username + " added " + media.author + " - " + media.title);
}
