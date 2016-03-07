Meteor.startup(function () {
  // init items collection
  if (Items.find().count() == 0) {
    Items.insert({name: 'My Item', uploads: []});
  }

  UploadServer.init({
    tmpDir:  '/Users/wael/Documents/Uploads/tmp',
    uploadDir: '/Users/wael/Documents/Uploads/',
    checkCreateDirectories: true,
    getDirectory: function(fileInfo, formData) {
      if (formData && formData.directoryName != null) {
        return formData.directoryName;
      }
      return "";
    },
    getFileName: function(fileInfo, formData) {
      if (formData && formData.prefix != null) {
        return formData.prefix + '_' + fileInfo.name;
      }
      return fileInfo.name;
    },
    finished: function(fileInfo, formData) {
      if (formData && formData._id != null) {
        Items.update({_id: formData._id}, { $push: { uploads: fileInfo }});
      }
    }
  });
});