API.on(API.GRAB_UPDATE {
    var media = API.getMedia();
    API.sendchat(obj.user.username + " added " + media.author + " - " + media.title);
}
