/**
 * Created by wael on 04/03/2016.
 */
/*Images = new FS.Collection("images", {
    stores: [new FS.Store.FileSystem("images", {path: "/uploads"})]
});*/
var imageStore = new FS.Store.GridFS("images");

Images = new FS.Collection("images", {
    stores: [imageStore]
});