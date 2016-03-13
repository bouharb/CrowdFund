Meteor.startup(function () {
  // init items collection
 /* console.log(this.userId)

  if (Items.find().count() == 0) {
    Items.insert({name: 'My Item', uploads: []});
  }*/
  UploadServer.init({
    tmpDir:  '/Users/wael/Documents/Uploads/tmp',
    uploadDir: '/Users/wael/Documents/Uploads/',
    checkCreateDirectories: true,

    finished: function(fileInfo, formFields)
    {
      console.log('File: ' + JSON.stringify(fileInfo));
      console.log('Form Data: ' + JSON.stringify(formFields));
      fileInfo.extraData = formFields;

    }
  /*  getDirectory: function(fileInfo, formData) {
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
    }*/
  });
});
