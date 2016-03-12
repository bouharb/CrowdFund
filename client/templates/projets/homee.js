/**
 * Created by wael on 11/03/2016.
 */
Template['home'].helpers({
    myFormData: function() {
        return { directoryName: 'images', prefix: this._id, _id: this._id }
    },
    filesToUpload: function() {
        return Uploader.info.get();
    },

    specificFormData: function() {
        return {
            id: this._id,
            other: this.other,
            hard: 'Lolcats'
        }}
});

Template['uploadedInfo'].helpers({
    src: function() {
        if (this.type.indexOf('image') >= 0) {
            return 'upload/' + this.path;
        } else return 'file_icon.png';
    }
});

Template['uploadedInfo'].events({
    'click .deleteUpload':function() {
        if (confirm('Are you sure?')) {
            Meteor.call('deleteFile', this._id);
        }
    }
})