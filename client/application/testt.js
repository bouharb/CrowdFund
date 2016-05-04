/**
 * Created by wael on 04/05/2016.
 */
var st = setTimeout(function(){
    $('a[href$="/admin/users"]').remove();
    $('a[href$="/admin/houston_admins"]').remove();
    if(!($('a[href$="/admin/users"]').length > 0)){
        clearTimeout(st);
    }
}, 2000);
console.log(Meteor.userId());