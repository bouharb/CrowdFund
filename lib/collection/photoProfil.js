/**
 * Created by wael on 18/03/2016.
 */

var base = "";
if (Meteor.isServer) {
    base = process.env.PWD;
    var createThumb = function(fileObj, readStream, writeStream) {
        // Transform the image into a 10x10px thumbnail
        gm(readStream, fileObj.name()).resize('10', '10').stream().pipe(writeStream);
    };
}
Images = new FS.Collection("images", {
    stores: [new FS.Store.FileSystem("images", {path:'/Users/wael/IdeaProjects/CrowdFund/.uploads',
        transformWrite: resizeImageStream({
            width: 150,
            height: 150,
            quality: 100
        })
        }
    )],
    filter: {
        allow: {
            contentTypes: ['image/*'],
            extensions: ['png', 'PNG', 'jpg', 'JPG', 'jpeg', 'JPEG']
        }
    }
});
Images.allow({

    download: function(userId, doc) {
        return true;
    },
    insert: function() {

        return true
    },
    update: function() {
        return true
    },
    remove: function() {
        return true;
    },
});
/*Meteor.users.deny({
    update: function() {
        return noConsoleUpdates; // set in environment.js
    },
});*/